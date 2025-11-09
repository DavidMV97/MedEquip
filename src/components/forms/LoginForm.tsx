import DynamicForm, { type FieldConfig } from "../ui/DynamicForm";

const LoginForm = () => {
  const fields: FieldConfig[] = [
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
    console.log("Datos del inicio de Sesión:", data);
  };

  return (
    <DynamicForm
      fields={fields}
      onSubmit={handleSubmit}
      submitLabel="Iniciar Sesión"
    />
  );
};

export default LoginForm;
