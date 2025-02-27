import { motion } from "framer-motion";


export default function Hero() {
	return (
		<div className="space-y-6 max-w-[400px] sm:pt-8">
			<motion.h1
				className="text-4xl md:text-6xl font-bold text-white flex items-center gap-3"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
			>
				Harsh Garg
	
			</motion.h1>
			<motion.h2
				className="text-xl md:text-2xl text-gray-200 font-mono"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				Full Stack Developer
			</motion.h2>
			<motion.p
				className="text-base md:text-lg text-gray-400"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				Versatile full-stack developer with expertise in modern web frameworks,
				data processing, and real-time analytics.
			</motion.p>
		</div>
	);
}
