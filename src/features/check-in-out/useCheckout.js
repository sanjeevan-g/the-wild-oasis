import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isPending: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} is successfully checked out`);
      queryClient.invalidateQueries({ predicate: (query) => query.isActive });
    },
    onError: (err) => {
      toast.error("There was an error while checking out", err.message);
    },
  });

  return { checkout, isCheckingOut };
}
