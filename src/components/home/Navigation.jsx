import { motion } from "framer-motion";
import Link from "next/link";

const navVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.15, // Smooth stagger effect
			ease: [0.25, 1, 0.5, 1], // Cubic bezier easing
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
	return (
		<nav className="relative">
			<motion.ul
				className="space-y-2"
				variants={navVariants}
				initial="hidden"
				animate="visible"
			>
				{navItems.map((item) => (
					<motion.li
						key={item.label}
						variants={itemVariants}
						whileHover="hover"
					>
						<Link
							href={item.href}
							onClick={(e) => handleNavClick(e, item.href.slice(1))}
							className={`block text-sm relative transition-all ${
								activeSection === item.label.toLowerCase()
									? "text-white font-semibold"
									: "text-gray-500 hover:text-white"
							}`}
						>
							{item.label}
							{activeSection === item.label.toLowerCase() && (
								<motion.span
									className="absolute -left-4 top-[7px] -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"
									layoutId="activeSection"
									transition={{ type: "spring", stiffness: 380, damping: 30 }}
								/>
							)}
						</Link>
					</motion.li>
				))}
			</motion.ul>
		</nav>
	);
}
