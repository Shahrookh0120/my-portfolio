import React from "react";
import { InfiniteMovingCards } from "../Skills/InfiniteMovingCards.jsx";
import { FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";
import { h1 } from "framer-motion/client";

export default function InfiniteMovingCardsDemo() {
	return (
		<>
			<div className="my-[50px]">
				<h1 className="heading text-center py-10 text-xl xl:text-[60px]">Skills</h1>
				<div className="h-[10rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent  items-center justify-center relative overflow-hidden">
					<InfiniteMovingCards
						items={testimonials}
						direction="left"
						speed="slow"
					/>
				</div>
			</div>
		</>
	);
}

const testimonials = [
	{
		title: "React Js",
		name: <FaReact className="text-[#61DBFB]" />,
	},
	{
		title: "HTML 5",
		name: <FaHtml5 className="text-[#e34c26]" />,
	},
	{
		title: "CSS 3",
		name: <IoLogoCss3 className="text-[#264de4]" />,
	},
	{
		title: "JavaScript",
		name: <IoLogoJavascript className="text-[#f0db4f]" />,
	},
	{
		title: "Jquery",
		name: <DiJqueryLogo className="text-[#0769AD]" />,
	},
	{
		title: "SCSS",
		name: <FaSass className="text-[#cc6699]" />,
	},
];
