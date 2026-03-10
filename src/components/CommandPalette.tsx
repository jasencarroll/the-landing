import type React from 'react';
import { useEffect, useRef, useState } from 'react';

const routes = [
	{ cmd: '/about', label: 'About', href: '/about' },
	{ cmd: '/projects', label: 'Projects', href: '/projects' },
	{ cmd: '/resume', label: 'Resume', href: '/resume' },
	{ cmd: '/contact', label: 'Contact', href: '/contact' }
];

export function CommandPalette() {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				setOpen((o) => !o);
				setInput('');
			}
			if (e.key === 'Escape') {
				setOpen(false);
				setInput('');
			}
		};
		window.addEventListener('keydown', down);
		return () => window.removeEventListener('keydown', down);
	}, []);

	useEffect(() => {
		if (open) inputRef.current?.focus();
	}, [open]);

	const filtered = routes.filter(
		(r) =>
			r.cmd.includes(input.toLowerCase()) || r.label.toLowerCase().includes(input.toLowerCase())
	);

	const navigate = (href: string) => {
		setOpen(false);
		setInput('');
		window.location.href = href;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const match = routes.find((r) => r.cmd === input.trim().toLowerCase());
		if (match) navigate(match.href);
	};

	if (!open) {
		return (
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="fixed bottom-8 right-8 font-mono text-xs text-foreground/40 hover:text-foreground/80 transition-opacity cursor-pointer"
			>
				<kbd className="px-2 py-1 bg-card border border-border rounded">⌘K</kbd>
			</button>
		);
	}

	return (
		<>
			<button
				type="button"
				className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-default"
				onClick={() => setOpen(false)}
				aria-label="Close command palette"
			/>
			<div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-full max-w-lg z-50 px-4">
				<form
					onSubmit={handleSubmit}
					className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
				>
					<input
						ref={inputRef}
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type a command..."
						className="w-full px-6 py-4 bg-transparent text-foreground font-mono text-base focus:outline-none placeholder:text-muted-foreground"
					/>
					<div className="border-t border-border">
						{filtered.map((r) => (
							<button
								key={r.cmd}
								type="button"
								onClick={() => navigate(r.href)}
								className="w-full px-6 py-3 text-left font-mono text-sm flex justify-between items-center hover:bg-accent transition-colors"
							>
								<span className="text-foreground">{r.label}</span>
								<span className="text-muted-foreground text-xs">{r.cmd}</span>
							</button>
						))}
					</div>
					<div className="px-6 py-2 border-t border-border text-xs font-mono text-muted-foreground">
						↑↓ navigate · enter to go · esc to close
					</div>
				</form>
			</div>
		</>
	);
}
