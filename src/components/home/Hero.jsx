"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
	const fullName = "Harsh Garg";
	const [animatedName, setAnimatedName] = useState("");

	// Symbols for encoding effect (Greek, Norse, Unicode)
	const symbols = [
		"H",
		"a",
		"r",
		"s",
		"h",
		"G",
		"a",
		"r",
		"g",
		"h",
		"g",
		"r",
		"a",
		"s",
		"H",
		"G",
	];

	// Function to gradually reveal the real name
	const scrambleName = (visibleLength) => {
		return fullName
			.split("")
			.map((char, idx) =>
				idx < visibleLength
					? char
					: symbols[Math.floor(Math.random() * symbols.length)]
			)
			.join("");
	};

	useEffect(() => {
		let index = 0;
		const totalSteps = fullName.length;
		const interval = setInterval(() => {
			setAnimatedName(scrambleName(index));
			index++;
			if (index > totalSteps) clearInterval(interval);
		}, 200); // Controls the animation speed

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="space-y-6 max-w-[500px] sm:pt-2">
			<div>
				<motion.h5
					className="mb-3 text-sm md:text-base text-blue-400 flex items-center gap-3"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Hi, my name is
				</motion.h5>

				{/* Animated Name */}
				<motion.h1
					className="text-4xl md:text-6xl font-bold text-white flex items-center gap-3 font-mono"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					{animatedName}
				</motion.h1>
			</div>

			<motion.h2
				className="text-xl md:text-2xl text-gray-200 font-mono"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				Full Stack Developer
			</motion.h2>
			<motion.p
				className="text-base hidden sm:block md:text-lg text-gray-400"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				Versatile full-stack developer with expertise in modern web frameworks,
				data processing, and real-time analytics.
			</motion.p>
			<motion.p
				className="text-base sm:hidden md:text-lg text-gray-300"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				I'm a full-stack developer who blends logic with creativity to build
				seamless, scalable, and innovative digital experiences. I thrive on
				pushing boundaries in web development, AI, and IoT, solving complex
				problems with smart solutions. When I’m not coding, I’m gaming, watching
				anime, or lost in a good book—because even developers need a great
				story.
				<br /> Let’s build something awesome—functional, impactful, and fun!
			</motion.p>
		</div>
	);
}
