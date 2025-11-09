import { Link } from "react-router-dom";
import DynamicForm, { type FieldConfig } from "../ui/DynamicForm";
import LabelTitle from "../ui/LabelTitle";

const RegisterForm = () => {
    const fields: FieldConfig[] = [
        {
            name: "name",
            label: "Nombre completo",
            type: "text",
            placeholder: "Ej: Juan Pérez",
            validation: { required: "El nombre es obligatorio" },
        },
        {
            name: "email",
            label: "Correo electrónico",
            placeholder: "Ej: usuario@correo.com",
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
            placeholder: "********",
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
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
            <LabelTitle />
            <DynamicForm
                fields={fields}
                onSubmit={handleSubmit}
                submitLabel="Registrarse"
            />
            <nav className='mt-5'>
                <Link to="/auth/login" className="font-medium text-gray-800 hover:underline"> ¿Ya tienes cuenta? Inicia Sesión </Link>
            </nav>
        </div>

    );
};

export default RegisterForm;
