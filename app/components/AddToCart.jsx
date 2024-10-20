"use client";
import React from "react";

const AddToCart = () => {
	return (
		<button
			onClick={() => console.log("Test")}
			className="border border-amber-400 p-5 hover:text-white hover:bg-gray-950 rounded"
		>
			Add to the cart
		</button>
	);
};

export default AddToCart;
