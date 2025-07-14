import { useMutation } from "@tanstack/react-query";
import { resendOtp as resendOtpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useResendOtp() {
  const { mutate: resendOtp } = useMutation({
    mutationFn: resendOtpApi,
    onError: () => toast.error("خطایی در ارسال کد رخ داده است"),
  });
  return { resendOtp };
}
