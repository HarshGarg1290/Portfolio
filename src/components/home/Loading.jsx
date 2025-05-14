"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Bungee_Hairline } from "next/font/google";

const bungeeHairline = Bungee_Hairline({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});


const LoadingPhrase = "ACTIVATING BANKAI...";

// Matrix-style symbols, subtle
const MatrixEffect = () => {
	const symbols = ["Ω", "Δ", "Ψ", "π", "Ϟ", "♆", "☀", "⍑", "λ", "∞"];

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{Array.from({ length: 25 }).map((_, i) => (
				<motion.span
					key={i}
					className="absolute text-blue-500 opacity-40"
					initial={{ opacity: 0, y: -10 }}
					animate={{
						opacity: [0, 0.6, 0],
						y: ["0vh", "100vh"],
					}}
					transition={{
						duration: 3,
						ease: "linear",
						delay: i * 0.2, // Staggered effect
					}}
					style={{
						left: `${Math.random() * 100}%`,
						fontSize: `${Math.random() * 10 + 12}px`,
					}}
				>
					{symbols[Math.floor(Math.random() * symbols.length)]}
				</motion.span>
			))}
		</div>
	);
};


const ProgressBar = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => Math.min(prev + 2.5, 100)); 
		}, 50);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-64 h-1 bg-gray-800 rounded-full mt-4 overflow-hidden">
			<motion.div
				className="h-full bg-blue-500"
				style={{ width: `${progress}%` }}
				animate={{ boxShadow: "0 0 6px #60a5fa" }}
				transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
			/>
		</div>
	);
};

export default function LoadingScreen() {
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		let index = 0;
		const interval = setInterval(() => {
			if (index <= LoadingPhrase.length) {
				setDisplayText(LoadingPhrase.substring(0, index));
				index++;
			} else {
				clearInterval(interval);
			}
		}, 80);

		return () => clearInterval(interval);
	}, []);

	return (
		<motion.div
			className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white font-mono"
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<MatrixEffect />

	
			<motion.h1
                className={`${bungeeHairline.className} text-2xl md:text-3xl font-ptsans text-blue-400 font-extrabold tracking-wide text-center mb-5`}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				{displayText}
				<motion.span
					className="inline-block ml-1"
					animate={{ opacity: [1, 0, 1] }}
					transition={{ duration: 0.4, repeat: Infinity }}
				>
					|
				</motion.span>
			</motion.h1>

			<ProgressBar />
		</motion.div>
	);
}
