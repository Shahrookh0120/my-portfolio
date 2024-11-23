import React from "react";
import { PinContainer } from "./ProjectsCard";
import AvenueCinems from "../../../public/projectImg/avenue.png";
import beautyjob from "../../../public/projectImg/beautyjob.png";
import borewell from "../../../public/projectImg/borewell.png";
import festival from "../../../public/projectImg/festival.png";
import imr from "../../../public/projectImg/imr.png";
import socially from "../../../public/projectImg/socially.png";
import spendTracker from "../../../public/projectImg/spendTracker.png";
import zennm from "../../../public/projectImg/zennm.png";
import tomorrowStreet from "../../../public/projectImg/tomorrowStreet.png";
import { Link } from "react-router-dom";

const Project = () => {
	const projectsArray = [
		{
			name: "Socially",
			imgSrc: socially,
			desc: "",
			hrefLink: "https://mycommunity.socially.so/login",
		},
		{
			name: "Avenue Cinemas",
			imgSrc: AvenueCinems,
			desc: "",
			hrefLink: "https://www.avenuecinemas.com/",
		},
		{
			name: "Beauty Job Agent",
			imgSrc: beautyjob,
			desc: "",
			hrefLink: "https://www.beautyjobagent.de/",
		},
		{
			name: "Sanati Borewell",
			imgSrc: borewell,
			desc: "",
			hrefLink: "https://www.sanatiborewells.com/",
		},

		{
			name: "Festival Events",
			imgSrc: festival,
			desc: "",
			hrefLink: "https://festivalevents.lu/",
		},
		{
			name: "IMR",
			imgSrc: imr,
			desc: "",
			hrefLink: "https://internationalmr.com/",
		},
		{
			name: "Tomorrow Street",
			imgSrc: tomorrowStreet,
			desc: "",
			hrefLink: "https://www.tomorrowstreet.co/",
		},
		{
			name: "Zenn Social",
			imgSrc: zennm,
			desc: "",
			hrefLink: "https://zennsocial.com/",
		},
		{
			name: "Spend Tracker",
			imgSrc: spendTracker,
			desc: "",
			hrefLink: "https://spendtracker.sanatibuilders.com/",
		},
	];

	return (
		<>
			<div className="mt-[150px] xl:mt-0 w-full dark:bg-[#111a2d] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#111a2d]  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

				<div className="xl:h-[60rem] xl:w-[1280px] grid xl:grid-cols-4 grid-cols-1 xl:gap-4 gap-80 ">
					{projectsArray.map((project, index) => {
						return (
							<div key={index} className="xl:mt-[150px] ">
								<PinContainer
									title="Visit Website"
									to={project.hrefLink}
								>
									<div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
										<h3 className="max-w-xs text-center !pb-2 !m-0 font-bold  text-base text-slate-100 uppercase">
											{project.name}
										</h3>
										<div className="text-base !m-0 !p-0 font-normal">
											<span className="text-slate-500 "></span>
										</div>
										<div className=" w-full rounded-lg mt-4 p-3 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
											<img src={project.imgSrc} alt="" />
										</div>
									</div>
								</PinContainer>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Project;
