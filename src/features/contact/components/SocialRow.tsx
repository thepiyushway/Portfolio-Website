import { useSocialLinks } from '../hooks/useSocialLinks';
import { SocialCard } from './SocialCard';

export function SocialRow() {
  const links = useSocialLinks();

  return (
    <div className="flex flex-wrap items-stretch gap-4 lg:flex-nowrap">
      {links.map((social) => (
        <div
          key={social.id}
          className="basis-full min-w-52 flex-1 md:basis-1/2 lg:max-w-64 lg:basis-auto"
        >
          <SocialCard social={social} />
        </div>
      ))}
    </div>
  );
}
