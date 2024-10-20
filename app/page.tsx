import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
	return (
		<main className="flex items-center justify-center min-h-screen">
			<div className="border border-amber-400 p-5 hover:text-white hover:bg-gray-950 cursor-pointe rounded">
				<Link href="/users">Users</Link>
			</div>
			<ProductCard />
		</main>
	);
}
