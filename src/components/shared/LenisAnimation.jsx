"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

// Create a Lenis context
const LenisContext = createContext(null);

export function useLenis() {
	return useContext(LenisContext);
}

export default function SmoothScrollProvider({ children }) {
	const [lenis, setLenis] = useState(null);
	const lenisRef = useRef(null);

	useEffect(() => {
		const lenisInstance = new Lenis({
			lerp: 0.06,
			smooth: true,
			direction: "vertical",
			smoothTouch: true,
			wheelMultiplier: 1.2, 
			touchMultiplier: 2,
			infinite: false,
		});


		setLenis(lenisInstance);
		lenisRef.current = lenisInstance;
		const raf = (time) => {
			lenisInstance.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		// Sync Lenis with scrollbar dragging
		const onScroll = () => {
			lenisInstance.raf(performance.now());
		};
		window.addEventListener("scroll", onScroll);

		return () => {
			lenisInstance.destroy();
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
	);
}
