import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const routes = [
	{ cmd: '/about', label: 'About', href: '/about' },
	{ cmd: '/projects', label: 'Projects', href: '/projects' },
	{ cmd: '/resume', label: 'Resume', href: '/resume' },
	{ cmd: '/contact', label: 'Contact', href: '/contact' },
];

export function CommandPalette() {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');
	const [selected, setSelected] = useState(0);
	const inputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				setOpen((o) => !o);
				setInput('');
				setSelected(0);
			}
			if (e.key === 'Escape') {
				setOpen(false);
				setInput('');
				setSelected(0);
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
			r.cmd.includes(input.toLowerCase()) || r.label.toLowerCase().includes(input.toLowerCase()),
	);

	const go = (href: string) => {
		setOpen(false);
		setInput('');
		setSelected(0);
		navigate(href);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			setSelected((s) => (s + 1) % filtered.length);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setSelected((s) => (s - 1 + filtered.length) % filtered.length);
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (filtered[selected]) {
				go(filtered[selected].href);
			}
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: reset selection when input changes
	useEffect(() => {
		setSelected(0);
	}, [input]);

	if (!open) {
		return (
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="fixed bottom-8 right-8 font-mono text-xs text-foreground/40 hover:text-foreground/80 transition-opacity cursor-pointer"
			>
				<kbd className="px-2 py-1 bg-card border border-border rounded">&#x2318;K</kbd>
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
				<div
					className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
					onKeyDown={handleKeyDown}
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
						{filtered.map((r, i) => (
							<button
								key={r.cmd}
								type="button"
								onClick={() => go(r.href)}
								className={`w-full px-6 py-3 text-left font-mono text-sm flex justify-between items-center transition-colors ${
									i === selected ? 'bg-accent text-accent-foreground' : 'hover:bg-accent'
								}`}
							>
								<span className="text-foreground">{r.label}</span>
								<span className="text-muted-foreground text-xs">{r.cmd}</span>
							</button>
						))}
					</div>
					<div className="px-6 py-2 border-t border-border text-xs font-mono text-muted-foreground">
						&#x2191;&#x2193; navigate &middot; enter to go &middot; esc to close
					</div>
				</div>
			</div>
		</>
	);
}
