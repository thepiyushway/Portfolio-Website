import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { container, ease } from './animations';
import { COMMUNITY_POSTS } from './content';
import { CommunityCard } from './components/CommunityCard';
import { ConsultingCard } from './components/ConsultingCard';
import { MentorshipCard } from './components/MentorshipCard';

export function ServicesSection() {
  return (
    <>
      {/* Services */}
      <section className="bg-slate-50 py-0">
        <div className="section-wrapper pt-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="mb-6 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-primary">
              What I bring to the table
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">How Can I Help You?</h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            <ConsultingCard />
            <MentorshipCard />
          </motion.div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-white py-0">
        <div className="section-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="mb-6 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Latest Content</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Recent posts, videos, and insights from my platforms.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {COMMUNITY_POSTS.map((post) => (
              <CommunityCard key={post.platform} post={post} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease }}
            className="mt-8 flex justify-center"
          >
            <Button href="#work" variant="primary" size="lg">
              Explore My Work
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
