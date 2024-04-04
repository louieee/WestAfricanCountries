export interface IModalProps {
  isOpen?: boolean; // Flag to control modal visibility
  onClose?: () => void; // Optional close handler function
  children?: React.ReactNode; // Content to be displayed inside the modal
}
