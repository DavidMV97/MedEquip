import React from "react";
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
    label: string;
    type?: string;
    registration: UseFormRegisterReturn;
    error?: FieldError;
    options?: { label: string; value: string }[];
    placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    type = "text",
    registration,
    error,
    options,
    placeholder
}) => {
    return (
        <div className="mb-3">
            <label className="block text-sm mb-1 text-gray-800 font-medium">{label}</label>

            {type === "textarea" ? (
                <textarea
                    {...registration}
                    placeholder={placeholder}
                    className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 bg-gray-50 ${error ? "border-red-500 focus:ring-red-400" : "border-gray-100 focus:ring-blue-400"
                        }`}
                    rows={4}
                />
            ) : type === "select" ? (
                <select
                    {...registration}
                    className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 bg-gray-50 ${error ? "border-red-500 focus:ring-red-400" : "border-gray-100 focus:ring-blue-400"
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
                    placeholder={placeholder}
                    {...registration}
                    className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 bg-gray-50 ${error ? "border-red-500 focus:ring-red-400" : "border-gray-100 focus:ring-blue-400"
                        }`}
                />
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

export default FormField;
