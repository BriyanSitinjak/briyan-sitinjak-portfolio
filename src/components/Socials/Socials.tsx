import Link from 'next/link';

import { SOCIAL_LINKS } from '@/src/constant/constant';
import { SOCIAL_ICONS, type SocialName } from './socialIcons';

interface ISocials {
  containerStyles: string;
  iconStytle: string;
}

const Socials = ({ containerStyles, iconStytle }: ISocials) => {
  return (
    <div className={containerStyles}>
      {SOCIAL_LINKS.map((link) => (
        <Link
          target="_blank"
          href={link.url}
          key={link.name}
          className={iconStytle}
          rel="noopener noreferrer"
        >
          {SOCIAL_ICONS[link.name as SocialName]}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
