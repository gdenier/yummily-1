import { forwardRef, HTMLInputTypeAttribute, ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface TextInputProps extends UseFormRegisterReturn {
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, placeholder, type = "text", ...formProps }, ref): ReactElement => {
    return (
      <div className="form-control w-full">
        {label && (
          <label htmlFor="title" className="label">
            <span className="label-text">{label}</span>
          </label>
        )}
        <input
          {...formProps}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
