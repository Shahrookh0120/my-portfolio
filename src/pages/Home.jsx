import React from "react";
import { motion, useSpring, useScroll } from "motion/react"
import Layout from "../components/Layout";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import CareerHistory from "../components/CareerHistory/CareerHistory";
import Footer from "../components/Footer";

const Home = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
	return (
		<>
        <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    zIndex:99999999999,
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#3b82f6",
                }}
            />
			<Layout>
				<div className="xl:w-full lg:w-full  mx-auto">
					<HeroSection />
				</div>
				<div className="xl:w-[1280px] lg:w-full  mx-auto">
					<AboutSection />
				</div>
				<CareerHistory />
				<div className="xl:w-[1280px] lg:w-full mx-auto">
					<Skills />
				</div>
				<h1 className="heading text-center mb-5 mt-20 text-xl xl:text-[60px]">Project</h1>
				<Projects className="" />
				<div className="xl:w-[1280px] lg:w-full mx-auto">
					<Footer />
				</div>
			</Layout>
		</>
	);
};

export default Home;
