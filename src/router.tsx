import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./views/Dashboard";
import Layout from "./layouts/Layout";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";

const router = createBrowserRouter([
     {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Dashboard /> },
        ]
    },
    
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {path: '/auth/login', element: <LoginForm />},
            {path: '/auth/register', element: <RegisterForm />}
        ]
    }
])


export default router;