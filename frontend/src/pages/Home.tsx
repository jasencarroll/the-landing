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
					I help regulated companies operationalize CSA, validate AI/ML systems in GMP environments,
					and stand up IEC 62304 SDLCs. I also write the software — compliance tooling, data
					pipelines, and production web apps.
				</p>
				<p className="text-sm text-muted max-w-2xl mb-12 leading-relaxed">
					I didn't pivot away from regulated industries. I gained the engineering skills to build
					better tools for them.
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
						to="/resume"
						className="px-8 py-4 border-2 border-foreground text-foreground text-sm tracking-wider hover:border-primary hover:bg-primary/10 transition-all duration-200"
					>
						Resume
					</Link>
					<Link
						to="/projects"
						className="px-8 py-4 border-2 border-border text-muted text-sm tracking-wider hover:border-foreground hover:text-foreground transition-all duration-200"
					>
						Projects
					</Link>
				</div>
			</div>
		</div>
	);
}
