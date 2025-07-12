import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("ثبت نام با موفقیت انجام شد!");
      navigate("/verification");
    },
    onError: (error) => {
      toast.error(error?.message || "خطایی در ثبت نام رخ داده است!");
      console.error(error);
    },
  });

  return { signup, isPending };
}
