import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully Created!, Please verify the new account from user's email address"
      );
    },
  });

  return { signUp, isPending };
}
