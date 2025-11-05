import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema, type LoginSchema, type RegisterSchema } from "../validation/authSchemas";

export default function Auth() {
  const [view, setView] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-sky-700 text-white w-14 h-14 flex items-center justify-center rounded-md text-2xl font-bold">
            M
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800">MedEquip Pro</h1>
          <p className="text-gray-500 text-sm text-center">
            Sistema de administración de equipos biomédicos
          </p>
        </div>

        {/* Tabs */}
        <div className="flex rounded-lg overflow-hidden mb-3 bg-gray-100 px-2.5 py-2.5 max-h-12 items-center">
          <button
            onClick={() => setView("login")}
            className={`w-1/2 py-2  font-medium cursor-pointer ${
              view === "login" ? "bg-gray-50" : "text-gray-500"
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setView("register")}
            className={`w-1/2 py-2 font-medium cursor-pointer ${
              view === "register" ? "bg-gray-50" : "text-gray-500"
            }`}
          >
            Registrarse
          </button>
        </div>

        {view === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

/* LOGIN FORM */
function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("Login data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
        <input
          {...register("email")}
          className="w-full p-2 mt-1 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-gray-100"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Contraseña</label>
        <input
          type="password"
          {...register("password")}
          className="w-full p-2 mt-1 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-gray-100"
        />
        {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
      </div>

      <button type="submit" className="w-full bg-sky-700 text-white py-2 rounded-md hover:bg-sky-800 cursor-pointer">
        Iniciar Sesión
      </button>
    </form>
  );
}

/* REGISTER FORM */
function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log("Register data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nombre</label>
        <input
          {...register("name")}
          className="w-full p-2 mt-1 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-gray-100"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
        <input
          {...register("email")}
          className="w-full p-2 mt-1 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-gray-100"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Contraseña</label>
        <input
          type="password"
          {...register("password")}
          className="w-full p-2 mt-1 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-gray-100"
        />
        {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
      </div>

      <button type="submit" className="w-full bg-sky-700 text-white py-2 rounded-md hover:bg-sky-800 cursor-pointer">
        Registrarse
      </button>
    </form>
  );
}
