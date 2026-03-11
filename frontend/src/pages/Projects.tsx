import { Badge } from '@/components/ui/badge';

const projects = [
	{
		name: 'Specz',
		desc: 'Conversational AI tool for generating software specifications through guided interviews. Magic-link auth, Mistral AI chat, structured spec generation.',
		tags: ['FastAPI', 'React', 'TypeScript', 'AI'],
		href: 'https://github.com/jasencarroll/specz',
		live: 'https://specz-production.up.railway.app',
	},
	{
		name: 'Cafe Fausse',
		desc: 'Restaurant management system with reservations, menu management, and newsletter functionality.',
		tags: ['FastAPI', 'React', 'PostgreSQL', 'TypeScript'],
		href: 'https://github.com/jasencarroll/cafe-fausse',
		live: 'https://cafe-fausse-production.up.railway.app',
	},
	{
		name: 'Parking Lots',
		desc: 'Parking lot management system demonstrating Abstract Factory and Strategy design patterns. Visual grid-based slot management.',
		tags: ['FastAPI', 'React', 'PostgreSQL', 'Design Patterns'],
		href: 'https://github.com/jasencarroll/parking-lots',
		live: 'https://parking-lots-production.up.railway.app',
	},
	{
		name: 'Packaging Recalls',
		desc: 'FDA recalls data dashboard with interactive analytics — classification breakdown, defect analysis, timeline trends, and actionable insights.',
		tags: ['FastAPI', 'React', 'PostgreSQL', 'Recharts'],
		href: 'https://github.com/jasencarroll/packaging_recalls',
		live: 'https://packagingrecalls-production.up.railway.app',
	},
	{
		name: 'Recipe Recommender',
		desc: 'ML-powered recipe recommendation using K-means clustering on cook time and complexity. Search and discover recipes from 200K+ Food.com entries.',
		tags: ['FastAPI', 'React', 'scikit-learn', 'ML'],
		href: 'https://github.com/jasencarroll/recipe-recommender',
		live: 'https://recipe-recommender-production-38e2.up.railway.app',
	},
	{
		name: 'Goodware',
		desc: 'Malware detection ML system using LightGBM. 99% accuracy on PE file classification. Full pipeline from training to production web app.',
		tags: ['Flask', 'Python', 'LightGBM', 'ML'],
		href: 'https://github.com/jasencarroll/goodware',
		live: 'https://goodware-production.up.railway.app',
	},
	{
		name: 'Bun Stack',
		desc: 'CLI scaffolding tool for full-stack Bun + TypeScript apps. Rails-inspired conventions, zero-config Railway deploy.',
		tags: ['TypeScript', 'Bun', 'CLI', 'React'],
		href: 'https://github.com/jasencarroll/create-bun-stack',
		live: 'https://bun-stack.jasenc.dev',
	},
	{
		name: 'Create FastAPI React',
		desc: 'CLI scaffolding tool for full-stack FastAPI + React apps. Generates auth, CI/CD, Docker, and Railway deploy configs.',
		tags: ['TypeScript', 'Python', 'CLI', 'FastAPI'],
		href: 'https://github.com/jasencarroll/create-fastapi-react',
	},
];

export default function Projects() {
	return (
		<div className="max-w-4xl mx-auto px-6 py-20">
			<p className="text-xs text-muted tracking-widest uppercase mb-4">Projects</p>
			<h1 className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-12">
				What I Build
			</h1>
			<div className="space-y-px">
				{projects.map((p) => (
					<div
						key={p.name}
						className="border border-border p-6 hover:border-primary/50 hover:bg-card transition-all duration-200 group"
					>
						<div className="flex items-start justify-between gap-4 mb-3">
							<h2 className="text-base font-bold tracking-wider group-hover:text-primary transition-colors">
								{p.name}
							</h2>
							<div className="flex gap-3 shrink-0">
								{p.live && (
									<a
										href={p.live}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs text-muted hover:text-foreground tracking-wider transition-colors"
									>
										live ↗
									</a>
								)}
								<a
									href={p.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs text-muted hover:text-foreground tracking-wider transition-colors"
								>
									github ↗
								</a>
							</div>
						</div>
						<p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>
						<div className="flex flex-wrap gap-2">
							{p.tags.map((tag) => (
								<Badge key={tag}>{tag}</Badge>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
