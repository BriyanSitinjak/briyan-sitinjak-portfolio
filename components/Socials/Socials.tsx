import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';

const Socials = () => {
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
  return <div>Socials</div>;
};

export default Socials;
