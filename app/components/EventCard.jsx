import React from "react";

const EventCard = () => {
	return (
		<div className="card bg-base-100 w-80 shadow-xl">
			<figure className="pt-10">
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
					className="rounded-tl-lg rounded-tr-lg"
				/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">Shoes!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
