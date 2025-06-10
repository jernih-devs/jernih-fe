import { Link } from "react-router";
import { useState, useEffect } from "react";
import {
	BadgeAlert,
	BookMarked,
	DropletOff,
	Facebook,
	Instagram,
	ShieldCheck,
	Twitter,
} from "lucide-react";

export default function Home() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentSlide2, setCurrentSlide2] = useState(0);

	const slides = [
		{ id: 1, image: "/banner1.jpg" },
		{ id: 2, image: "/banner2.jpg" },
		{ id: 3, image: "/banner3.png" },
		{ id: 4, image: "/banner4.png" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [slides.length]);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const slides2 = [
		{
			id: 1,
			image: "/pengaduan1.jpg",
			title: "Sumur keruh dan berlumpur",
			description:
				"Sumur di daerah ini menghasilkan air yang keruh dan berlumpur, tidak layak digunakan untuk mandi, mencuci, apalagi dikonsumsi. Warga sangat membutuhkan bantuan untuk mendapatkan air bersih.",
			contact: "Support +62 813-1391-5594 (Telepon & WhatsApp)",
			buttons: [
				{ text: "Lihat detail", style: "bg-white text-blue-600 hover:bg-gray-100" },
				{
					text: "Kirim donasi",
					style:
						"border-2 border-white text-white hover:bg-white hover:text-blue-600",
				},
			],
		},
		{
			id: 2,
			image: "/pengaduan2.webp",
			title: "Air berwarna hitam",
			description:
				"Air yang tersedia di wilayah ini berwarna hitam pekat, menandakan pencemaran serius. Kondisi ini sangat membahayakan kesehatan warga, terutama anak-anak dan lansia.",
			contact: "Support +62 821-1234-5678 (Telepon & WhatsApp)",
			buttons: [
				{ text: "Lihat detail", style: "bg-white text-blue-600 hover:bg-gray-100" },
				{
					text: "Kirim donasi",
					style:
						"border-2 border-white text-white hover:bg-white hover:text-blue-600",
				},
			],
		},
		{
			id: 3,
			image: "/pengaduan3.jpg",
			title: "Kekurangan air",
			description:
				"Warga mengalami kekeringan berkepanjangan sehingga sulit mendapatkan air untuk kebutuhan sehari-hari. Mereka terpaksa menempuh jarak jauh untuk mencari sumber air.",
			contact: "Support +62 812-9876-5432 (Telepon & WhatsApp)",
			buttons: [
				{ text: "Lihat detail", style: "bg-white text-blue-600 hover:bg-gray-100" },
				{
					text: "Kirim donasi",
					style:
						"border-2 border-white text-white hover:bg-white hover:text-blue-600",
				},
			],
		},
		{
			id: 4,
			image: "/pengaduan4.jpg",
			title: "Air keruh",
			description:
				"Warga hanya memiliki akses ke air berwarna keruh dan berbau. Kondisi ini menyebabkan gangguan kesehatan dan sanitasi, terutama saat musim hujan.",
			contact: "Support +62 813-5555-9999 (Telepon & WhatsApp)",
			buttons: [
				{ text: "Lihat detail", style: "bg-white text-blue-600 hover:bg-gray-100" },
				{
					text: "Kirim donasi",
					style:
						"border-2 border-white text-white hover:bg-white hover:text-blue-600",
				},
			],
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide2((prev) => (prev + 1) % slides2.length);
		}, 6000);

		return () => clearInterval(interval);
	}, [slides2.length]);

	const goToSlide2 = (index: number) => {
		setCurrentSlide2(index);
	};

	const currentSlideData2 = slides2[currentSlide2];

	return (
		<>
			<main className="w-full h-dvh space-y-10 sm:space-y-32">
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
				<section className="pt-20 sm:pt-36 px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
					<div className="relative w-full">
						<div className="relative h-[100px] sm:h-[200px] lg:h-96 overflow-hidden rounded-2xl shadow-2xl">
							{slides.map((slide, index) => (
								<div
									key={slide.id}
									className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
										index === currentSlide
											? "translate-x-0"
											: index < currentSlide
											? "-translate-x-full"
											: "translate-x-full"
									}`}>
									<img
										src={slide.image}
										alt={`Banner ${slide.id}`}
										className="w-full h-full object-cover"
									/>
								</div>
							))}
						</div>
						<div className="flex justify-center mt-6 space-x-3">
							{slides.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
										index === currentSlide
											? "bg-blue-500 hover:bg-blue-700 scale-125"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
								/>
							))}
						</div>
					</div>
				</section>
				<section className="flex flex-row flex-wrap justify-around sm:justify-evenly items-center px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px] gap-7 sm:gap-20 lg:gap-0">
					<div className="w-[120px] sm:w-[200px] flex flex-col items-center gap-5">
						<BookMarked className="w-7 sm:w-14 h-7 sm:h-14 text-blue-500" />
						<p className="text-center text-xs sm:text-base">
							Membuat filter air sederhana
						</p>
						<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
							Kepoin disini
						</button>
					</div>
					<div className="w-[120px] sm:w-[200px] flex flex-col items-center gap-5">
						<DropletOff className="w-7 sm:w-14 h-7 sm:h-14 text-blue-500" />
						<p className="text-center text-xs sm:text-base">
							Air kamu layak pakai atau tidak?
						</p>
						<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
							Kepoin disini
						</button>
					</div>
					<div className="w-[120px] sm:w-[200px] flex flex-col items-center gap-5">
						<ShieldCheck className="w-7 sm:w-14 h-7 sm:h-14 text-blue-500" />
						<p className="text-center text-xs sm:text-base">
							Cara menyimpan air bersih agar aman
						</p>
						<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
							Kepoin disini
						</button>
					</div>
					<div className="w-[120px] sm:w-[200px] flex flex-col items-center gap-5">
						<BadgeAlert className="w-7 sm:w-14 h-7 sm:h-14 text-blue-500" />
						<p className="text-center text-xs sm:text-base">
							Dampak air tercemar bagi kehidupan
						</p>
						<button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white text-xs sm:text-base font-semibold py-3 px-4 rounded-md">
							Kepoin disini
						</button>
					</div>
				</section>
				<section className="px-2 sm:px-7 xl:px-[200px] 2xl:px-[350px]">
					<div className="relative w-full max-w-7xl mx-auto">
						<div className="relative h-max overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-blue-800 to-blue-600">
							<div className="hidden lg:flex flex-row h-full">
								<div className="w-1/2 relative overflow-hidden">
									{slides2.map((slide, index) => (
										<div
											key={slide.id}
											className={`absolute inset-0 transition-all duration-500 ease-in-out ${
												index === currentSlide2
													? "opacity-100 scale-100"
													: "opacity-0 scale-105"
											}`}>
											<img
												src={slide.image}
												alt={`Banner ${slide.id}`}
												className="w-full h-full object-cover"
											/>
										</div>
									))}
								</div>
								<div className="w-1/2 p-8 text-white flex flex-col justify-center gap-7">
									<h2 className="text-2xl font-bold leading-tight">
										{currentSlideData2.title}
									</h2>
									<p className="text-blue-100 leading-relaxed">
										{currentSlideData2.description}
									</p>
									<p className="text-blue-200 text-sm">{currentSlideData2.contact}</p>
									<div className="flex space-x-4">
										{currentSlideData2.buttons.map((button, index) => (
											<button
												key={index}
												className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${button.style}`}>
												{button.text}
											</button>
										))}
									</div>
								</div>
							</div>
							<div className="flex lg:hidden flex-col h-full">
								<div className="w-full relative overflow-hidden h-64 sm:h-80">
									{slides2.map((slide, index) => (
										<div
											key={slide.id}
											className={`absolute inset-0 transition-all duration-500 ease-in-out ${
												index === currentSlide2
													? "opacity-100 scale-100"
													: "opacity-0 scale-105"
											}`}>
											<img
												src={slide.image}
												alt={`Banner ${slide.id}`}
												className="w-full h-full object-cover"
											/>
										</div>
									))}
								</div>
								<div className="w-full p-6 sm:p-8 text-white flex flex-col justify-center gap-5 sm:gap-7">
									<h2 className="text-lg sm:text-2xl font-bold leading-tight">
										{currentSlideData2.title}
									</h2>
									<p className="text-blue-100 leading-relaxed text-sm sm:text-base">
										{currentSlideData2.description}
									</p>
									<p className="text-blue-200 text-xs sm:text-sm">
										{currentSlideData2.contact}
									</p>
									<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
										{currentSlideData2.buttons.map((button, index) => (
											<button
												key={index}
												className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${button.style}`}>
												{button.text}
											</button>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center mt-6 space-x-3">
							{slides2.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide2(index)}
									className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
										index === currentSlide2
											? "bg-blue-500 scale-125"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
								/>
							))}
						</div>
					</div>
				</section>
				<footer className="w-full bg-gradient-to-br from-blue-900 to-blue-500 py-7 px-2 sm:px-10 xl:px-[200px] 2xl:px-[350px] space-y-10">
					<div className="flex justify-between items-center">
						<h1 className="text-lg sm:text-2xl text-white font-medium">Jernih</h1>
						<div className="flex gap-5 text-white">
							<p className="text-xs sm:text-base">Follow kami</p>
							<Instagram className="w-5 sm:w-7 h-5 sm:h-7" />
							<Facebook className="w-5 sm:w-7 h-5 sm:h-7" />
							<Twitter className="w-5 sm:w-7 h-5 sm:h-7" />
						</div>
					</div>
					<div className="border-t border-white pt-5">
						<p className="text-white text-center text-xs sm:text-base">
							&copy; Copyright Jernih | All Rights Reserved
						</p>
					</div>
				</footer>
			</main>
		</>
	);
}
