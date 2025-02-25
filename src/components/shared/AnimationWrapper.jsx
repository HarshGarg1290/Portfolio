export const sectionVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 1, 0.5, 1], // Custom cubic bezier for smooth easing
			staggerChildren: 0.2, // Ensures a natural stagger effect
		},
	},
};

export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Makes items animate sequentially
			delayChildren: 0.1,
		},
	},
};

export const itemVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring", // Spring-based animation for better physics
			stiffness: 120,
			damping: 12,
		},
	},
};
