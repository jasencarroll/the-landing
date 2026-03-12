import { Badge } from '@/components/ui/badge';

const workingOn = [
	{
		name: 'Specz',
		desc: 'AI tool that conducts structured product interviews and generates numbered requirements, risk assessments, and API specs. Magic-link auth, Mistral AI streaming, full spec management.',
	},
	{
		name: 'Packaging Recalls',
		desc: 'FDA recalls analytics dashboard — 495 drug recalls with classification breakdown, defect analysis, cost impact, and timeline trends. Full data pipeline from openFDA API to PostgreSQL.',
	},
];

const techStack = [
	{ label: 'Languages', items: ['TypeScript', 'Python', 'SQL'] },
	{ label: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite', 'shadcn/ui'] },
	{ label: 'Backend', items: ['FastAPI', 'SQLAlchemy', 'PostgreSQL'] },
	{ label: 'Data & ML', items: ['scikit-learn', 'pandas', 'Recharts', 'LightGBM'] },
	{ label: 'Infrastructure', items: ['Docker', 'Railway', 'GitHub Actions'] },
	{ label: 'QMS Platforms', items: ['TrackWise', 'MasterControl', 'ETQ', 'Minitab'] },
];

export default function About() {
	return (
		<div className="max-w-4xl mx-auto px-6 py-20">
			<p className="text-xs text-muted tracking-widest uppercase mb-4">About</p>
			<h1 className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-12">
				Jasen Carroll
			</h1>
			<div className="space-y-12 max-w-2xl">
				<p className="text-muted leading-relaxed">
					I help regulated companies operationalize CSA, validate AI/ML systems in GMP environments,
					and stand up IEC 62304 SDLCs. I also write the software — compliance tooling, data
					pipelines, and production web apps built on FastAPI, React, and PostgreSQL.
				</p>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-6">Featured Work</h2>
					<div className="space-y-6">
						{workingOn.map((project) => (
							<div key={project.name} className="border-l-2 border-border pl-6">
								<p className="text-sm font-bold mb-1">{project.name}</p>
								<p className="text-sm text-muted leading-relaxed">{project.desc}</p>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-6">Background</h2>
					<div className="space-y-4 text-sm text-muted leading-relaxed">
						<p>
							Medical devices, pharma, combination products — J&J, Philips, Acumed, Dexcom, PCI
							Pharma Services. Validated AI/ML models for complaint disposition at Philips in 2020 —
							an aggregator and a recommendation engine, human-in-the-loop, under CSV before CSA
							existed. Software validation under consent decree. Stood up validation programs from
							scratch at Acumed. Survived a 9-day FDA inspection over the QSR. Cut a global CAPA
							backlog from 150 to 75 active.
						</p>
						<p>
							I didn't pivot away from regulated industries. I gained the engineering skills to
							build better tools for them.
						</p>
					</div>
				</section>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-6">Tech Stack</h2>
					<div className="space-y-3 text-sm">
						{techStack.map(({ label, items }) => (
							<div key={label} className="flex gap-4 items-start">
								<span className="text-muted-foreground w-28 shrink-0 text-xs uppercase tracking-wider pt-0.5">
									{label}
								</span>
								<div className="flex flex-wrap gap-2">
									{items.map((item) => (
										<Badge key={item}>{item}</Badge>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-6">
						What I'm Looking For
					</h2>
					<div className="space-y-4 text-sm text-muted leading-relaxed">
						<p>
							Software quality and engineering roles at MedTech companies, FDA software vendors,
							eQMS platforms, or compliance tooling startups. The intersection of eQMS validation
							experience and full-stack engineering is rare — I bring both.
						</p>
						<p>
							Interested in: eQMS modernization, FDA CSA implementation, compliance-as-code,
							validation automation, and anything that makes quality teams more effective.
						</p>
						<p>Remote preferred. Based in Philadelphia.</p>
					</div>
				</section>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-6">Elsewhere</h2>
					<div className="flex gap-6 text-sm">
						<a
							href="https://github.com/jasencarroll"
							className="text-muted hover:text-foreground transition-colors tracking-wider"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/jasenc"
							className="text-muted hover:text-foreground transition-colors tracking-wider"
						>
							LinkedIn
						</a>
					</div>
				</section>
			</div>
		</div>
	);
}
