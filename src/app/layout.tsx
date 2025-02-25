import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { UsersProvider } from "@/contexts/usersContext";
import { SocketProvider } from "@/contexts/socketContext";
import LoaderWrapper from "./loader-wrapper";
import type { Viewport } from "next";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const viewport: Viewport = {
	themeColor: "#000000",
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: "WhatsApp Clone",
	description: "Built by Karen Okonkwo.",
	manifest: "/manifest.json",
	icons: {
		icon: "/icon.png",
		shortcut: "/logo.png",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: "Whatsapp Web Clone",
		url: "https://whatsapp-clone-web.netlify.app/",
		// images: [
		// 	{
		// 		url: "https://res.cloudinary.com/karso/image/upload/v1624874114/Portfolio/Project%20Screenshots/p8yvzprijsyuro2h9gtb.png",
		// 	},
		// ],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider defaultTheme="system">
					<SocketProvider>
						<UsersProvider>
							<LoaderWrapper>{children}</LoaderWrapper>
						</UsersProvider>
					</SocketProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
