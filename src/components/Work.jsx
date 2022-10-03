import React from "react";
import ExpertExpiditions from "../assets/expertExpiditions.png";
import githubFinder from "../assets/githubFinder.png";
import reactGym from "../assets/reactGym.png";
import playwind from "../assets/playwind.png";
import mytube from "../assets/mytube.png";
import cryptoBin from "../assets/cryptoBin.png";

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] my-20">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-2">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Work
					</p>
					<p className="py-4">// Check out some of my recent work</p>
				</div>

				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${ExpertExpiditions})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-1000">
							<span className="text-2xl font-bold text-white tracking-wider">
								Expert Expeditions
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://whispering-hamlet-31036.herokuapp.com/"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/kartikpavan/Expert_Expidition"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${githubFinder})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-1000">
							<span className="text-2xl font-bold text-white tracking-wider">
								Github User Finder
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://react-github-finder-mu.vercel.app/"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/kartikpavan/REACT_GithubFinder"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${reactGym})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-1000">
							<span className="text-2xl font-bold text-white tracking-wider">
								React Gym
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://react-gym-seven.vercel.app/"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/kartikpavan/React_Gym"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${playwind})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-1000">
							<span className="text-2xl font-bold text-white tracking-wider">
								Playwind
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://playwind.vercel.app/"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/kartikpavan/Playwind.git"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${cryptoBin})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-1000">
							<span className="text-2xl font-bold text-white tracking-wider">
								Crypto Bin
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://crypto-bin.vercel.app/"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="  https://github.com/kartikpavan/CryptoBin"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${mytube})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 duration-1000">
							<span className="text-2xl font-bold text-white tracking-wider">
								Mytube
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://react-mytube.vercel.app/"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a
									href="https://github.com/kartikpavan/React-MYTUBE"
									rel="noreferrer"
									target="_blank"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
