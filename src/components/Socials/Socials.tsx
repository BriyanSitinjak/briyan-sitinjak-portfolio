import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';

interface ISocials {
  containerStyles: string;
  iconStytle: string;
}

const Socials: React.FC<ISocials> = ({ containerStyles, iconStytle }) => {
  const SOCIAL_LINKS = [
    {
      icons: <FaGithub />,
      path: 'https://github.com/Briyan-NS'
    },
    {
      icons: <FaGitlab />,
      path: 'https://gitlab.com/briyan_sitinjak'
    },
    {
      icons: <FaLinkedin />,
      path: 'https://www.linkedin.com/in/briyan-sitinjak/'
    }
  ];
  return (
    <div className={containerStyles}>
      {SOCIAL_LINKS.map((link, idx) => {
        return (
          <Link
            target='_blank'
            href={link.path}
            key={idx}
            className={iconStytle}
          >
            {link.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
