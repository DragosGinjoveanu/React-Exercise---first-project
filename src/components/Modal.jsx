import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-black/50 w-full max-w-md rounded-lg shadow-lg border border-gray-300 p-0"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{children}</h1>

      <form
        method="dialog"
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md"
      >
        <button className="text-red-600 hover:text-red-700 transition-colors duration-200 self-end focus:outline-none">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
