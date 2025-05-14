"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
	const fullName = "Harsh Garg";
	const [animatedName, setAnimatedName] = useState("");
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [phraseIndex, setPhraseIndex] = useState(0);

	const phrases = ["Full Stack Developer", "Jaipur, India"];
	const typingSpeed = 50;
	const deletingSpeed = 50;
	const pauseDelay = 2000;

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
		}, 100);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const currentPhrase = phrases[phraseIndex];
		let timer;

	
		if (!isDeleting && displayText === currentPhrase) {
			timer = setTimeout(() => {
				setIsDeleting(true);
			}, pauseDelay);
		}

		else {
			timer = setTimeout(
				() => {
					if (!isDeleting) {
						setDisplayText(currentPhrase.substring(0, displayText.length + 1));
					} else {
						setDisplayText(currentPhrase.substring(0, displayText.length - 1));

						if (displayText.length === 0) {
							setIsDeleting(false);
							setPhraseIndex((phraseIndex + 1) % phrases.length);
						}
					}
				},
				isDeleting ? deletingSpeed : typingSpeed
			);
		}

		return () => clearTimeout(timer);
	}, [displayText, isDeleting, phraseIndex]);

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
				className="text-xl md:text-2xl text-gray-200 font-mono flex items-center"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				<span>{displayText}</span>
				<span className="animate-blink ml-0.5"></span>
			</motion.h2>

			<motion.p
				className="text-base sm:hidden md:text-lg text-gray-300"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				I'm a full-stack developer who blends logic with creativity to build
				seamless, scalable, and innovative digital experiences. I thrive on
				pushing boundaries in web development, AI, and IoT, solving complex
				problems with smart solutions. When I'm not coding, I'm gaming, watching
				anime, or lost in a good book—because even developers need a great
				story.
				<br /> Let's build something awesome—functional, impactful, and fun!
			</motion.p>
		</div>
	);
}
