import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./auth-page/login.tsx";
import Register from "./auth-page/register.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
