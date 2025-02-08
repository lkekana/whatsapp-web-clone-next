"use client";
import React from "react";
import "../app/home.css";
import Icon from "@/components/icon";
import introImgLight from "@/assets/images/intro-connection-light.jpg";
import introImgDark from "@/assets/images/intro-connection-dark.jpg";
import Image from "next/image";
import { useTheme } from "next-themes";

const HomeImage = () => {
	const { theme } = useTheme();
    const darkMode = theme === "dark";
	return (
        <div className="home__img-wrapper">
            <Image
                src={darkMode ? introImgDark : introImgLight}
                alt=""
                className="home__img"
            />
        </div>
	);
};

export default HomeImage;
