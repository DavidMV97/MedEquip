import DynamicForm, { type FieldConfig } from "../ui/DynamicForm";

const RegisterForm = () => {
  const fields: FieldConfig[] = [
    {
      name: "name",
      label: "Nombre completo",
      type: "text",
      validation: { required: "El nombre es obligatorio" },
    },
    {
      name: "email",
      label: "Correo electrónico",
      type: "email",
      validation: {
        required: "El correo es obligatorio",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "El correo no es válido",
        },
      },
    },
    {
      name: "password",
      label: "Contraseña",
      type: "password",
      validation: {
        required: "La contraseña es obligatoria",
        minLength: {
          value: 6,
          message: "Debe tener al menos 6 caracteres",
        },
      },
    },
  ];

  const handleSubmit = (data: Record<string, string>) => {
    console.log("Datos del registro:", data);
  };

  return (
    <DynamicForm
      fields={fields}
      onSubmit={handleSubmit}
      submitLabel="Registrarse"
    />
  );
};

export default RegisterForm;
