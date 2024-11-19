import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { DirectionAwareHover } from "./ImgCard";
import imageUrl from "../../public/projectImg/IMG_4972.jpg";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutSection = () => {
	return (
		<>
			<div className="flex max-sm:flex-wrap gap-10 my-[50px] mb-[80px] xl:p-0 p-4">
				<div className="xl:w-[50%]">
					<h1 className="heading xl:text-left text-center text-xl xl:text-[60px]">ABOUT ME</h1>
					<p className="text-white text-justify list-disc text-[1rem] flex flex-col gap-4 mt-5">
						Starting as a Web Designer Intern, I’ve built a solid
						foundation in React Js, HTML5, CSS3, and JavaScript,
						eventually moving into full-time roles where you
						expanded your skill set to include, Tailwind JQuery,
						Bootstrap, and SASS. Along the way, you've handled
						increasingly complex projects, from responsive user
						interfaces to mobile app experiences, consistently
						delivering enhanced user engagement and streamlined
						performance. Now, I'm skilled freelance developer with a
						strong command of modern frontend technologies.
					</p>
					<div className="mt-4 flex  gap-4">
						<Link to="https://www.linkedin.com/in/shahrookh-khan-81a83b153/" target="_blank">
							<span className="text-white text-2xl">
                            <FaLinkedin />
							</span>
						</Link>
						<Link to="https://www.instagram.com/white_sand___/"  target="_blank"><span className="text-white text-2xl "><FaInstagram /></span></Link>
					</div>
				</div>
				<div className="xl:w-[50%]">
					<div className="w-[100%] relative flex justify-center">
						<DirectionAwareHover
							imageUrl={imageUrl}
						></DirectionAwareHover>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSection;
