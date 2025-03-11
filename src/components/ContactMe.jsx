"use client";

import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { MailPlus, X, Send, Loader } from "lucide-react";
import emailjs from "emailjs-com";

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

	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSending, setIsSending] = useState(false);
	const [success, setSuccess] = useState(null);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsSending(true);

		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					name: formData.name,
					email: formData.email,
					message: formData.message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			);

			setSuccess(true);
			setFormData({ name: "", email: "", message: "" });

			// Auto-close modal after successful submission
			setTimeout(() => {
				setIsOpen(false);
				setSuccess(null);
			}, 2000);
		} catch (error) {
			setSuccess(false);
			console.error("Email sending failed:", error);
		}

		setIsSending(false);
	};

	return (
		<div className="mt-10 flex flex-col text-white">
			{/* Header */}
			<div className="flex flex-row gap-2 text-base sm:text-lg font-mono">
				<MailPlus className="text-blue-400" />
				<p>I'd love to hear from you.</p>
			</div>

			<p className="mt-2 text-blue-400 text-lg font-mono">{animatedEmail}</p>
			{/* Open Modal Button */}
			<motion.button
				className="mt-4 w-40 relative inline-flex items-center px-4 py-1 text-lg font-medium text-black transition-all duration-500 rounded-lg bg-white shadow-lg hover:shadow-blue-500/70"
				whileHover={{ x: 20 }}
				whileTap={{ scale: 0.97 }}
				transition={{ type: "tween", duration: 0.01, ease: "easeInOut" }}
				onClick={() => setIsOpen(true)}
			>
				Drop an Email
			</motion.button>

			{/* Modal */}
			{isOpen && (
				<div
					className="fixed top-0 left-0 w-full h-full flex items-center justify-center inset-0 z-50  bg-opacity-70 backdrop-blur-sm"
					onClick={() => setIsOpen(false)}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.2 }}
						className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-md shadow-2xl border border-gray-800"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-xl font-semibold text-blue-400">
								Contact Me
							</h2>
							<button
								className="text-gray-400 hover:text-white transition-colors"
								onClick={() => setIsOpen(false)}
							>
								<X size={20} />
							</button>
						</div>

						<form onSubmit={sendEmail} className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="name" className="text-sm text-gray-300">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Your Name"
									value={formData.name}
									onChange={handleChange}
									className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									required
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="email" className="text-sm text-gray-300">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="your.email@example.com"
									value={formData.email}
									onChange={handleChange}
									className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									required
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="message" className="text-sm text-gray-300">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									placeholder="What would you like to discuss?"
									value={formData.message}
									onChange={handleChange}
									className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									required
								></textarea>
							</div>

							<motion.button
								type="submit"
								className="w-full p-3 rounded-lg flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium transition-all"
								disabled={isSending}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								{isSending ? (
									<>
										<Loader size={18} className="animate-spin" />
										<span>Sending...</span>
									</>
								) : (
									<>
										<Send size={18} />
										<span>Send Message</span>
									</>
								)}
							</motion.button>
						</form>

						{/* Success/Error Message */}
						{success === true && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="mt-4 p-3 bg-green-900/60 border border-green-700 rounded-lg text-green-400 flex items-center"
							>
								<svg
									className="w-5 h-5 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								Message sent successfully!
							</motion.div>
						)}

						{success === false && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className="mt-4 p-3 bg-red-900/60 border border-red-700 rounded-lg text-red-400 flex items-center"
							>
								<svg
									className="w-5 h-5 mr-2"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
										clipRule="evenodd"
									/>
								</svg>
								Failed to send message. Please try again.
							</motion.div>
						)}
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default ContactMe;
