export default function Contact() {
	return (
		<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
			<div className="max-w-4xl w-full">
				<p className="text-xs text-muted tracking-widest uppercase mb-4">Contact</p>
				<h1 className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-6">
					Get in Touch
				</h1>
				<p className="text-muted text-sm leading-relaxed mb-8 max-w-lg">
					I'm open to software quality and engineering roles at MedTech companies, FDA software
					vendors, eQMS platforms, and compliance tooling startups. Most interested in eQMS
					modernization, FDA CSA implementation, compliance-as-code, and validation automation.
				</p>
				<a
					href="https://linkedin.com/in/jasenc"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex px-8 py-4 border-2 border-foreground text-foreground text-sm tracking-wider hover:border-primary hover:bg-primary/10 transition-all duration-200"
				>
					Connect on LinkedIn ↗
				</a>
			</div>
		</div>
	);
}
