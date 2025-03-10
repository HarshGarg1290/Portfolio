import { Github, Linkedin, Instagram, FileText } from "lucide-react";

export const socialLinks = [
	{
		icon: <Github className="w-6 h-6" />,
		href: "https://github.com/HarshGarg1290",
		label: "GitHub",
	},
	{
		icon: <Linkedin className="w-6 h-6" />,
		href: "https://www.linkedin.com/in/harsh-garg-538125245",
		label: "LinkedIn",
	},
	{
		icon: <Instagram className="w-6 h-6" />,
		href: "https://www.instagram.com/harsheyss.dev",
		label: "Instagram",
	},
	{
		icon: <FileText className="w-6 h-6" />,
		href: "/resume.pdf",
		label: "Resume",
	},
];

export const navItems = [
	{ label: "ABOUT", href: "#about" },
	{ label: "EXPERIENCE", href: "#experience" },
	{ label: "PROJECTS", href: "#projects" },
];

export const experiences = [
	{
		company: "Blooming",
		role: "Full-Stack Intern",
		period: "2024 - 2025",
		description: [
			"Developed and deployed a full-stack e-commerce website with an admin panel.",
			"Led the entire development lifecycle, ensuring scalability and seamless UX.",
			"Optimized performance and security, successfully transitioning the business online.",
		],
		tech: ["MERN", "Next.js", "AWS", "Tailwind", "PostgreSQL"],
		link: "",
	},
];

export const projects = [
	{
		title: "EcoBin",
		description:
			"Designed an IoT-based system for automated waste sorting into biodegradable, recyclable, and non-recyclable categories. Developed a web app for residents, a driver dashboard, and a municipal monitoring system with real-time tracking.",
		tech: [
			"ESP32-CAM",
			"Python",
			"Next.js",
			"Node.js",
			"Google Maps API",
			"PostgreSQL",
		],
		link: "https://github.com/aakashahpl/vimsicles",
		image: "/ecobin.jpg",
	},
	{
		title: "Mr. Montage - AI-Powered Valorant Montage",
		description:
			"Developed an AI tool to generate Valorant montages using a YOLO-based object detection model trained on a custom dataset. Integrated a Flask-based web interface and Firebase database for seamless processing and storage.",
		tech: ["YOLO", "Python", "Flask", "MoviePy", "Firebase"],
		link: "https://github.com/HarshGarg1290/Mr.Montage",
		image: "/mr.montage.png",
	},
	{
		title: "Digital Twin for Powerhouse - Real-Time System Monitoring",
		description:
			"Developed a digital twin web app for real-time monitoring of power-generation systems. Implemented ML-based anomaly detection for efficient system tracking. Qualified for SIH'23 internal hackathon.",
		tech: ["Python", "Machine Learning", "React", "Flask"],
		link: "https://github.com/HarshGarg1290/SIH_INTERNAL-2023_DIGITAL_TWIN",
		image: "/sih.png",
	},
	{
		title: "Indian Tourism - AI-Based Personalized Itinerary Planner",
		description:
			"Built a tourism platform that generates personalized travel itineraries based on user preferences. Finalist at Ossome Hacks conducted by SRM University, Chennai.",
		tech: ["React", "Node.js", "Firebase", "Tailwind"],
		link: "https://github.com/HarshGarg1290/indiaTourism",
		image: "/tourism.jpg",
	},
];
