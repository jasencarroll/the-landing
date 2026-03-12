import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CommandPalette } from './CommandPalette';
import { CursorGlow } from './CursorGlow';

function NavLink({ to, children }: { to: string; children: ReactNode }) {
	const { pathname } = useLocation();
	const active = pathname === to;
	return (
		<Link
			to={to}
			className={`hover:text-foreground transition-colors ${active ? 'text-foreground' : ''}`}
		>
			{children}
		</Link>
	);
}

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<CursorGlow />
			<nav className="fixed top-0 left-0 right-0 z-30 border-b border-border bg-background/80 backdrop-blur-sm">
				<div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
					<Link
						to="/"
						className="text-sm font-bold tracking-widest hover:text-primary transition-colors uppercase"
					>
						JC
					</Link>
					<div className="flex gap-8 text-xs text-muted tracking-wider">
						<NavLink to="https://consulting.jasencarroll.com">consulting ↗</NavLink>
						<NavLink to="/resume">resume</NavLink>
						<NavLink to="/contact">contact</NavLink>
						<NavLink to="/about">about</NavLink>
						<NavLink to="/projects">projects</NavLink>
					</div>
				</div>
			</nav>
			<main className="relative z-10 pt-16">{children}</main>
			<CommandPalette />
		</>
	);
}
