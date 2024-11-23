import React from "react";
import { MovingBorderComp } from "./CareerHistoryBorder";
import RazrLogo from "../../../public/projectImg/RazrLogo.svg";
import Orange from "../../../public/projectImg/OrangeLogo.png";
import Wps from "../../../public/projectImg/wpslab_logo.png";
import Code from "../../../public/projectImg/software.gif";

const CareerHistory = () => {
	return (
		<>
			<h1 className="heading text-center my-14 text-xl xl:text-[60px]">Career history</h1>

			<div className="xl:h-[50rem] w-full dark:bg-[#111a2d  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#111a2d] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<div className="flex max-sm:flex-wrap">
					<div className="max-sm:w-[100%] w-[50%] flex flex-col justify-end items-center gap-5 p-[20px]">
						<MovingBorderComp
							borderRadius="1rem"
							className=" dark:bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
						>
							<div className="rounded-[22px] max-w-sm p-4 sm:p-10 text-white bg-transparent">
								<img
									className="w-[35%]"
									src={RazrLogo}
									alt=""
								/>
								<p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
									Razrtech Pvt Ltd, Mumbai
								</p>
								<p className="text-base sm:text-sm text-white mt-4 mb-2 dark:text-neutral-200">
									Frontend Developer
								</p>

								<p className="text-sm text-neutral-600 dark:text-neutral-400"></p>
								<button className="rounded-md pl-4 pr-4 py-3 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
									<span>03/2023 to 06/2024 </span>
								</button>
							</div>
						</MovingBorderComp>
						<MovingBorderComp
							borderRadius="1.75rem"
							className=" dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
						>
							<div className="rounded-[22px] max-w-sm p-4 sm:p-10  bg-transparent">
								<img className="w-[35%]" src={Orange} alt="" />
								<p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
									Orange Digital Media, Banglore
								</p>
								<p className="text-base sm:text-sm text-white mt-4 mb-2 dark:text-neutral-200">
									Frontend Developer
								</p>

								<button className="rounded-md pl-4 pr-4 py-3 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
									<span>12/2021 to 02/2023 </span>
								</button>
							</div>
						</MovingBorderComp>

						<MovingBorderComp
							borderRadius="1.75rem"
							className=" dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
						>
							<div className="rounded-[22px] max-w-sm p-4 sm:p-10  bg-transparent">
								<img className="w-[20%]" src={Wps} alt="" />
								<p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
									WPS Lab Pvt. Ltd , HYD
								</p>
								<p className="text-base sm:text-xs text-white mt-4 mb-2 dark:text-neutral-200">
									Web Designer Internship
								</p>

								<button className="rounded-md pl-4 pr-4 py-3 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
									<span>11/2017 to 02/2019 </span>
								</button>
							</div>
						</MovingBorderComp>
					</div>
					<div className="max-sm:w-[100%] w-[50%] flex flex-col justify-center items-center">
						<img className="w-[80%] mx-auto" src={Code} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default CareerHistory;
