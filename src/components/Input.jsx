import { forwardRef } from "react";

const Input = forwardRef(function Input({ labelText, ...props }, ref) {
  return (
    <>
      <p>
        <label>{labelText}</label>
      </p>

      <p>
        <input
          ref={ref}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          {...props}
        />
      </p>
    </>
  );
});

export default Input;
