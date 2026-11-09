import githubIcon from '../github.png';
import linkedinIcon from '../linkedin.png';

const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/Anold-softsmake',
    icon: githubIcon,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anold-omagwa-302595437/',
    icon: linkedinIcon,
  },
];

export function SocialLinks({ className }) {
  return (
    <div className={className}>
      {socialLinks.map(({ id, name, href, icon }) => (
        <a key={id} href={href} target="_blank" rel="noopener" aria-label={name}>
          <img className="social-link-icon" src={icon} alt="" />
          <span>{name} ↗</span>
        </a>
      ))}
    </div>
  );
}
