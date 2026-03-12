export default function Resume() {
	const experience = [
		{
			company: 'PCI',
			location: 'Philadelphia, PA',
			roles: [
				{
					title: 'Senior Quality Engineer',
					period: 'Feb 2025 – Mar 2026',
					bullets: [
						'Lead QE for auto-injector product lines supporting Eli Lilly — drove CAPAs, deviations, and nonconformances to effective closure.',
						'Updated site-wide Change Control procedures, reducing CAPA trends related to change control failures.',
						'Implemented risk-based Source Code Review and Software Backup procedures to strengthen GAMP5 Cat 4/5 compliance posture.',
						'Developed UAM evaluation framework consolidating 21 CFR 211, 21 CFR 820, Part 11, and FDA Data Integrity guidance into single audit-ready tool.',
					],
				},
				{
					title: 'Quality Engineer — NPI',
					period: 'Sep 2023 – Jan 2025',
					bullets: [
						'SME for CAPA/investigations, statistics, sterilization, cleanroom practices, and software assurance.',
						'Led LEAN/Six Sigma project for cleaning optimization — $0.5M labor savings, 3,600 production hours recovered.',
						'Developed Departmental Plan including mission/vision, RACI charts, KPI definition, and strategic roadmap.',
					],
				},
			],
		},
		{
			company: 'Philips North America',
			location: 'Remote',
			roles: [
				{
					title: 'Quality Engineer — CAPA (IGTD)',
					period: 'Aug 2020 – Sep 2021',
					bullets: [
						'Re-implemented CAPA Review Boards within global QMS; reduced active CAPA load by 50% — from 150+ to 75.',
						'Led recovery plan for CAPAs exceeding 365 days overdue; achieved compliant closure on high-visibility CAPA in ~30 days.',
						'Coached global QMS stakeholders on CAPA best practices and TrackWise utilization.',
					],
				},
				{
					title: 'Software Validation Engineer',
					period: 'Jul 2019 – Aug 2020',
					bullets: [
						'Managed Non-Product System Software validation portfolio under active consent decree — maintained compliant status across 20+ systems during heightened regulatory scrutiny.',
						'Led Periodic Review Reports initiative for team of eight; delivered on-time as reported 2020 KPI under consent decree remediation program.',
						'Applied risk-based approach to prioritize validation activities across GAMP Cat 3–5 systems in alignment with site QMS requirements.',
					],
				},
			],
		},
		{
			company: 'Acumed LLC',
			location: 'Hillsboro, OR',
			roles: [
				{
					title: 'Quality Engineer — Software, Sterilization, & Manufacturing',
					period: 'Dec 2021 – Jul 2022',
					bullets: [
						'Defended tech file audits for EU MDR submission covering microbiology and sterilization validation.',
						'Developed Part 11 compliance checklist for software validation (CAPA deliverable).',
					],
				},
				{
					title: 'Validation Engineer (QA) / Quality Engineer II / QSE (Contract)',
					period: 'Feb 2015 – Jun 2019',
					bullets: [
						'Co-owned risk-based Master Validation Plan for all processes and contract sterilization.',
						'Managed sterilization CAPA from notified body findings — defended subsequent audit solo with zero additional findings.',
						'Supported ISO 13485:2016 audit as SME for validation and sterilization — no findings.',
						'NPI QE for chemically applied combination product including regulatory submissions.',
					],
				},
			],
		},
		{
			company: 'Johnson & Johnson — Neutrogena',
			location: 'Los Angeles, CA',
			roles: [
				{
					title: 'Pilot Plant R&D Lead / Validation Engineer',
					period: 'Sep 2012 – Nov 2014',
					bullets: [
						'Managed team of 3–4 contractors overseeing Pilot Plant operations.',
						'Expanded Pilot Plant capacity by 60% through scheduling and organizational systems.',
						'Authored 65% of Process Validation Protocols on a team of six engineers.',
					],
				},
			],
		},
	];

	const complianceTooling = [
		'Developed UAM and software inventory evaluation tools using Python and TypeScript for internal QMS use.',
		'Built FDA packaging recalls analytics dashboard — pipeline ingesting public recall data for trend analysis and risk classification.',
		'Authored full-stack applications demonstrating production software development capability aligned to SDLC validation requirements.',
	];

	const education = [
		['M.S. Software Engineering', 'Quantic University', 'Anticipated Aug 2026'],
		['Executive M.B.A.', 'Quantic University', 'Oct 2023'],
		['B.S. Mechanical Engineering', 'Drexel University', 'Jun 2012'],
	];

	const certs = [
		'Six Sigma Green Belt (DVIRC)',
		'Certified Software Quality Engineer, ASQ (2020–2023)',
		'Full Stack Nanodegree, Udacity (2024)',
		'Data Science Foundations, Quantic (2025)',
		'Process Validation, Oriel STAT A MATRIX',
		'Developing and Validating Software, AAMI',
	];

	return (
		<div className="max-w-4xl mx-auto px-6 py-20">
			<p className="text-xs text-muted tracking-widest uppercase mb-4">Resume</p>
			<h1 className="text-4xl md:text-5xl font-bold tracking-wider uppercase mb-2">
				Jasen Carroll
			</h1>
			<p className="text-sm text-muted mb-12 tracking-wider">Philadelphia, PA</p>

			<div className="space-y-12 max-w-2xl">
				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-4">Summary</h2>
					<p className="text-sm text-muted leading-relaxed">
						CSA implementation, AI/ML validation in GxP, and quality systems architecture across
						medical devices, pharma, and combination products (21 CFR Part 11, 21 CFR 820/211, ISO
						13485, IEC 62304, EU MDR). Hands-on experience executing risk-based software validation
						under active consent decree, managing Non-Product System Software portfolios, and
						authoring GAMP5-aligned procedures across Class II/III medical devices. Direct
						experience in 483, warning letter, and notified body audit environments — zero findings
						as validation SME. MS Software Engineering in progress; builds production compliance
						tooling. Six Sigma Green Belt. MBA.
					</p>
				</section>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-6">Experience</h2>
					<div className="space-y-8">
						{experience.map(({ company, location, roles }) => (
							<div key={company}>
								<div className="flex justify-between items-baseline mb-4">
									<h3 className="text-sm font-bold tracking-wider">{company}</h3>
									<span className="text-xs text-muted">{location}</span>
								</div>
								<div className="space-y-5 pl-4 border-l border-border">
									{roles.map(({ title, period, bullets }) => (
										<div key={title}>
											<div className="flex justify-between items-baseline mb-2">
												<p className="text-sm text-primary">{title}</p>
												<span className="text-xs text-muted shrink-0 ml-4">{period}</span>
											</div>
											<ul className="space-y-1">
												{bullets.map((b) => (
													<li
														key={b}
														className="text-xs text-muted leading-relaxed before:content-['—'] before:mr-2 before:text-border"
													>
														{b}
													</li>
												))}
											</ul>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-4">Compliance Tooling</h2>
					<div className="pl-4 border-l border-border">
						<div className="flex justify-between items-baseline mb-2">
							<p className="text-sm text-primary">Independent — jasencarroll.com</p>
							<span className="text-xs text-muted">Sep 2024 – Present</span>
						</div>
						<ul className="space-y-1">
							{complianceTooling.map((b) => (
								<li
									key={b}
									className="text-xs text-muted leading-relaxed before:content-['—'] before:mr-2 before:text-border"
								>
									{b}
								</li>
							))}
						</ul>
					</div>
				</section>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-4">Education</h2>
					<div className="space-y-2 text-sm">
						{education.map(([degree, school, year]) => (
							<div key={degree} className="flex justify-between items-baseline">
								<div>
									<span className="text-foreground">{degree}</span>
									<span className="text-muted"> — {school}</span>
								</div>
								<span className="text-xs text-muted shrink-0 ml-4">{year}</span>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className="text-xs text-muted tracking-widest uppercase mb-4">Certifications</h2>
					<div className="space-y-1 text-xs text-muted">
						{certs.map((c) => (
							<p key={c}>{c}</p>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
