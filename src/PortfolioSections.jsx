import { SocialLinks } from './SocialLinks.jsx';
import { TechStack } from './TechStack.jsx';

export function About() {
  return (
    <section id="about" className="section container">
      <div className="section-head reveal">
        <p className="eyebrow">01 / ABOUT</p>
        <h2>Curious by nature.<br /><span>Builder by choice.</span></h2>
      </div>
      <div className="about-grid">
        <div className="about-main reveal">
          <p className="lead">I enjoy turning ideas into working software and learning how technology can solve real problems.</p>
          <p>My journey started with coding bootcamps and grew through university projects, hands-on technical work and independent experimentation. I am currently studying Software Engineering at Kirinyaga University while developing my skills across web development, programming, systems and AI.</p>
          <p>Long term, I want to build products through <strong>Softsmake</strong> and specialize in Machine Learning Engineering.</p>
        </div>
        <div className="facts reveal">
          <div><span>Currently</span><strong>3rd Year · Software Engineering</strong></div>
          <div><span>University</span><strong>Kirinyaga University</strong></div>
          <div><span>Based in</span><strong>Kenya 🇰🇪</strong></div>
          <div><span>Goal</span><strong>Machine Learning Engineer</strong></div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">02 / TOOLKIT</p>
          <h2>Tools I use to<br /><span>turn ideas into reality.</span></h2>
        </div>
        <div className="skills-showcase tech-stack-showcase">
          <div className="reveal">
            <h3 className="stack-label">TECH STACK</h3>
            <TechStack />
          </div>
          <div className="skill-stack reveal">
            <div className="stack-label">FOCUS AREAS</div>
            <div className="focus-list">
              <div className="focus-item"><span>01</span><strong>Software Engineering</strong><em>Building practical applications</em></div>
              <div className="focus-item"><span>02</span><strong>AI &amp; Machine Learning</strong><em>Growing toward ML engineering</em></div>
              <div className="focus-item"><span>03</span><strong>Web Development</strong><em>Interfaces and digital products</em></div>
              <div className="focus-item"><span>04</span><strong>Systems &amp; Networking</strong><em>Servers, networks and troubleshooting</em></div>
            </div>
          </div>
        </div>
        <div className="skill-marquee reveal"><span>BUILD</span><i>✦</i><span>LEARN</span><i>✦</i><span>EXPERIMENT</span><i>✦</i><span>SHIP</span><i>✦</i><span>REPEAT</span></div>
      </div>
    </section>
  );
}

