import React, { useRef, useState } from "react";
import { gsap } from "gsap";

import "./style.scss";

import Menu from "../Menu";

export default function Navbar() {
	const boxRef = useRef();

	// State of our Menu
	const [state, setState] = useState({
		clicked: false,
	});
	// Toggle menu
	const handleMenu = () => {
		if (state.initial === false) {
			setState({
				initial: null,
				clicked: true,
			});
		} else if (state.clicked === true) {
			gsap.to(boxRef.current, {
				opacity: 0,
				onComplete: () =>
					setState({
						clicked: !state.clicked,
					}),
			});
		} else if (state.clicked === false) {
			setState({
				clicked: !state.clicked,
			});
		}
	};

	return (
		<div className="navbar-container" data-scroll-section>
			<div className="navbar">
				<span onClick={handleMenu}>
					Menu
					{state.clicked && <Menu state={state} ref={boxRef} />}
				</span>
			</div>
		</div>
	);
}
