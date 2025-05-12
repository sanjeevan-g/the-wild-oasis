import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // remove all query data
      queryClient.removeQueries();
      // redirect to login
      navigate("/login", { replace: true });
    },
  });

  return { logout, isPending };
}
