import React from "react";

const CareerHistory = () => {
	return (
		<div>
			<h1 className="text-left text-xl font-semibold text-white uppercase">
				Experince
			</h1>
			<ul className="text-white text-left text-[.875rem] mt-5">
				<li className="flex gap-2 items-center my-4 ">
					{" "}
					<MdKeyboardDoubleArrowRight /> Mar 2023 - Present - Razrtech
					Pvt. Ltd (Mumbai)
				</li>
				<li className="flex gap-2 items-center my-4 ">
					{" "}
					<MdKeyboardDoubleArrowRight /> Dec 2021 - Feb 2023 - Orange
					Digital Media (Bangalore)
				</li>
				<li className="flex gap-2 items-center my-4 ">
					{" "}
					<MdKeyboardDoubleArrowRight /> June 2019 - Dec 2019 - Covers
					Lab Media (Noida)
				</li>
			</ul>
		</div>
	);
};

export default CareerHistory;
