import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Auth from "./views/Auth";
import Dashboard from "./views/Dashboard";
import Layout from "./layouts/Layout";

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
            {path: '/auth', element: <Auth />}
        ]
    }
])


export default router;