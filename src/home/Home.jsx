import React, { useState, useEffect, useRef } from "react";
import useLocoScroll from "../hooks/useLocoScroll";
import cn from "classnames";
import {
	BrowserView,
	MobileView,
	isIOS,
	isDesktop,
	isSafari,
} from "react-device-detect";

import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Intro from "../components/Intro";
import Gallery from "../components/Gallery";
import GalleryMobile from "../components/GalleryMobile";
import About from "../components/About";
import Footer from "../components/Footer";
import LangSwitcher from "../components/LanguageSwitcher";
import Testimonials from "../components/Testimonials";

import "../styles/home.scss";

const Home = () => {
	const ref = useRef(null);
	const [preloader, setPreload] = useState(true);

	useLocoScroll(!preloader);

	useEffect(() => {
		if (!preloader && ref) {
			if (typeof window === "undefined" || !window.document) {
				return;
			}
		}
	}, [preloader]);

	const [timer, setTimer] = useState(3);

	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreload(false);
	};

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((time) => time - 1);
		}, 1000);
		return () => clear();
	}, []);

	useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	if (typeof window === "undefined" || !window.document) {
		return null;
	}

	return (
		<>
			{preloader ? (
				<Loader />
			) : (
				<div
					className={cn("main-container", { "ios-overflow": isIOS })}
					id="main-container"
					data-scroll-container
					ref={ref}
				>
					<Hero />
					<Intro />
					<MobileView>
						<GalleryMobile />
					</MobileView>
					<BrowserView>
						{isSafari && <GalleryMobile />}
						{!isSafari && <Gallery />}
					</BrowserView>
					<About />
					<Testimonials />
					<Contact />
					<Footer />
					{isDesktop && <LangSwitcher />}
				</div>
			)}
		</>
	);
};

export default Home;
