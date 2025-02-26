"use client";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";

const LOAD_TIME_MS = 3000;

export default function LoaderWrapper({
	children,
}: { children: React.ReactNode }) {
	const [appLoaded, setAppLoaded] = useState(false);
	const [startLoadProgress, setStartLoadProgress] = useState(false);

	useEffect(() => {
		setStartLoadProgress(true);
		setTimeout(() => setAppLoaded(true), LOAD_TIME_MS);
	}, []);

	if (!appLoaded) return <Loader done={startLoadProgress} />;

	return <>{children}</>;
}
