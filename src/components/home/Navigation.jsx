import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.15,
			ease: [0.25, 1, 0.5, 1],
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -10 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: "spring", stiffness: 100, damping: 12 },
	},
	hover: { scale: 1.05, x: 2, transition: { type: "spring", stiffness: 200 } },
};

export default function Navigation({
	activeSection,
	handleNavClick,
	navItems,
}) {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
	
		const timeout = setTimeout(() => setIsExpanded(true), 300);
		console.log(activeSection);
		console.log(
			"navItems:",
			navItems.map((item) => ({
				label: item.label,
				lowercase: item.label.toLowerCase(),
			}))
		);
		return () => {
			clearTimeout(timeout);
			setIsExpanded(false); 
		};
	}, [activeSection]);

	return (
		<nav className="hidden sm:block relative">
			<motion.ul
				className="space-y-1"
				variants={navVariants}
				initial="hidden"
				animate="visible"
			>
				{navItems.map((item) => (
					<motion.li
						key={item.label}
						variants={itemVariants}
						whileHover="hover"
						className="flex flex-row items-center gap-4"
					>
						{activeSection === item.label.toLowerCase() && (
						
							
							<motion.span
								className="bg-blue-400"
								layoutId="activeSection"
								transition={{
									type: "spring",
									stiffness: 380,
									damping: 30,
								}}
								animate={{
									width: isExpanded ? "72px" : "8px",
									height: isExpanded ? "2px" : "8px",
									borderRadius: isExpanded ? "0px" : "999px",
								}}
							/>
						)}
						<Link
							href={item.href}
							onClick={(e) => {
								handleNavClick(e, item.href.slice(1));
								setIsExpanded(false);
							}}
							className={`block text-sm relative transition-all ${
								activeSection === item.label.toLowerCase()
									? "text-white font-semibold"
									: "text-gray-500 hover:text-white"
							}`}
						>
							{item.label}
						</Link>
					</motion.li>
				))}
			</motion.ul>
		</nav>
	);
}
