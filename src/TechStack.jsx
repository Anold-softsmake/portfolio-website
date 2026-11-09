import cssIcon from '../css-3.png';
import githubIcon from '../github.png';
import htmlIcon from '../text.png';
import javaIcon from '../java.png';
import mysqlIcon from '../mysql.png';
import pythonIcon from '../python.png';
import reactIcon from '../nuclear.png';
import './TechStack.css';

const technologies = [
  { name: 'Python', description: 'Programming · AI/ML', icon: pythonIcon },
  { name: 'JavaScript', description: 'Web · Interactive applications', mark: 'JS', tone: 'javascript' },
  { name: 'HTML5', description: 'Frontend', icon: htmlIcon },
  { name: 'CSS3', description: 'Responsive UI', icon: cssIcon },
  { name: 'React', icon: reactIcon, monochrome: true },
  { name: 'Java', icon: javaIcon },
  { name: 'Git / GitHub', description: 'Version control · Collaboration', icon: githubIcon, monochrome: true },
  { name: 'Node.js', mark: 'Node', tone: 'node' },
  { name: 'MySQL', icon: mysqlIcon },
];

export function TechStack() {
  return (
    <ul className="tech-stack-grid" aria-label="Technologies">
      {technologies.map(({ name, description, icon, monochrome, mark, tone }) => (
        <li className="tech-stack-card" key={name}>
          <span className={`tech-stack-mark${tone ? ` tech-stack-mark--${tone}` : ''}`} aria-hidden="true">
            {icon ? (
              <img className={monochrome ? 'tech-stack-icon--monochrome' : undefined} src={icon} alt="" width="48" height="48" />
            ) : mark}
          </span>
          <strong>{name}</strong>
          {description && <span className="tech-stack-description">{description}</span>}
        </li>
      ))}
    </ul>
  );
}
