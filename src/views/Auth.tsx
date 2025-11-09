import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema, type LoginSchema, type RegisterSchema } from "../validation/authSchemas";
import RegisterForm from "../components/forms/RegisterForm";
import LoginForm from "../components/forms/LoginForm";

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

