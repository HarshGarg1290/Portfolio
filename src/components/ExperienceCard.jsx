export default function ExperienceCard({
	role,
	company,
	period,
	description,
	tech,
}) {
	return (
		<div className="group relative border border-gray-800 p-6 rounded-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
			<div className="flex justify-between items-start mb-4">
				<div>
					<h3 className="text-xl font-semibold text-white">{role}</h3>
					<p className="text-blue-400">{company}</p>
				</div>
				<span className="text-gray-500">{period}</span>
			</div>
			<ul className="space-y-2 mb-4">
				{description.map((point, i) => (
					<li key={i} className="flex items-start">
						<span className="text-blue-400 mr-2" aria-hidden="true">
							▹
						</span>
						{point}
					</li>
				))}
			</ul>
			<div className="flex flex-wrap gap-2">
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
	);
}
