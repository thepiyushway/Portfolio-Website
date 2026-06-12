import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { fadeInUp } from '@/lib/motion';

type HeroCTAProps = {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

function getLinkTargetProps(href: string) {
  return href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

export function HeroCTA({ primary, secondary }: HeroCTAProps) {
  return (
    <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
      <Button href={primary.href} variant="primary" {...getLinkTargetProps(primary.href)}>
        {primary.label} <ArrowRight size={16} />
      </Button>
      <Button href={secondary.href} variant="secondary" {...getLinkTargetProps(secondary.href)}>
        {secondary.label}
      </Button>
    </motion.div>
  );
}
