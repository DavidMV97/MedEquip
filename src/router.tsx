import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Auth from "./views/Auth";

const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {path: '/auth', element: <Auth />}
        ]
    }
])


export default router;