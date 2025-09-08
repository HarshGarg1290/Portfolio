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
		icon: <FileText className="w-5 h-5" />,
		href: "/resume.pdf",
		label: "Resume",
		isResume: true,
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
		period: "Nov'24 - Mar'25",
		description: [
			"Developed and deployed a full-stack e-commerce website with an admin panel.",
			"Led the entire development lifecycle, ensuring scalability and seamless UX.",
			"Optimized performance and security, successfully transitioning the business online.",
		],
		tech: ["MERN", "Next.js", "AWS", "Tailwind", "PostgreSQL"],
		link: "",
	},
	{
		company: "Buildspace",
		role: "Product Developer",
		period: "Jun'24 - Aug'25",
		description: [
			"Built an AI-powered system with YOLOv5 and MoviePy to auto-generate cinematic Valorant montages from gameplay footage.",
			"Invited to the Buildspace San Francisco Expo (Aug ’24) to present as one of the standout projects in the global cohort.",
		],
		tech: ["YOLO", "Python", "Flask", "MoviePy", "CUDA"],
		link: "",
	},
];

export const projects = [
	{
		title: "Homiee",
		description:
			"Developed an AI-driven platform that recommends flatmates, rentals, and local services with high predictive accuracy. Integrated a Gradient Boosting model into a Flask–Next.js architecture to enable real-time compatibility scoring across 28 lifestyle metrics. Designed and deployed a scalable, mobile-responsive interface with advanced filtering options via Vercel and Railway.",
		tech: [
			"Next.js",
			"Express.js",
			"Prisma",
			"PostgreSQL",
			"Tailwind CSS",
			"Machine Learning",
			"Flask",
			"Railway",
		],
		link: "https://homiee-five.vercel.app/",
		image: "/homiee.png",
	},
	{
		title: "Smart Ride Sharing",
		description:
			"Developed a full-stack carpooling platform connecting drivers with passengers. Implemented user verification, ride management, booking system, and real-time ride matching. Designed complete user flows from registration to ride completion with preferences filtering and payment processing.",
		tech: [
			"Next.js",
			"Express.js",
			"Prisma",
			"PostgreSQL",
			"Tailwind CSS",
			"JWT",
			"AWS S3",
			"Vercel",
		],
		link: "https://github.com/HarshGarg1290/Inhouse",
		image: "/ride-sharing.png",
	},
	{
		title: "EcoBin",
		description:
			"Designed an IoT-based system for automated waste sorting into biodegradable, recyclable, and non-recyclable categories. Developed a web app for residents, a driver dashboard, and a municipal monitoring system with real-time tracking.",
		tech: [
			"ESP32-CAM",
			"Python",
			"Next.js",
			"Node.js",
			"MapBox API",
			"PostgreSQL",
			"Typescript",
		],
		link: "https://github.com/aakashahpl/vimsicles",
		image: "/ecobin.jpg",
	},
	{
		title: "Mr. Montage - AI-Powered Valorant Montage",
		description:
			"Developed an AI tool to generate Valorant montages using a YOLO-based object detection model trained on a custom dataset. Integrated a Flask-based web interface for user interaction. The tool automates the process of creating cinematic montages from gameplay footage, enhancing the gaming experience.",
		tech: ["YOLO", "Python", "Flask", "MoviePy", "CUDA"],
		link: "https://github.com/HarshGarg1290/Mr.Montage",
		image: "/mr.montage.png",
	},
	{
		title: "Digital Twin for Powerhouse - Real-Time System Monitoring",
		description:
			"Developed a digital twin web app for real-time monitoring of power-generation systems. Implemented ML-based anomaly detection for efficient system tracking. Qualified for SIH'23 internal hackathon.",
		tech: ["Python", "Machine Learning", "ThreeJs", "Flask"],
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
