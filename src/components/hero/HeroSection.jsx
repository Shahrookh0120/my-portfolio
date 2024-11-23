import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./HeroHighlight";
import { Link } from "react-router-dom";
import shahrookh_resume from '../../../public/resume/shahrookh_resume.pdf'
import { TypewriterEffectSmooth } from "./TextAnimation";

const HeroSection = () => {
    const onButtonClick = () => {
        const pdfUrl = shahrookh_resume;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const words = [
        {
          text: "Hey I'm ",
        },
        
        {
          text: "Shahrookh Khan",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
	return (
		<>
			<HeroHighlight>
				<motion.h1
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: [20, -5, 0],
					}}
					transition={{
						duration: 0.5,
						ease: [0.4, 0.0, 0.2, 1],
					}}
					className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-[] leading-relaxed lg:leading-snug text-center mx-auto "
				>
                   
					<div className="xl:h-[30.25rem] sm:h-full lg:h-full sm:w-full flex flex-col items-center justify-center xl:p-[3.125rem] p-0">
                        <TypewriterEffectSmooth words={words} />
						<p className=" mt-3 text-white text-center xl:w-[700px] lg:w-full sm:w-full text-[12px] ">
							As a passionate <strong>Frontend developer</strong>,
							I thrive on crafting engaging user experiences
							through clean, efficient code and intuitive design.
						</p>
						<button onClick={onButtonClick} className="btn mt-10 ">
							<span className="btn-text-one">
								Download Resume
							</span>
							<span className="btn-text-two">Download</span>
						</button>
					</div>
					{/* <Highlight className="text-black dark:text-white">
						A Frontend Developer
					</Highlight> */}
				</motion.h1>
			</HeroHighlight>
		</>
	);
};

export default HeroSection;
