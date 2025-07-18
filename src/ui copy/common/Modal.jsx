import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import ModalCloseButton from "../buttons/ModalCloseButton";
import { useEffect } from "react";

function Modal({ children, isOpen = false, onClose, closeButton = true }) {
  // Delet scroll of body when the modal opens
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
        <div className="relative z-110 max-h-[96vh] overflow-y-auto rounded-xl bg-white px-4 py-6 shadow">
          {children}
          {closeButton && <ModalCloseButton onClose={onClose} />}
        </div>
        <Overlay isOpen={isOpen} onClose={onClose} />
      </div>
    </>,
    document.body
  );
}

export default Modal;
