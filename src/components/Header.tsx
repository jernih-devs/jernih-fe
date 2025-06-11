import { Link } from "react-router";

export default function Header() {
	return (
		<header className="fixed z-10 w-full bg-white flex justify-between items-center shadow-lg py-3 sm:py-7 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
			<h1 className="text-lg sm:text-3xl text-blue-500 font-black">Jernih</h1>
			<nav>
				<ul>
					<li>
						<Link to={"/login"}>
							<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
								Login
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
