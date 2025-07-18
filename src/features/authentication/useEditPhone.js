import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editPhone as editPhoneApi } from "../../services/apiAuth";

export function useEditPhone() {
  const { mutate: editPhone, isPending } = useMutation({
    mutationFn: editPhoneApi,
    onSuccess: () => {
      toast.success("شماره جدید با موفقیت تنظیم شد");
    },
    onError: (error) => {
      toast.error("خطایی در تغییر شماره رخ داده است");
      console.log(error);
    },
  });
  return { editPhone, isPending };
}
