import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';

const Socials = () => {
  const SOCIAL_LINKS = [
    {
      icons: <FaGithub />,
      path: ''
    },
    {
      icons: <FaGitlab />,
      path: ''
    },
    {
      icons: <FaLinkedin />,
      path: ''
    }
  ];
  return <div>Socials</div>;
};

export default Socials;
