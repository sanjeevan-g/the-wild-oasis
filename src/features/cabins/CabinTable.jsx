import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";

export default function CabinTable() {
  // we will use useQuery

  const { cabins, isLoading } = useCabins();

  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // 1. FILTER

  // will get 'all' by default
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount == 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2. SORT

  const sortBy = searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortBy.split("-");

  const modifer = direction === "asc" ? 1 : -1;

  const compareFn = (a, b) => {
    // sort by string
    if (field === "name") {
      return (a[field] < b[field] ? -1 : 1) * modifer;
    }

    return (a[field] - b[field]) * modifer;
  };

  const sortedCabins = filteredCabins.sort(compareFn);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}
