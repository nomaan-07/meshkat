import { useMutation } from "@tanstack/react-query";
import { editphone as editphoneApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useEditPhone() {
  const { mutate: editPhone, isPending } = useMutation({
    mutationFn: editphoneApi,
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
