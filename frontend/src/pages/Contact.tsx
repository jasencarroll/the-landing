import { useState } from 'react';

export default function Contact() {
	const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
	const [errorMsg, setErrorMsg] = useState('');

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus('sending');
		setErrorMsg('');

		const form = e.currentTarget;
		const data = Object.fromEntries(new FormData(form));

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
			if (!res.ok) {
				const body = await res.json().catch(() => null);
				throw new Error(body?.detail || `Error ${res.status}`);
			}
			setStatus('sent');
			form.reset();
		} catch (err) {
			setStatus('error');
			setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
		}
	}

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

				{status === 'sent' ? (
					<div className="max-w-lg border border-border p-8">
						<p className="text-sm text-foreground mb-2">Message sent.</p>
						<p className="text-xs text-muted">I'll be in touch.</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="max-w-lg space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-xs text-muted tracking-widest uppercase mb-2"
							>
								Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								maxLength={100}
								className="w-full bg-transparent border-b border-border text-sm text-foreground py-2 focus:border-foreground focus:outline-none transition-colors"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-xs text-muted tracking-widest uppercase mb-2"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								maxLength={100}
								className="w-full bg-transparent border-b border-border text-sm text-foreground py-2 focus:border-foreground focus:outline-none transition-colors"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-xs text-muted tracking-widest uppercase mb-2"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								maxLength={2000}
								rows={5}
								className="w-full bg-transparent border border-border text-sm text-foreground p-3 focus:border-foreground focus:outline-none transition-colors resize-none"
							/>
						</div>

						{status === 'error' && <p className="text-sm text-red-400">{errorMsg}</p>}

						<button
							type="submit"
							disabled={status === 'sending'}
							className="px-8 py-4 border-2 border-foreground text-foreground text-sm tracking-wider hover:border-primary hover:bg-primary/10 transition-all duration-200 disabled:opacity-50"
						>
							{status === 'sending' ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				)}

				<div className="mt-16 pt-8 border-t border-border max-w-lg flex gap-6">
					<a
						href="https://linkedin.com/in/jasenc"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-muted hover:text-foreground transition-colors tracking-wider"
					>
						LinkedIn ↗
					</a>
					<a
						href="https://consulting.jasencarroll.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-[#c9703c] hover:text-[#d4813f] transition-colors tracking-wider"
					>
						Consulting ↗
					</a>
				</div>
			</div>
		</div>
	);
}
