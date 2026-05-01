import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../components/ui/Button';
import { SectionWrapper } from '../../components/ui/SectionWrapper';
import { fadeInUp, staggerContainer } from '../../lib/motion';
import type { ContactFormValues } from './types';
import { SocialRow } from './components/SocialRow';

const contactSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(15, 'Message should be at least 15 characters')
});

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
		<section id="contact" className="py-24">
			<SectionWrapper className="grid gap-12 lg:grid-cols-2 lg:items-start">
				<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
					<motion.p variants={fadeInUp} className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0063c2]">
						Let&apos;s build something extraordinary.
					</motion.p>
					<motion.h2 variants={fadeInUp} className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
						Whether you&apos;re looking for an AI consultant, software partner, or mentorship, I&apos;m here to help.
					</motion.h2>
					<motion.p variants={fadeInUp} className="mb-6 max-w-xl text-slate-600">
						Email responses guaranteed within 24 hours. Transparent communication from day one.
					</motion.p>
					<motion.div variants={fadeInUp} className="mb-8 space-y-3 text-sm text-slate-600">
						<div className="flex items-center gap-2.5">
							<Mail size={15} className="shrink-0 text-[#0063c2]" />
							<span>hello@aiportfoliopro.com</span>
						</div>
						<div className="flex items-center gap-2.5">
							<MapPin size={15} className="shrink-0 text-[#0063c2]" />
							<span>San Francisco, CA</span>
						</div>
					</motion.div>
					<motion.div variants={fadeInUp} className="mb-5 flex items-center gap-3">
						<div className="h-px flex-1 bg-slate-200" />
						<p className="whitespace-nowrap text-xs text-slate-400">Not ready to collaborate? Learn from my content.</p>
						<div className="h-px flex-1 bg-slate-200" />
					</motion.div>
					<motion.div variants={fadeInUp}>
						<SocialRow />
					</motion.div>
				</motion.div>

				<motion.form
					onSubmit={handleSubmit(onSubmit)}
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
					className="rounded-2xl border border-slate-100 bg-surface-base p-8 shadow-elevated"
					aria-label="Contact form"
				>
					<h3 className="mb-1 text-lg font-semibold text-slate-900">Send me a message</h3>
					<p className="mb-6 text-sm text-slate-500">I&apos;ll get back to you within 24 hours.</p>

					<div className="grid gap-4 sm:grid-cols-2">
						<label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
							First name
							<input
								{...register('firstName')}
								placeholder="First"
								className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0063c2] focus:ring-2 focus:ring-[#0063c2]/20"
								aria-invalid={!!errors.firstName}
							/>
							{errors.firstName && <span className="text-xs font-normal text-rose-500">{errors.firstName.message}</span>}
						</label>
						<label className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
							Last name
							<input
								{...register('lastName')}
								placeholder="Last"
								className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0063c2] focus:ring-2 focus:ring-[#0063c2]/20"
								aria-invalid={!!errors.lastName}
							/>
							{errors.lastName && <span className="text-xs font-normal text-rose-500">{errors.lastName.message}</span>}
						</label>
					</div>

					<label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-slate-700">
						Email
						<input
							{...register('email')}
							placeholder="you@example.com"
							className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0063c2] focus:ring-2 focus:ring-[#0063c2]/20"
							aria-invalid={!!errors.email}
						/>
						{errors.email && <span className="text-xs font-normal text-rose-500">{errors.email.message}</span>}
					</label>

					<label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-slate-700">
						Message
						<textarea
							{...register('message')}
							rows={5}
							placeholder="Tell me about your project goals..."
							className="resize-none rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0063c2] focus:ring-2 focus:ring-[#0063c2]/20"
							aria-invalid={!!errors.message}
						/>
						{errors.message && <span className="text-xs font-normal text-rose-500">{errors.message.message}</span>}
					</label>

					<div className="mt-6">
						<Button type="submit" variant="primary" disabled={isSubmitting}>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</Button>
						{isSubmitSuccessful && <p className="mt-3 text-sm text-emerald-600">Thanks! I&apos;ll get back to you soon.</p>}
					</div>
				</motion.form>
			</SectionWrapper>
		</section>
	);
}
