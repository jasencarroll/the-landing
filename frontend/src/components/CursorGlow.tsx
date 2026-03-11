import { useEffect, useState } from 'react';

export function CursorGlow() {
	const [pos, setPos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		let raf: number;
		const move = (e: MouseEvent) => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
		};
		window.addEventListener('mousemove', move);
		return () => {
			window.removeEventListener('mousemove', move);
			cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<div
			className="pointer-events-none fixed inset-0 z-0 transition-none"
			style={{
				background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.07), transparent 40%)`,
			}}
		/>
	);
}
