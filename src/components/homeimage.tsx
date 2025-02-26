"use client";
import "../app/home.css";
import introImgDark from "@/assets/images/intro-connection-dark.jpg";
import introImgLight from "@/assets/images/intro-connection-light.jpg";
import { useTheme } from "next-themes";
import Image from "next/image";

const HomeImage = () => {
	const { theme } = useTheme();
	const darkMode = theme === "dark";
	return (
		<div className="home__img-wrapper">
			<Image
				src={darkMode ? introImgDark : introImgLight}
				alt=""
				className="home__img"
				priority
			/>
		</div>
	);
};

export default HomeImage;
