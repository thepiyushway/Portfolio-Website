import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../components/ui/Button';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { fadeInUp, staggerContainer } from '../../lib/motion';
import type { ContactFormValues } from './types';
import { SOCIAL_ICON_MAP } from './iconMap';
import { socials } from '../../config/site';

const SOCIAL_FOLLOWERS: Record<string, string> = {
	youtube:   '50K+',
	linkedin:  '12K+',
	instagram: '25K+',
	twitter:   '5K+',
};

const contactSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(15, 'Message should be at least 15 characters')
});

const inputClass =
	'w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0063c2] focus:ring-2 focus:ring-[#0063c2]/20';

const iconTone: Record<string, string> = {
	youtube:   'bg-red-50   text-red-500',
	linkedin:  'bg-blue-50  text-[#0063c2]',
	instagram: 'bg-pink-50  text-pink-500',
	twitter:   'bg-slate-100 text-slate-600',
};

export function ContactSection() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful }
	} = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
		mode: 'onBlur'
	});

	const onSubmit = async (data: ContactFormValues) => {
		await new Promise((r) => setTimeout(r, 600));
		console.log('Contact form submitted', data);
	};

	return (
		<section id="contact" className="py-12 md:py-20">
			<SectionWrapper>

				{/* ── Two-column grid ── */}
				<div className="grid gap-10 lg:grid-cols-2 lg:items-start">

					{/* Left column */}
					<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
						<motion.p variants={fadeInUp} className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0063c2]">
							Available for Partnerships
						</motion.p>

						<motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
							Let&apos;s build something extraordinary.
						</motion.h2>

						<motion.p variants={fadeInUp} className="mb-8 text-base leading-7 text-slate-600">
							Whether you&apos;re looking for deep-tech AI consulting, a strategic software partnership, or high-level
							technical mentorship, I&apos;m here to help turn complex challenges into scalable solutions.
						</motion.p>

						{/* Contact details */}
						<motion.div variants={fadeInUp} className="mb-8 space-y-4">
							<div className="flex items-start gap-3">
								<span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50">
									<Mail size={16} className="text-[#0063c2]" />
								</span>
								<div className="min-w-0">
									<p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-slate-400">Email me</p>
									<a
										href="mailto:thepiyushway@gmail.com"
										className="break-all text-sm font-bold text-slate-900 transition-colors hover:text-[#0063c2] sm:text-base"
									>
										thepiyushway@gmail.com
									</a>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50">
									<MapPin size={16} className="text-[#0063c2]" />
								</span>
								<div>
									<p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-slate-400">Location</p>
									<p className="text-sm font-bold text-slate-900 sm:text-base">Bengaluru, India</p>
								</div>
							</div>
						</motion.div>

						{/* Compact social pills — 2-col on mobile, 4-col on sm+ */}
						<motion.div variants={fadeInUp}>
							<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
								Connect across platforms
							</p>
							<div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
								{socials.map((social) => {
									const Icon = SOCIAL_ICON_MAP[social.icon];
									return (
										<a
											key={social.id}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-elevated"
										>
											<span className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${iconTone[social.icon]}`}>
												<Icon size={14} />
											</span>
											<div className="min-w-0">
												<p className="truncate text-xs font-bold leading-none text-slate-900">{social.name}</p>
												<p className="mt-1 text-[11px] font-semibold leading-none text-slate-400">{SOCIAL_FOLLOWERS[social.icon]}</p>
											</div>
										</a>
									);
								})}
							</div>
						</motion.div>
					</motion.div>

					{/* Right column — form */}
					{/* y-only animation prevents horizontal overflow on mobile */}
					<motion.form
						onSubmit={handleSubmit(onSubmit)}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
						className="rounded-2xl border border-slate-100 bg-surface-base p-5 shadow-elevated sm:p-8"
						aria-label="Contact form"
					>
						<h3 className="mb-1 text-lg font-semibold text-slate-900">Send me a message</h3>
						<p className="mb-6 text-sm text-slate-500">I&apos;ll get back to you within 24 hours.</p>

						<div className="grid gap-4 sm:grid-cols-2">
							<label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
								First name
								<input
									{...register('firstName')}
									placeholder="Piyush"
									className={inputClass}
									aria-invalid={!!errors.firstName}
								/>
								{errors.firstName && <span className="text-xs font-normal text-rose-500">{errors.firstName.message}</span>}
							</label>
							<label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
								Last name
								<input
									{...register('lastName')}
									placeholder="Sharma"
									className={inputClass}
									aria-invalid={!!errors.lastName}
								/>
								{errors.lastName && <span className="text-xs font-normal text-rose-500">{errors.lastName.message}</span>}
							</label>
						</div>

						<label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-slate-700">
							Email address
							<input
								{...register('email')}
								placeholder="piyush@example.com"
								className={inputClass}
								aria-invalid={!!errors.email}
							/>
							{errors.email && <span className="text-xs font-normal text-rose-500">{errors.email.message}</span>}
						</label>

						<label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-slate-700">
							Project goals &amp; Message
							<textarea
								{...register('message')}
								rows={5}
								placeholder="Tell me about what you're building..."
								className={`${inputClass} resize-none`}
								aria-invalid={!!errors.message}
							/>
							{errors.message && <span className="text-xs font-normal text-rose-500">{errors.message.message}</span>}
						</label>

						<div className="mt-6">
							<Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full justify-center gap-2">
								{isSubmitting ? 'Sending...' : (
									<>
										Send Message <Send size={15} />
									</>
								)}
							</Button>
							{isSubmitSuccessful && (
								<p className="mt-3 text-center text-sm text-emerald-600">
									Thanks! I&apos;ll get back to you soon.
								</p>
							)}
						</div>
					</motion.form>
				</div>

				{/* ── Full-width location banner ── */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1], delay: 0.15 }}
					className="mt-10 overflow-hidden rounded-2xl shadow-soft"
				>
					<div className="relative h-48 sm:h-64">
						<img
							src="/images/bangalore.jpg"
							alt="Bengaluru city skyline"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

						<div className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-xl bg-white/95 px-3 py-2.5 shadow-elevated backdrop-blur-sm sm:bottom-5 sm:left-5 sm:px-4 sm:py-3">
							<div className="mb-1 flex items-center gap-1.5">
								<span className="relative flex h-2 w-2 shrink-0">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
								</span>
								<p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
									Currently based in
								</p>
							</div>
							<p className="text-sm font-bold text-slate-900">Bengaluru, Karnataka, India</p>
							<p className="text-xs text-slate-500">Accepting global digital consultations.</p>
						</div>
					</div>
				</motion.div>

			</SectionWrapper>
		</section>
	);
}