export function Projects({ onPointerMove }) {
  return (
    <section id="projects" className="section container">
      <div className="section-head reveal">
        <p className="eyebrow">03 / SELECTED WORK</p>
        <h2>Projects that show<br /><span>how I think and build.</span></h2>
      </div>
      <div className="project-grid">
        <article className="project-card reveal" onPointerMove={onPointerMove}>
          <div className="project-preview ecommerce-preview">
            <div className="preview-bar"><i></i><i></i><i></i><span>storefront</span></div>
            <div className="shop-ui">
              <div className="shop-nav">SHOP <b>⌕</b></div>
              <div className="shop-hero"><small>NEW COLLECTION</small><strong>Find what<br />fits you.</strong></div>
              <div className="shop-products"><i></i><i></i><i></i></div>
            </div>
            <span className="preview-index">01</span>
          </div>
          <div className="project-content">
            <div className="project-heading"><span>ECOMMERCE</span><a href="https://github.com/Anold-softsmake/ECOMMERCE" target="_blank" rel="noopener" aria-label="Open E-Commerce GitHub">↗</a></div>
            <h3>E-Commerce Business Website</h3>
            <p>A storefront experience with product search and filters, cart, checkout, order tracking, customer profiles and an admin dashboard.</p>
            <div className="project-tags"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Node.js</span></div>
            <div className="project-links"><a href="https://github.com/Anold-softsmake/ECOMMERCE" target="_blank" rel="noopener">GitHub <b>↗</b></a></div>
          </div>
        </article>

        <article className="project-card reveal" onPointerMove={onPointerMove}>
          <div className="project-preview trading-preview">
            <div className="chart-grid"></div>
            <div className="chart-line"></div>
            <div className="chart-line chart-line-2"></div>
            <div className="chart-label">XAUUSD · M15</div>
            <div className="chart-pill">RESEARCH MODE</div>
            <span className="preview-index">02</span>
          </div>
          <div className="project-content">
            <div className="project-heading"><span>TRADING RESEARCH</span><a href="https://github.com/Anold-softsmake/TRADING" target="_blank" rel="noopener" aria-label="Open Trading GitHub">↗</a></div>
            <h3>XAU/USD Research Bot</h3>
            <p>A modular research system for testing market-structure concepts with detection, backtesting, optimization and out-of-sample validation.</p>
            <div className="project-tags"><span>Python</span><span>Market Structure</span><span>Backtesting</span><span>MT5</span></div>
            <div className="project-links"><a href="https://github.com/Anold-softsmake/TRADING" target="_blank" rel="noopener">GitHub <b>↗</b></a></div>
          </div>
        </article>

        <article className="project-card reveal" onPointerMove={onPointerMove}>
          <div className="project-preview calc-preview">
            <div className="calc-screen"><small>PROGCALC</small><strong>101101</strong><span>45</span></div>
            <div className="calc-keys"><i>BIN</i><i>OCT</i><i>DEC</i><i>HEX</i><i>8</i><i>16</i><i>32</i><i>64</i></div>
            <span className="preview-index">03</span>
          </div>
          <div className="project-content">
            <div className="project-heading"><span>PROGRAMMER TOOL</span><a href="https://github.com/Anold-softsmake/CALC" target="_blank" rel="noopener">↗</a></div>
            <h3>ProgCalc</h3>
            <p>A developer-focused calculator for binary, octal, decimal and hexadecimal conversion with configurable operand sizes.</p>
            <div className="project-tags"><span>Base Conversion</span><span>Bit Width</span><span>Developer Tool</span></div>
            <div className="project-links">
              <a href="https://github.com/Anold-softsmake/CALC" target="_blank" rel="noopener">GitHub <b>↗</b></a>
              <a href="https://converter-core.lovable.app" target="_blank" rel="noopener">Live Demo <b>↗</b></a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">04 / JOURNEY</p>
          <h2>Learning through<br /><span>real experience.</span></h2>
        </div>
        <div className="timeline">
          <div className="timeline-item reveal">
            <span className="timeline-dot"></span>
            <div className="timeline-date">CURRENT</div>
            <div><h3>Kirinyaga University</h3><p>Software Engineering · Building a strong foundation in programming, systems, software design and computing.</p></div>
          </div>
          <div className="timeline-item reveal">
            <span className="timeline-dot"></span>
            <div className="timeline-date">INDUSTRIAL ATTACHMENT</div>
            <div><h3>KIRDI · ICT Department</h3><p>Hands-on exposure to networking, server infrastructure, Windows installation and recovery, access points, hardware troubleshooting, maintenance and technical support.</p></div>
          </div>
          <div className="timeline-item reveal">
            <span className="timeline-dot"></span>
            <div className="timeline-date">EARLIER</div>
            <div><h3>Starehe Boys Centre and School</h3><p>Built discipline and teamwork through academics and scouting, including participation at national and East African level.</p></div>
          </div>
          <div className="timeline-item reveal">
            <span className="timeline-dot"></span>
            <div className="timeline-date">FOUNDATION</div>
            <div><h3>St Peter’s Elite Primary School</h3><p>Built my early academic foundation before continuing into secondary education.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="section philosophy container reveal">
      <p className="eyebrow">05 / BEYOND CODE</p>
      <div className="quote">“The goal isn't just to write code.<br /><span>It's to create something useful.</span>”</div>
      <div className="interests"><span>🏐 Volleyball</span><span>🎬 Movies</span><span>🤖 AI / ML</span><span>💡 Building</span></div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner reveal">
        <p className="eyebrow">06 / CONTACT</p>
        <h2>Have an idea?<br /><span>Let's build it.</span></h2>
        <p>I'm always interested in learning, collaborating and working on meaningful technology projects.</p>
        <a className="email" href="mailto:anoldonchangu34@gmail.com">anoldonchangu34@gmail.com <span>↗</span></a>
        <SocialLinks className="socials" />
      </div>
    </section>
  );
}
