import Link from "next/link";

export default function SocialLink({
	href,
	icon: Icon,
	label,
	isResume = false,
}) {
	if (isResume) {
		return (
			<Link
				href={href}
				className="flex items-center gap-2 px-3 py-2  bg-blue-600 hover:bg-blue-700 text-white rounded-sm transition-all transform hover:scale-105"
				aria-label={label}
				target="_blank"
				rel="noopener noreferrer"
			>
				{Icon}
				<span className="font-medium">Resume</span>
			</Link>
		);
	}

	return (
		<Link
			href={href}
			className="text-gray-400 hover:text-white transition-all transform hover:scale-110 flex items-center "
			aria-label={label}
			target="_blank"
			rel="noopener noreferrer"
		>
			{Icon}
		</Link>
	);
}
