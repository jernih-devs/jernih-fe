const postData = {
	post1: {
		breadcrumbs: [
			{ label: "Beranda", href: "/" },
			{ label: "Sumur keruh dan berlumpur", href: "/post1" },
		],
		mainImage: {
			src: "/pengaduan1.jpg",
			alt: "Sumur keruh dan berlumpur",
		},
		content: {
			title: "Sumur keruh dan berlumpur",
			description:
				"Sumur di daerah ini menghasilkan air yang keruh dan berlumpur, tidak layak digunakan untuk mandi, mencuci, apalagi dikonsumsi. Warga sangat membutuhkan bantuan untuk mendapatkan air bersih.",
		},
		galleryImages: [
			{
				src: "https://jakartapompa.com/wp-content/uploads/2021/03/Tips-Mengatasi-Air-Sumur-Bor-Keruh-di-Musim-Hujan.jpg",
				alt: "Sumur bor keruh",
			},
			{
				src: "https://asset.kompas.com/crops/8IS7RUrt8UJU6E0fsZt6N5qkJUc=/0x0:1000x667/750x500/data/photo/2023/01/17/63c63e3e156a7.jpg",
				alt: "Air sumur tak layak konsumsi",
			},
			{
				src: "https://cdn.rri.co.id/berita/26/images/1697625112453-S/5kdik3ax9vsxvlr.jpeg",
				alt: "Warga butuh air bersih",
			},
		],
		mapEmbedUrl:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.0088461915415!2d107.62296073480881!3d-7.005116292423083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e90056f53a15%3A0x8eae34dbd5766bb5!2sAyam%20Gepuk%20SANTANG!5e0!3m2!1sid!2sid!4v1749712547168!5m2!1sid!2sid",
		actionButtons: [
			{
				label: "Narahubung",
				bgColor: "bg-blue-500",
				hover: "hover:bg-blue-600",
				textColor: "text-white",
				borderColor: "border-blue-500",
			},
			{
				label: "Donasi",
				bgColor: "bg-white",
				hover: "hover:bg-blue-500",
				textColor: "text-blue-500 hover:text-white",
				borderColor: "border-blue-500",
			},
		],
	},
};

export default postData;
