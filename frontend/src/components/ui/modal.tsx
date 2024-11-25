// components/ui/modal.tsx
import { FC, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
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
          </DialogTitle>
        </DialogHeader>
        <div>{children}</div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Close
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
