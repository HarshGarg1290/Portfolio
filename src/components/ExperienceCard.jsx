export default function ExperienceCard({
	role,
	company,
	period,
	description,
	tech,
	link,
}) {
	return (
		<div className="group relative border border-gray-800 p-4 rounded-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
			<div className="flex flex-col  justify-center  mb-4">
				<div className="flex justify-between items-center mb-2">
					<h3 className="text-xl font-semibold text-white">{role}</h3>
					<span className="text-gray-500">{period}</span>
				</div>

				<p className="text-blue-400">{company}</p>
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
