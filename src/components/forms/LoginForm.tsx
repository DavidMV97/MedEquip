import { Link } from "react-router-dom";
import DynamicForm, { type FieldConfig } from "../ui/DynamicForm";
import LabelTitle from "../ui/LabelTitle";

const LoginForm = () => {
    const fields: FieldConfig[] = [
        {
            name: "email",
            label: "Correo electrónico",
            type: "email",
            placeholder: "Ej: usuario@correo.com",
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
        console.log("Datos del inicio de Sesión:", data);
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
            <LabelTitle />
            <DynamicForm
                fields={fields}
                onSubmit={handleSubmit}
                submitLabel="Iniciar Sesión"
            />
            <nav className='mt-5'>
                <Link to="/auth/register" className="font-medium text-gray-800 hover:underline" >¿No tienes cuenta? Crea una </Link>
            </nav>
        </div>
    );
};

export default LoginForm;
