import React, { useEffect } from "react";

interface SuccessToastProps {
  message: string;
  onClose: () => void; // Callback function to close the toast
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message, onClose }) => {
  // Automatically close the toast after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="flex items-center p-4 bg-green-100 rounded-lg dark:bg-green-800 text-green-500">
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        className="ml-auto text-green-500 hover:text-green-700 dark:hover:text-green-300"
        onClick={onClose}
        aria-label="Close toast"
      >
        &times; {/* Close icon (X) */}
      </button>
    </div>
  );
};

export default SuccessToast;
