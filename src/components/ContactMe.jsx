"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MailPlus } from "lucide-react";

const ContactMe = () => {
	const email = "harshgarg220104@gmail.com";
	const [animatedEmail, setAnimatedEmail] = useState("");

	// Collection of random symbols (Greek, Norse, etc.)
	const symbols = [
		"Ω",
		"Δ",
		"Ψ",
		"π",
		"Ϟ",
		"Ϡ",
		"♆",
		"☀",
		"Ϟ",
		"⍑",
		"ᚦ",
		"ᚠ",
		"ᛉ",
		"♄",
		"Ϟ",
		"Ϡ",
		"☽",
		"⊕",
	];

	// Function to generate a scrambled version of the email
	const scrambleEmail = (visibleLength) => {
		return email
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
		const totalSteps = email.length;
		const interval = setInterval(() => {
			setAnimatedEmail(scrambleEmail(index));
			index++;
			if (index > totalSteps) clearInterval(interval);
		}, 120); // Slightly slow effect for smooth animation

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="mt-10 flex flex-col text-white">
			{/* Animated Email Text */}
			<div className="flex flex-row gap-2 text-base  sm:text-lg font-mono">
				<MailPlus  />
				<p>I'd love to hear from you.</p>
			</div>
			<p className="mt-2 text-blue-400 text-lg font-mono">{animatedEmail}</p>

			{/* Email Button */}
			<Link
				href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
				target="_blank"
			>
				<motion.button
					className="mt-4 relative inline-flex items-center px-4 py-1 text-lg font-medium text-black transition-all duration-500 rounded-lg bg-white shadow-lg hover:shadow-blue-500/70"
					whileHover={{ x: 20 }}
					whileTap={{ scale: 0.97 }}
					transition={{ type: "tween", duration: 0.01, ease: "easeInOut" }}
				>
					Drop an Email
				</motion.button>
			</Link>
		</div>
	);
};

export default ContactMe;
