import {IModalProps} from "../../interfaces/utils";
import {FC} from "react";

const Modal: FC<IModalProps> = ({ isOpen = false, onClose, children }) => {
    /*
    * This is a reusable modal component
    * */
    if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;