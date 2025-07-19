import { LucidePlus } from "lucide-react";
import { useState } from "react";
import AddUserForm from "../../features/Users/AddUserForm";
import TableOperationButton from "../buttons/TableOperationButton";
import Modal from "../common/Modal";
function AddUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <TableOperationButton
        icon={LucidePlus}
        text="کاربر جدید"
        onClick={handleOpenModal}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddUserForm />
      </Modal>
    </>
  );
}

export default AddUser;
