"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
	const cursorRef = useRef(null);

	useEffect(() => {
		// Optimized for performance
		const setX = gsap.quickSetter(cursorRef.current, "x", "px");
		const setY = gsap.quickSetter(cursorRef.current, "y", "px");

		const handleMouseMove = (e) => {
			setX(e.clientX);
			setY(e.clientY);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div
			ref={cursorRef}
			className="fixed top-0 left-0 w-[800px] h-[800px] bg-radial-gray blur-lg backdrop-blur-md rounded-full pointer-events-none"
			style={{
				willChange: "transform", // Optimized for GPU rendering
				transform: "translate(-50%, -50%)",
			}}
		/>
	);
}
