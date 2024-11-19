import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const InfiniteMovingCards = ({
    items = [],
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}) => {
	const containerRef = useRef(null);
	const scrollerRef = useRef(null);
	const [start, setStart] = useState(false);

	useEffect(() => {
		addAnimation();
	}, []);

	const addAnimation = () => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				scrollerRef.current.appendChild(duplicatedItem);
			});

			setAnimationProperties();
			setStart(true);
		}
	};

	const setAnimationProperties = () => {
		if (containerRef.current) {
			containerRef.current.style.setProperty(
				"--animation-direction",
				direction === "left" ? "forwards" : "reverse"
			);

			const duration =
				speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
			containerRef.current.style.setProperty(
				"--animation-duration",
				duration
			);
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item) => (
					<li
						key={item.name}
						className="text-center w-[200px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[200px]"
						style={{
							background:
								"linear-gradient(180deg, var(--slate-800), var(--slate-900))",
						}}
					>
						<blockquote>
							<div
								aria-hidden="true"
								className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							></div>
							
							<div className="relative z-20 flex flex-row items-center justify-center">
								<span className="flex flex-col gap-1 justify-center items-center">
									<span className="text-6xl leading-[1.6] text-gray-400 font-normal">
										{item.name}
									</span>
									<span className="text-md leading-[1.6] text-white font-normal">
										{item.title}
									</span>
								</span>
							</div>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
