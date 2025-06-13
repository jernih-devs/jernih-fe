import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./auth-page/login.tsx";
import Register from "./auth-page/register.tsx";
import Edukasi1 from "./education-page/edukasi1.tsx";
import Edukasi2 from "./education-page/edukasi2.tsx";
import Edukasi3 from "./education-page/edukasi3.tsx";
import Edukasi4 from "./education-page/edukasi4.tsx";
import PostPage from "./post-page/postPage.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import PublicRoute from "./components/PublicRoute.tsx";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: (
			<PublicRoute>
				<Login />
			</PublicRoute>
		),
	},
	{
		path: "/register",
		element: (
			<PublicRoute>
				<Register />
			</PublicRoute>
		),
	},
	{
		path: "/membuat-filter-air-sederhana",
		element: (
			<PublicRoute>
				<Edukasi1 />
			</PublicRoute>
		),
	},
	{
		path: "/air-kamu-layak-pakai-atau-tidak",
		element: (
			<PublicRoute>
				<Edukasi2 />
			</PublicRoute>
		),
	},
	{
		path: "/cara-menyimpan-air-bersih-agar-aman",
		element: (
			<PublicRoute>
				<Edukasi3 />
			</PublicRoute>
		),
	},
	{
		path: "/dampak-air-tercemar-bagi-kehidupan",
		element: (
			<PublicRoute>
				<Edukasi4 />
			</PublicRoute>
		),
	},
	{
		path: "/post/:slug",
		element: (
			<PublicRoute>
				<PostPage />
			</PublicRoute>
		),
	},
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={queryClient}>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</QueryClientProvider>
);
