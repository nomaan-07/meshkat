import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      toast.success("ورود با موفقیت انجام شد");
      navigate("/");
    },
    onError: () => toast.error("خطایی در ورود رخ داده است"),
  });
  return { login, isPending };
}
