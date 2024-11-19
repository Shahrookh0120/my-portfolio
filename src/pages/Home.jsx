import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/hero/HeroSection";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import CareerHistory from "../components/CareerHistory/CareerHistory";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
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
