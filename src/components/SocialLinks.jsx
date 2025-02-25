import Link from "next/link";

export default function SocialLink({ href, icon: Icon, label }) {
	return (
		<Link
			href={href}
			className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
			aria-label={label}
			target="_blank"
			rel="noopener noreferrer"
		>
			{Icon}
		</Link>
	);
}
