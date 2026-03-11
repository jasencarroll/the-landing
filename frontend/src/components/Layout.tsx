import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CommandPalette } from './CommandPalette';
import { CursorGlow } from './CursorGlow';

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
						<Link to="/about" className="hover:text-foreground transition-colors">
							about
						</Link>
						<Link to="/projects" className="hover:text-foreground transition-colors">
							projects
						</Link>
						<Link to="/resume" className="hover:text-foreground transition-colors">
							resume
						</Link>
						<Link to="/contact" className="hover:text-foreground transition-colors">
							contact
						</Link>
					</div>
				</div>
			</nav>
			<main className="relative z-10 pt-16">{children}</main>
			<CommandPalette />
		</>
	);
}
