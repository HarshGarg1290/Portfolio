import "@/styles/globals.css";
import SmoothScrollProvider from "@/components/shared/LenisAnimation";

export default function App({ Component, pageProps }) {
	return (
		<SmoothScrollProvider>
			<Component {...pageProps} />
		</SmoothScrollProvider>
	);
}
