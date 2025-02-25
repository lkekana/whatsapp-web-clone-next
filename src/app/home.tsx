import React from "react";
import "./home.css";
import Icon from "@/components/icon";
import HomeImage from "@/components/homeimage";

const Home = () => {
	return (
		<div className="home">
			<HomeImage />
			<h1 className="home__title"> Keep your phone connected </h1>
			<p className="home__text">
				WhatsApp connects to your phone to sync messages. To reduce data usage,
				connect your phone to Wi-Fi.
			</p>
			<p className="home__text">
				<Icon id="laptop" className="home__icon" />
				<span>
					WhatsApp is available for Mac.{" "}
					<a
						href="https://www.whatsapp.com/download"
						target="_blank"
						rel="noreferrer"
						className="home__link"
					>
						{" "}
						Get it here
					</a>
					.
				</span>
			</p>
		</div>
	);
};

export default Home;
