import { motion } from "framer-motion";
import { sectionVariants,containerVariants,itemVariants } from "../shared/AnimationWrapper";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection({ projectsRef, projects }) {
	return (
		<motion.section
			ref={projectsRef}
			id="projects"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false, amount: 0.2 }} 
			className="space-y-12"
		>
			<h2 className="sm:hidden text-2xl font-bold text-white">
				Featured Projects
			</h2>
			<motion.div className="grid gap-8" variants={containerVariants}>
				{projects.map((project, index) => (
					<motion.div key={project.title} variants={itemVariants}>
						<ProjectCard {...project} />
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
}
