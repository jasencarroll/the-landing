import { Badge } from '@/components/ui/badge';

const workingOn = [
	{
		name: 'Specz',
		desc: 'Conversational AI tool that conducts structured product intake interviews and generates comprehensive software specifications. Magic-link auth, Mistral AI chat, traceable decisions.',
	},
	{
		name: 'Packaging Recalls',
		desc: 'FDA recalls data dashboard with interactive analytics — classification breakdown, defect analysis, timeline trends, and actionable insights from real FDA data.',
	},
	{
		name: 'Recipe Recommender',
		desc: 'ML-powered recipe recommendation using K-means clustering. Search and discover recipes from 200K+ Food.com entries based on cook time and complexity preferences.',
	},
];

const techStack = [
	{ label: 'Languages', items: ['TypeScript', 'Python', 'SQL'] },
	{ label: 'Frontend', items: ['React', 'Tailwind', 'Vite'] },
	{ label: 'Backend', items: ['FastAPI', 'SQLAlchemy'] },
	{ label: 'Data', items: ['PostgreSQL', 'scikit-learn', 'pandas'] },
	{ label: 'Infrastructure', items: ['Docker', 'Railway', 'GitHub Actions'] },
	{ label: 'Regulated', items: ['TrackWise', 'MasterControl', 'ETQ', 'Minitab'] },
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
					I'm a software engineer with 12 years in FDA-regulated manufacturing. I build tools for
					quality teams, compliance programs, and regulated systems — because I've been on the other
					side of the software those teams depend on.
				</p>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-6">What I'm Working On</h2>
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
							I spent 12 years in FDA-regulated manufacturing — medical devices, pharma combination
							products, Class II/III. System failures in that world meant 483 observations, warning
							letters, and product recalls. That shaped how I think about software: understand
							failure modes, build in observability, design systems that degrade gracefully.
						</p>
						<p>
							I've run CAPA programs under consent decree at Philips, defended EU MDR tech file
							audits solo at Acumed, written Part 11 compliance tooling, and managed sterilization
							validation for Class III devices. I've used the QMS software. I know where it falls
							short.
						</p>
						<p>
							I didn't pivot away from regulated industries — I gained the engineering skills to
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
							Software engineering roles at MedTech companies, FDA software vendors, eQMS platforms,
							or compliance tooling startups. The intersection of deep regulated industry knowledge
							and software engineering is rare — I bring both.
						</p>
						<p>
							Interested in: QMS software, compliance-as-code, regulatory intelligence tooling,
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
