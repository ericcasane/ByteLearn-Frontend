import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto px-5 flex-grow md:w-4/5">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<span className="text-default-600">Created with 🩶 by Eric Casañé</span>
			</footer>
		</div>
	);
}
