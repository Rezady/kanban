import clsx from "clsx";
import { useEffect, useState } from "react";
import Button from "./Button";
import { ModalProps } from "./core/types";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  onProceed,
}) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 300);
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleOverlayClick}
      />
      {visible && (
        <div
          className={`flex flex-col items-start justify-start relative bg-white rounded-lg shadow-lg max-w-xl w-full  transform transition-transform duration-300 ${
            isOpen ? "translate-y-0 scale-100" : "translate-y-10 scale-95"
          }`}
        >
          <div
            className={clsx(
              "px-8 py-6 max-h-[70vh] w-full flex flex-col gap-6 justify-center items-center"
            )}
          >
            {children}
          </div>
          {/* Footer */}

          <div className="flex justify-end gap-4 w-full px-6 py-4 border-t border-white03">
            <Button title="Cancel" onClick={onClose} background="red" />
            <Button title="Proceed" onClick={onProceed} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
