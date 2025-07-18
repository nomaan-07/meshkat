import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../../services/apiAuth";
import { setCookie } from "../../utils/cookies";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      toast.success("ثبت نام با موفقیت انجام شد!");
      setCookie("register_token", data.temp_token);
      navigate("/verification");
    },
    onError: (error) => {
      if (error.message.includes("400")) {
        toast.error("شما قبلا با این شماره ثبت نام کرده اید");
      } else if (error.message.includes("404")) {
        toast.error("شماره شما در بله ثبت نام نشده است");
      } else {
        toast.error(error?.message || "خطایی در ثبت نام رخ داده است!");
        console.log(error);
      }
    },
  });

  return { signup, isPending };
}
