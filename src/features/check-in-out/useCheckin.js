import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} is successfully checked in`);
      queryClient.invalidateQueries({ predicate: (query) => query.isActive });
      navigate("/");
    },
    onError: (err) => {
      toast.error("There was an error while checking in", err.message);
    },
  });

  return { checkin, isCheckingIn };
}
