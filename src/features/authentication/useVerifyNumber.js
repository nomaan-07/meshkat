import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { verifyNumber as verifyNumberApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useVerifyNumber() {
  const navigate = useNavigate();

  const { mutate: verifyNumber, isPending } = useMutation({
    mutationFn: verifyNumberApi,
    onSuccess: () => {
      toast.success("ورود با موفقیت انجام شد");
      navigate("/");
    },
    onError: () => toast.error("خطایی در ورود رخ داده است"),
  });

  return { verifyNumber, isPending };
}
