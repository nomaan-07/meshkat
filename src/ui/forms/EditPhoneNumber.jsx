import { useForm } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
import { useEditPhone } from "../../features/authentication/useEditPhone";
import { removeCookie, setCookie } from "../../utils/cookies";
import { convertToInternationalPhone } from "../../utils/helpers";
import { phoneNumberValidation } from "../../utils/validations";
import Button from "../buttons/Button";
import Modal from "../common/Modal";
import Heading from "../layout/Heading";
import Form from "./Form";
import Input from "./Input";

function EditPhoneNumber({ isOpen, onClose, closeButton }) {
  const { editPhone, isPending } = useEditPhone();
  const { register, handleSubmit, formState: errors } = useForm();

  function onSubmit(data) {
    const newUserNumber = {
      new_phone: convertToInternationalPhone(data.phone),
    };

    editPhone(newUserNumber, {
      onSuccess: () => {
        removeCookie("user_phone");
        setCookie("new_phone", newUserNumber.new_phone);
        onClose();
      },
    });
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeButton={closeButton}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        variation="regular"
        className="p-4"
      >
        <Heading as="h4" className="mb-4 text-center">
          تغییر شماره موبایل
        </Heading>

        <Input
          type="phone"
          register={register}
          name="phone"
          placeholder="09xxxxxxxxx"
          validation={phoneNumberValidation()}
          error={errors?.phone}
          className="mt-10"
        />

        <Button
          type="submit"
          icon={FiCheck}
          iconPosition="right"
          disabled={isPending}
        >
          {isPending ? "در حال تایید..." : "تایید"}
        </Button>
      </Form>
    </Modal>
  );
}

export default EditPhoneNumber;
