import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormField from "./FormField";

type FieldType = "text" | "email" | "password" | "select" | "textarea";

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  options?: { label: string; value: string }[]; // Solo para selects
  validation?: Record<string, any>;
}

interface DynamicFormProps {
  fields: FieldConfig[];
  onSubmit: SubmitHandler<Record<string, string>>;
  submitLabel?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit, submitLabel = "Enviar" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, string>>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md"
    >
      {fields.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          type={field.type}
          registration={register(field.name, field.validation)}
          error={errors[field.name]}
        />
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {submitLabel}
      </button>
    </form>
  );
};

export default DynamicForm;
