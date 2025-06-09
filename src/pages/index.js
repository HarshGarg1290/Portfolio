import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Sidebar from "../components/home/Sidebar";
import AboutSection from "../components/home/About";
import ExperienceSection from "../components/home/Experience";
import ProjectsSection from "../components/home/Project";
import { socialLinks, navItems, experiences, projects } from "../data/content";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider, {
	useLenis,
} from "@/components/shared/LenisAnimation";
import LoadingScreen from "@/components/home/Loading";

export default function Home() {
	const [activeSection, setActiveSection] = useState("about");
	const [mounted, setMounted] = useState(false);
	const [isLoading, setIsLoading] = useState(true); // ✅ Loading state
	const lenis = useLenis();



	const [aboutRef, aboutInView] = useInView({
    threshold: 0.5, 
    triggerOnce: false,
    rootMargin: "-50px 0px -50px 0px"
});

const [experienceRef, experienceInView] = useInView({
    threshold: 0.5, 
    triggerOnce: false,
    rootMargin: "-50px 0px -50px 0px"
});

const [projectsRef, projectsInView] = useInView({
    threshold: 0.2, 
    triggerOnce: false,
    rootMargin: "-50px 0px -50px 0px"
});

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 2500); 

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const sectionStates = [
			{ id: "about", inView: aboutInView },
			{ id: "experience", inView: experienceInView },
			{ id: "projects", inView: projectsInView },
		];

		const visibleSection = sectionStates.find((section) => section.inView);

		if (visibleSection) {
			setActiveSection(visibleSection.id);
		}
	}, [aboutInView, experienceInView, projectsInView]);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleNavClick = (e, sectionId) => {
		e.preventDefault();

		if (!lenis) return;

		if (sectionId === "about") {
			lenis.scrollTo(0, { duration: 1, easing: (t) => 1 - Math.pow(1 - t, 3) });
		} else {
			const element = document.getElementById(sectionId);
			if (element) {
				lenis.scrollTo(element, {
					duration: 1,
					easing: (t) => 1 - Math.pow(1 - t, 3),
					offset: -50,
				});
			}
		}
	};

	if (!mounted) return null;

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<main className="min-h-screen font-spacegrotesk bg-navy-900 text-gray-300 relative sm:overflow-x-hidden">
			<CustomCursor />
			<div className="container mx-auto px-4 md:px-8 lg:px-24 py-2 sm:py-16 relative">
				<div className="flex flex-col lg:flex-row justify-between  gap-6">
					<div className="mx-40"></div>
					<div className="sm:fixed">
						<Sidebar
							activeSection={activeSection}
							handleNavClick={handleNavClick}
							navItems={navItems}
							socialLinks={socialLinks}
						/>
					</div>
					<div className="space-y-6 sm:space-y-24 max-w-2xl">
						<AboutSection aboutRef={aboutRef} />
						<ExperienceSection
							experienceRef={experienceRef}
							experiences={experiences}
						/>
						<ProjectsSection projectsRef={projectsRef} projects={projects} />
					</div>
				</div>
			</div>
		</main>
	);
}
