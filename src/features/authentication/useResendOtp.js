import { useMutation } from "@tanstack/react-query";
import { resendOtp as resendOtpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useResendOtp() {
  const { mutate: resendOtp } = useMutation({
    mutationFn: resendOtpApi,
    onSuccess: () => toast.success("کد با موفقیت ارسال شد"),
    onError: (error) => {
      toast.error("خطایی در ارسال کد رخ داده است");
      console.log(error);
    },
  });
  return { resendOtp };
}
