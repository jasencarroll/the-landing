import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
			<div className="max-w-4xl w-full">
				<p className="text-xs text-muted tracking-widest uppercase mb-6">Philadelphia, PA</p>
				<h1 className="text-6xl md:text-8xl font-bold tracking-wider uppercase mb-6 leading-none">
					Jasen Carroll
				</h1>
				<p className="text-base md:text-lg text-muted max-w-2xl mb-4 leading-relaxed">
					Software quality engineer with 12+ years in FDA-regulated life sciences. I build
					compliance tooling, data pipelines, and production web apps — with deep experience in eQMS
					validation, FDA CSA, and Part 11 compliance.
				</p>
				<p className="text-sm text-muted max-w-2xl mb-12 leading-relaxed">
					I've been on the other side of the software quality teams depend on — I know where it
					falls short, and I build better alternatives.
				</p>
				<div className="flex flex-col sm:flex-row gap-4">
					<a
						href="https://consulting.jasencarroll.com"
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-4 border-2 border-[#c9703c] text-[#c9703c] text-sm tracking-wider hover:bg-[#c9703c]/10 transition-all duration-200"
					>
						Consulting ↗
					</a>
					<Link
						to="/projects"
						className="px-8 py-4 border-2 border-border text-muted text-sm tracking-wider hover:border-foreground hover:text-foreground transition-all duration-200"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="px-8 py-4 border-2 border-border text-muted text-sm tracking-wider hover:border-foreground hover:text-foreground transition-all duration-200"
					>
						About
					</Link>
				</div>
			</div>
		</div>
	);
}
