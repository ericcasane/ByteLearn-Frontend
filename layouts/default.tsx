import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto px-30 flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<span className="text-default-600">Created with 🩶 by Eric Casañé</span>
			</footer>
		</div>
	);
}
