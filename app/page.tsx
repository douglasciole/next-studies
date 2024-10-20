import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import EventCard from "./components/EventCard";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
				<div className="card bg-base-100 w-80 shadow-xl">
					<EventCard />
				</div>
				<div className="card bg-base-100 w-80 shadow-xl">
					<EventCard />
				</div>
				<div className="card bg-base-100 w-80 shadow-xl">
					<EventCard />
				</div>
				<div className="card bg-base-100 w-80 shadow-xl">
					<EventCard />
				</div>
				<div className="card bg-base-100 w-80 shadow-xl">
					<EventCard />
				</div>
				<div className="card bg-base-100 w-80 shadow-xl">
					<EventCard />
				</div>
			</div>
			<Footer />
		</main>
	);
}
