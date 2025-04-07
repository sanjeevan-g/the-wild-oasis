/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";

  const page = searchParams.get("page") || null;

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);

    // reset the page param
    if (page) {
      searchParams.set("page", 1);
    }
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}
export default SortBy;
