import { LucideMoreHorizontal, LucidePencil, LucideTrash2 } from "lucide-react";
import { useState } from "react";
import Button from "../buttons/Button";
import TableActionButton from "../buttons/TableActionButton";
import Modal from "../common/Modal";

function TableAction() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  function handleOpenDeleteModal() {
    console.log("test");
    setIsDeleteModalOpen(true);
  }
  function HandleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`relative rounded-md px-0.5 md:cursor-pointer md:hover:bg-gray-200 ${isOpen ? "bg-gray-200" : ""}`}
        role="button"
        onClick={toggleOpen}
      >
        <LucideMoreHorizontal className="size-4.5" />
        {isOpen && (
          <div className="absolute -top-9.5 left-10 z-10 w-fit rounded-lg bg-white shadow">
            <TableActionButton label={"ویرایش"} variation="edit">
              <LucidePencil className="size-3.5" />
            </TableActionButton>
            <TableActionButton
              label="حذف"
              variation="delete"
              onClick={handleOpenDeleteModal}
            >
              <LucideTrash2 className="size-3.5" />
            </TableActionButton>
          </div>
        )}
      </div>
      <Modal isOpen={isDeleteModalOpen} onClose={HandleCloseDeleteModal}>
        <div className="space-y-6 px-2 pt-6">
          <div>
            آیا از حذف <span className="text-primary">نعمان ریگی کوته</span>{" "}
            مطمئن هستید؟
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={HandleCloseDeleteModal}>
              انصراف
            </Button>
            <Button variant="danger">حذف</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TableAction;
