import { motion } from "framer-motion";
import { sectionVariants } from "../shared/AnimationWrapper";
import ExperienceCard from "../ExperienceCard";

export default function ExperienceSection({ experienceRef, experiences }) {
	return (
		<motion.section
			ref={experienceRef}
			id="experience"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="relative space-y-4"
		>
	
			<h2
				className="sm:hidden text-2xl font-bold text-white sticky top-0 z-10 
                 backdrop-blur-lg py-4 "
			>
				EXPERIENCE
			</h2>

			<div className="space-y-12">
				{experiences.map((exp, index) => (
					<motion.div
						key={exp.company}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.2 }}
					>
						<ExperienceCard {...exp} />
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
