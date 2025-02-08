"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Chat from "../../chat"; // assuming Chat component is migrated
import Sidebar from "@/components/sidebar";

const userPrefersDark =
	typeof window !== "undefined" &&
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function ChatPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params as { id: string };

  return (
		<div className="app">
			<p className="app__mobile-message"> Only available on desktop 😊. </p>
			<div className="app-content">
				<Sidebar />
				<Chat userId={Number.parseInt(id, 10)} router={router} />
			</div>
		</div>
	);
}