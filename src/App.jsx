import { useEffect, useRef, useState } from 'react';
import profilePhoto from '../PROFILE.jpeg';
import supermanPhoto from '../superman.jpg';
import { About, Contact, Journey, Philosophy, Projects, Skills } from './PortfolioSections.jsx';

const navLinks = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['journey', 'Journey'],
  ['contact', 'Contact'],
];

function Navigation({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 30);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header className={scrolled ? 'nav-wrap scrolled' : 'nav-wrap'}>
      <nav className="nav container">
        <a className="brand" href="#home" aria-label="Anold home" onClick={() => setMenuOpen(false)}>
          AO<span>.</span>
        </a>
        <button
          className="menu-btn"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="portfolio-nav-links"
          onClick={() => setMenuOpen(open => !open)}
        >
          <span></span><span></span><span></span>
        </button>
        <div id="portfolio-nav-links" className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'active' : undefined}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function moveProjectGlow(event) {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--px', `${event.clientX - rect.left}px`);
  card.style.setProperty('--py', `${event.clientY - rect.top}px`);
}

function moveHeroPhoto(event) {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const visual = event.currentTarget;
  const rect = visual.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  visual.style.setProperty('--mx', `${x * 12}px`);
  visual.style.setProperty('--my', `${y * 12}px`);
}

function resetHeroPhoto(event) {
  event.currentTarget.style.removeProperty('--mx');
  event.currentTarget.style.removeProperty('--my');
}

function movePortraitReveal(event) {
  const { offsetX, offsetY } = event.nativeEvent;
  const { style } = event.currentTarget;
  style.setProperty('--portrait-x', `${offsetX}px`);
  style.setProperty('--portrait-y', `${offsetY}px`);
}

function Hero() {
  const [portraitIntro, setPortraitIntro] = useState('loading');

  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <div className="online-pill"><i></i> OPEN TO OPPORTUNITIES</div>
        <p className="eyebrow">SOFTWARE ENGINEER · FUTURE ML ENGINEER</p>
        <h1>Hey, I’m<br /><span>Anold Omagwa.</span></h1>
        <p className="hero-text">
          I build software, explore AI and turn ideas into practical digital products.
          Currently studying Software Engineering at <strong>Kirinyaga University</strong>.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View my work <span>↗</span></a>
          <a className="btn btn-ghost" href="#contact">Let's connect</a>
        </div>
        <div className="availability"><i></i> Open to learning, building &amp; collaboration</div>
      </div>

      <div className="hero-visual unique-hero reveal" onPointerMove={moveHeroPhoto} onPointerLeave={resetHeroPhoto}>
        <div
          className="photo-frame"
          data-portrait-intro={portraitIntro === 'complete' ? undefined : portraitIntro}
          role="img"
          aria-label="Portrait of Anold Omagwa Onchangu with a Superman reveal"
          tabIndex={0}
          onPointerEnter={movePortraitReveal}
          onPointerMove={movePortraitReveal}
        >
          <span className="frame-grid" aria-hidden="true"></span>
          <span className="frame-label" aria-hidden="true">AO / 2026</span>
          <span className="frame-status" aria-hidden="true"><i></i> AVAILABLE</span>
          <img
            className="profile-photo"
            src={profilePhoto}
            alt=""
            draggable={false}
          />
          <img
            className="profile-photo superman-photo"
            src={supermanPhoto}
            alt=""
            draggable={false}
            onLoad={() => setPortraitIntro('ready')}
            onError={() => setPortraitIntro('complete')}
            onAnimationEnd={() => setPortraitIntro('complete')}
          />
          <span className="frame-corner corner-tl" aria-hidden="true"></span>
          <span className="frame-corner corner-br" aria-hidden="true"></span>
        </div>
        <div className="floating-card card-role"><span>01</span><strong>SOFTWARE<br />ENGINEERING</strong></div>
        <div className="floating-card card-ai"><span>02</span><strong>AI / ML<br />EXPLORER</strong></div>
        <div className="vertical-word">SOFTSMAKE</div>
      </div>
    </section>
  );
}

export default function App() {
  const main = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const content = main.current;
    const revealItems = content.querySelectorAll('.reveal');
    const hashTarget = document.getElementById(window.location.hash.slice(1));

    // Fragment links can arrive before React has mounted the matching section.
    if (hashTarget && content.contains(hashTarget)) {
      hashTarget.scrollIntoView({ behavior: 'instant' });
      setActiveSection(hashTarget.id);
    }

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(item => item.classList.add('visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${(index % 7) * 70}ms`);
      revealObserver.observe(item);
    });

    const sectionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: '-35% 0px -55% 0px' });

    content.querySelectorAll('section[id]').forEach(section => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div className="noise"></div>
      <Navigation activeSection={activeSection} />
      <main ref={main}>
        <Hero />
        <About />
        <Skills />
        <Projects onPointerMove={moveProjectGlow} />
        <Journey />
        <Philosophy />
        <Contact />
      </main>
      <footer className="footer container">
        <span>© 2026 Anold Omagwa Onchangu</span>
        <span>Built with curiosity · Softsmake</span>
      </footer>
    </>
  );
}
