// components/ui/modal.tsx
import { FC, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "./dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      <DialogContent className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto z-50">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-800 dark:text-white">
            {title}
          </DialogTitle>{" "}
          <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
            Update the fields below to edit the product details. Changes will be
            saved once you click 'Save'.
          </DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
