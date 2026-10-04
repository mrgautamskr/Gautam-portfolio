import React from 'react';
import { socialLinks } from '../data/socialLinks';
import { HiOutlineCode, HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  email: HiOutlineMail,
};

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link, i) => {
        const Icon = iconMap[link.icon] || HiOutlineCode;
        return (
          <a
            key={i}
            href={link.url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}