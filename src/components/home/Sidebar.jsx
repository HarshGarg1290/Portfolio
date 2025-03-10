import { useEffect, useRef } from "react";
import gsap from "gsap";
import Hero from "./Hero";
import Navigation from "./Navigation";
import SocialLink from "../SocialLinks";
import ContactMe from "../ContactMe";

export default function Sidebar({
	activeSection,
	handleNavClick,
	navItems,
	socialLinks,
}) {
	const sidebarRef = useRef(null);
	const socialLinksRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			sidebarRef.current,
			{ opacity: 0, x: -80 }, // Start from the left
			{
				opacity: 1,
				x: 0,
				duration: 1, // Smooth entrance
				ease: "power3.out", // Natural movement
			}
		);

		gsap.fromTo(
			socialLinksRef.current,
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				delay: 0.5, // Slight delay for staggered effect
				ease: "power2.out",
			}
		);
	}, []);

	return (
		<div
			ref={sidebarRef}
			className="font-ptsans space-y-8 lg:sticky lg:top-16 lg:h-fit"
		>
			<Hero />
			<Navigation
				activeSection={activeSection}
				handleNavClick={handleNavClick}
				navItems={navItems}
			/>
			<div ref={socialLinksRef} className="flex space-x-6">
				{socialLinks.map((link) => (
					<SocialLink key={link.label} {...link} />
				))}
			</div>
			<ContactMe />
		</div>
	);
}
