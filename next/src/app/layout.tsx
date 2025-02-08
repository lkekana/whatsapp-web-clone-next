import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { UsersProvider } from "@/contexts/usersContext";
import { SocketProvider } from "@/contexts/socketContext";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "WhatsApp Clone",
	description: "Built by Karen Okonkwo.",
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
					<UsersProvider>{children}</UsersProvider>
				</SocketProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
