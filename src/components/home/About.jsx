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
			className="hidden sm:block space-y-8 text-md text-justify"
		>
			{" "}
			<motion.p
				className="leading-relaxed text-gray-400 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				{" "}
				Hey! I'm{" "}
				<span className="text-blue-400 font-semibold">
					Computer Science undergrad
				</span>{" "}
				who loves building cool stuff with code.
				<br /> From{" "}
				<span className="text-blue-400 font-semibold">
					full-stack web apps
				</span>{" "}
				to <span className="text-blue-400 font-semibold">AI-powered tools</span>
				, I enjoy mixing creativity with tech.{" "}
			</motion.p>{" "}
			<motion.p
				className="leading-relaxed text-gray-400 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				viewport={{ once: true }}
			>
				{" "}
				I've worked with{" "}
				<span className="text-blue-400 font-semibold">
					{" "}
					MERN, NextJS, and Flask{" "}
				</span>{" "}
				, and even got invited to showcase my projects at{" "}
				<span className="text-blue-400 font-semibold">Buildspace SF Expo</span>.
				I'm a{" "}
				<span className="text-blue-400 font-semibold">hackathon finalist</span>{" "}
				at SIH'23, Temethon'25, CodeFest'24, and more.{" "}
			</motion.p>{" "}
			<motion.div
				className="leading-relaxed text-gray-400 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
				viewport={{ once: true }}
			>
				{" "}
				<p className="mb-2">My technical toolkit includes:</p>{" "}
				<ul className="list-disc list-inside pl-2 space-y-1">
					{" "}
					<li>
						Computer Languages:{" "}
						<span className="text-blue-400 font-semibold">
							C/C++, Python, Java
						</span>
					</li>{" "}
					<li>
						{" "}
						Web:{" "}
						<span className="text-blue-400 font-semibold">
							ReactJS, MongoDB, NodeJS, ExpressJS, NextJS, Flask, Tailwind,
							Typescript
						</span>
					</li>
					<li>
						Cloud & DevOps:{" "}
						<span className="text-blue-400 font-semibold">
							AWS, Git/GitHub, GCP
						</span>
					</li>
					<li>
						Other Tools:{" "}
						<span className="text-blue-400 font-semibold">
							Docker, Firebase, PostgreSQL, YOLO
						</span>
					</li>
					<li>
						Human Languages:{" "}
						<span className="text-blue-400 font-semibold">
							Hindi , English , French(Intermediate)
						</span>
					</li>
				</ul>
			</motion.div>
			<motion.p
				className="leading-relaxed text-gray-400 max-w-3xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
				viewport={{ once: true }}
			>
				Outside of coding, I'm passionate about{" "}
				<span className="text-blue-400 font-semibold">
					innovative solutions and digital transformation
				</span>
				, turning ideas into impactful, real-world applications.
			</motion.p>
		</motion.section>
	);
}
