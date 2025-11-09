import React from "react";
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
  label: string;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  options?: { label: string; value: string }[];
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  registration,
  error,
  options,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>

      {type === "textarea" ? (
        <textarea
          {...registration}
          className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
          }`}
          rows={4}
        />
      ) : type === "select" ? (
        <select
          {...registration}
          className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
          }`}
        >
          <option value="">Seleccionar...</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          {...registration}
          className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
          }`}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FormField;
