import React, { useState } from "react";
import Layout from "./layout";
import { Link } from "react-router";
import { Eye, EyeClosed } from "lucide-react";

const Login: React.FC = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<Layout>
			<div className="z-10 w-full max-w-full flex flex-col justify-between">
				<p className="block xl:hidden text-blue-500 text-xl font-bold">Jernih</p>
				<p className="hidden xl:block text-end text-xs sm:text-lg font-medium text-gray-500">
					Belum punya akun?{" "}
					<Link className="text-blue-600" to={"/register"}>
						Daftar
					</Link>
				</p>
				<div className="w-full max-w-full">
					<div className="text-center space-y-5 mb-8">
						<h1 className="text-xl sm:text-3xl text-zinc-700 font-bold">
							Ayo masuk‼️
						</h1>
						<p className="text-xs sm:text-base">
							Kami ada dan hadir untuk kepedulian melahirkan perubahan
						</p>
					</div>
					<form className="w-full max-w-md mx-auto text-xs sm:text-lg" action="">
						<ul className="space-y-5 sm:space-y-10">
							<li className="flex flex-col gap-2">
								<label htmlFor="">Email</label>
								<input
									className="w-full border border-zinc-700 py-3 px-5 rounded-xl outline-none"
									type="text"
									placeholder="Masukkan Email Kamu!"
								/>
							</li>
							<li className="flex flex-col gap-2">
								<label htmlFor="">Password</label>
								<div className="flex items-center border border-zinc-700 py-3 px-5 rounded-xl">
									<input
										className="w-full outline-none"
										type={showPassword ? "text" : "password"}
										placeholder="Masukkan Password Kamu!"
									/>
									{showPassword ? (
										<Eye
											onClick={() => setShowPassword(!showPassword)}
											className="cursor-pointer flex-shrink-0 ml-2"
										/>
									) : (
										<EyeClosed
											onClick={() => setShowPassword(!showPassword)}
											className="cursor-pointer flex-shrink-0 ml-2"
										/>
									)}
								</div>
							</li>
							<li>
								<Link to={"/"}>
									<button className="cursor-pointer w-full bg-blue-500 text-white font-semibold rounded-full p-3">
										Masuk
									</button>
								</Link>
							</li>
							<li>
								<p className="block xl:hidden text-end text-xs sm:text-lg font-medium text-gray-500">
									Belum punya akun?{" "}
									<Link className="text-blue-600" to={"/register"}>
										Daftar
									</Link>
								</p>
							</li>
						</ul>
					</form>
				</div>
				<div>
					<p className="font-semibold text-zinc-900 text-center text-xs sm:text-base">
						&copy; Copyright <span className="text-blue-500">Jernih</span>
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
