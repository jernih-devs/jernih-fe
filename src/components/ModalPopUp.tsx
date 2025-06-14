type ModalPopUpProps = {
	open: boolean;
	close: () => void;
};

export default function ModalPopUp({ open, close }: ModalPopUpProps) {
	if (!open) return null;
	return (
		<section className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black/50 p-2 sm:p-0">
			<div className="w-full sm:w-[1000px] md:w-[700px] bg-white p-5 rounded-lg space-y-5">
				<h1 className="text-base sm:text-xl text-center font-bold text-blue-500">
					Tata cara untuk mengupload
				</h1>
				<table className="w-full text-zinc-800">
					<thead>
						<tr>
							<th className="text-xs sm:text-base border border-gray-400 p-2">
								Kolom Input
							</th>
							<th className="text-xs sm:text-base border border-gray-400 p-2">
								Data Input
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Judul
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Kondisi permasalahan air yang kamu alami sekarang
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Provinsi
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Provinsi
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Kota/Kabupaten
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Kota/Kabupaten
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Kecamatan
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Kecamatan
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Detail Lokasi
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Detail Lokasi kamu
								<br />
								<span className="text-red-500">
									<i>
										*Kota Bandung, Bojongsoang, Citeureup, JL.Sukabirus No 6 RT 2 RW 5
									</i>
								</span>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Lokasi berdasarkan Google Maps
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Lokasi berdasarkan Google Maps
								<br />
								<ul className="text-xs sm:text-base text-red-500">
									<li>
										<i>1. Buka Google Maps</i>
									</li>
									<li>
										<i>2. Klik bagikan lokasi</i>
									</li>
									<li>
										<i>3. Klik sematkan peta</i>
									</li>
									<li>
										<i>4. Salin HTML dan paste di kolom input</i>
									</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Deskripsi
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Deskripsi permasalahan air yang kamu alami sekarang
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Dokumentasi 1 - 3
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								3 foto permasalahan air yang kamu alami
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Tautan Narahubung
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Tautan untuk menghubungi kamu
								<br />
								<span className="text-red-500">
									<i>*https://wa.me/68*********</i>
								</span>
							</td>
						</tr>
						<tr>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Tautan Donasi
							</td>
							<td className="text-xs sm:text-base text-center border border-gray-400 p-2">
								Tautan untuk donasi
							</td>
						</tr>
					</tbody>
				</table>
				<button
					onClick={() => close()}
					className="cursor-pointer w-full text-white text-xs sm:text-base font-semibold bg-blue-500 hover:bg-blue-600 p-2 rounded-md">
					Tutup
				</button>
			</div>
		</section>
	);
}
