import React from "react";
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillTwitterSquare,
} from "react-icons/ai";
const Footer = () => {
	return (
		<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
			<div>
				<div class="grid grid-flow-col items-center gap-4">
					<p className="text-sm">Connect with me on </p>
					<a href="https://github.com/kartikpavan" target="_blank">
						<AiFillGithub size={32} />
					</a>
					<a
						href="https://www.linkedin.com/in/kartikpavan/"
						target="_blank"
					>
						<AiFillLinkedin size={32} />
					</a>
					<a href="https://twitter.com/kartik_im" target="_blank">
						<AiFillTwitterSquare size={32} />
					</a>
				</div>
			</div>
			<div>
				<p className="text-lg">Made with &#x1F9E1; by kartik Pavan</p>
			</div>
		</footer>
	);
};

export default Footer;
