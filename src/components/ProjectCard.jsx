import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, tech, link, image }) {
	return (
		<div className="group relative bg-navy-800 rounded-lg overflow-hidden hover:transform hover:scale-[1.01] transition-all duration-300">
			<div className="p-6 space-y-4">
				<div className="flex justify-between items-start">
					<h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
						{title}
					</h3>
					<Link
						href={link}
						className="text-gray-400 hover:text-white"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Visit ${title} project`}
					>
						<ExternalLink className="w-5 h-5" />
					</Link>
				</div>
				<p className="text-gray-400">{description}</p>
				<div className="flex flex-wrap gap-2 pt-4">
					{tech.map((tech) => (
						<span
							key={tech}
							className="text-sm px-3 py-1 rounded-full bg-blue-900/30 text-blue-300"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
