import React, { useEffect, useState } from "react";

const useOnScroll = () => {
	const [scrollFlag, setScrollFlag] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrollFlag(true);
			} else {
				setScrollFlag(false);
			}
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup function to remove the event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

    const handleShowMenu = () =>{
        setScrollFlag(!scrollFlag);
    }
    return {scrollFlag,handleShowMenu}
};

export default useOnScroll;
