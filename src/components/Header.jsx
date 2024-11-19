import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import useScroll from "../hooks/useOnScroll.js";

const Header = () => {
	const [isOpen, setOpen] = useState(false);
	const { scrollFlag } = useScroll();
	return (
		<>
			<section className={`${scrollFlag ? 'fixed z-50' : ''} w-[100%] p-4 bg-[#111A2D]`}>
				<div
					className={`${
						scrollFlag ? "w-[960px] " : ""
					}  transition-all duration-500 ease-in-out w-[150px] max-w-[1248px] mx-auto border border-cyan-400 h-[60px] rounded-2xl p-2 flex items-center justify-center `}
				>
					<div
						className={`${
							scrollFlag ? "hidden" : ""
						} secondColor text-white flex items-center justify-center`}
					>
						<Hamburger
							size={20}
							toggled={isOpen}
							toggle={setOpen}
						/>{" "}
						<p className="text-[14px] font-semibold tracking-[.1rem] uppercase">
							Menu
						</p>
					</div>
					<nav
						className={`${
							scrollFlag
								? "block transition-opacity delay-700"
								: "hidden"
						} w-[100%]`}
					>
						<ul
							className={`${
								scrollFlag
									? "opacity-1 transition-opacity delay-700 duration-300 ease-in-out"
									: "opacity-0"
							} flex justify-between w-[50%] mx-auto `}
						>
							<Link>
								<li
									className={`${
										scrollFlag
											? "opacity-1 transition-opacity delay-700 duration-300 ease-in-out"
											: "opacity-0"
									} text-white uppercase text-[14px] font-semibold tracking-[.1rem]`}
								>
									Home
								</li>
							</Link>
							<Link>
								<li
									className={`${
										scrollFlag
											? "opacity-1 transition-opacity delay-700 duration-300 ease-in-out"
											: "opacity-0"
									} text-white uppercase text-[14px] font-semibold tracking-[.1rem]`}
								>
									Projects
								</li>
							</Link>
							<Link>
								<li
									className={`${
										scrollFlag
											? "opacity-1 transition-opacity delay-700 duration-300 ease-in-out"
											: "opacity-0"
									} text-white uppercase text-[14px] font-semibold tracking-[.1rem]`}
								>
									About
								</li>
							</Link>
							<Link>
								<li
									className={`${
										scrollFlag
											? "opacity-1 transition-opacity delay-700 duration-300 ease-in-out"
											: "opacity-0"
									} text-white uppercase text-[14px] font-semibold tracking-[.1rem]`}
								>
									Contact
								</li>
							</Link>
						</ul>
					</nav>
				</div>
			</section>
		</>
	);
};

export default Header;
