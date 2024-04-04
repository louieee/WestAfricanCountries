import {IModalProps} from "../../interfaces/utils";

const Modal: React.FC<IModalProps> = ({ isOpen = false, onClose, children }) => {
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