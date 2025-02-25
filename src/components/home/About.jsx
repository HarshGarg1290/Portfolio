import { motion } from "framer-motion";
import { sectionVariants } from "../shared/AnimationWrapper";

export default function AboutSection({ aboutRef }) {
	return (
		<motion.section
			ref={aboutRef}
			id="about"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="space-y-10 px-6  "
		>
			<motion.p
				className="text-lg leading-relaxed text-gray-300 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				I'm a{" "}
				<span className="text-blue-400 font-semibold">
					full-stack developer
				</span>{" "}
				passionate about building scalable web applications that combine
				technical excellence with intuitive user experiences. My expertise spans
				the MERN stack, NextJS, and Python-based technologies, ensuring
				solutions that are both robust and user-friendly.
			</motion.p>

			<motion.p
				className="text-lg leading-relaxed text-gray-400 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
			>
				Currently, I'm specializing in{" "}
				<span className="text-blue-400 font-semibold">
					IoT solutions and AI integration
				</span>
				, with notable projects like EcoBin's smart waste management system and
				Mr. Montage, an AI-powered Valorant montage creator. My experience
				includes real-time monitoring systems and digital twins, showcased in my
				work for the SIH hackathon.
			</motion.p>

			<motion.p
				className="text-lg leading-relaxed text-gray-400 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
			>
				My technical toolkit includes C/C++, Python, and Java for programming,
				<span className="text-blue-400 font-semibold">
					{" "}
					MERN stack and NextJS
				</span>{" "}
				for web development, and AWS for cloud solutions. I've successfully
				applied these skills as a Full-Stack Intern at Blooming where I built
				and deployed a complete e-commerce platform with an admin panel.
			</motion.p>

			<motion.p
				className="text-lg leading-relaxed text-gray-400 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
			>
				When I'm not coding, you'll find me participating in{" "}
				<span className="text-blue-400 font-semibold">hackathons</span>,
				exploring emerging technologies, or working on innovative solutions like
				my personalized tourism itinerary planner.
			</motion.p>
		</motion.section>
	);
}
