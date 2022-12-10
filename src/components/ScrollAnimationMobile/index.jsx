import React from "react";
import "./style.scss";

const ScrollAnimationMobile = React.forwardRef(
	(props, scrollAnimationMobile) => (
		<div ref={scrollAnimationMobile} className="scroll-animation-mobile">
			<div className="scroll-down-mobile">
				<div className="scroll-down-bar-mobile"></div>
			</div>
		</div>
	)
);

export default ScrollAnimationMobile;
