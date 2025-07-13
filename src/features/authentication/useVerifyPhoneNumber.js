import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { verifyPhoneNumber as verifyPhoneNumberApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useVerifyPhoneNumber() {
  const navigate = useNavigate();

  const { mutate: verifyNumber, isPending } = useMutation({
    mutationFn: verifyPhoneNumberApi,
    onSuccess: (data) => {
      toast.success("ورود با موفقیت انجام شد");
      navigate("/");
      console.log(data);
    },
    onError: (error) => {
      toast.error("خطایی در ورود رخ داده است");
      console.log(error);
    },
  });

  return { verifyNumber, isPending };
}
