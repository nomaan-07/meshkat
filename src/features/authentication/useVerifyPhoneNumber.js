import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { verifyPhoneNumber as verifyPhoneNumberApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useVerifyPhoneNumber() {
  const navigate = useNavigate();

  const { mutate: verifyNumber, isPending } = useMutation({
    mutationFn: verifyPhoneNumberApi,
    onSuccess: () => {
      toast.success("ورود با موفقیت انجام شد");
      navigate("/");
    },
    onError: () => toast.error("خطایی در ورود رخ داده است"),
  });

  return { verifyNumber, isPending };
}
