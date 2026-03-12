export default function Contact() {
	return (
		<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
			<div className="max-w-4xl w-full">
				<p className="text-xs text-muted tracking-widest uppercase mb-4">Contact</p>
				<h1 className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-6">
					Get in Touch
				</h1>
				<p className="text-muted text-sm leading-relaxed mb-8 max-w-lg">
					I'm open to software quality engineering roles at MedTech companies, FDA software vendors,
					eQMS platforms, and compliance tooling startups. Most interested in eQMS modernization,
					FDA CSA implementation, compliance-as-code, and validation automation.
				</p>
				<a
					href="https://linkedin.com/in/jasenc"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex px-8 py-4 border-2 border-foreground text-foreground text-sm tracking-wider hover:border-primary hover:bg-primary/10 transition-all duration-200"
				>
					Connect on LinkedIn ↗
				</a>

				<div className="mt-16 pt-8 border-t border-border max-w-lg">
					<p className="text-xs text-muted tracking-widest uppercase mb-3">Consulting</p>
					<p className="text-muted text-sm leading-relaxed mb-4">
						Also available for FDA consulting engagements — CSA buildouts, IEC 62304 SDLCs, QMSR
						transitions, and fractional quality leadership.
					</p>
					<a
						href="https://consulting.jasencarroll.com"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex px-8 py-4 border-2 border-border text-muted text-sm tracking-wider hover:border-foreground hover:text-foreground transition-all duration-200"
					>
						consulting.jasencarroll.com ↗
					</a>
				</div>
			</div>
		</div>
	);
}
