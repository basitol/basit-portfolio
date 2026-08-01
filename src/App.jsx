import { useEffect, useRef, useState } from 'react';

const CHIP_CLASS = { violet: 'chip-v', amber: 'chip-a', teal: 'chip-t', rose: 'chip-r' };
const EMAIL = 'qabdulbasit18@gmail.com';

const skills = [
  {
    icon: '⚡',
    title: 'Frontend',
    tone: 'violet',
    chips: ['React.js', 'TypeScript', 'Vue.js', 'React Native', 'ShadCN UI', 'Redux'],
  },
  {
    icon: '🔩',
    title: 'Backend',
    tone: 'amber',
    chips: ['Node.js', 'Express.js', 'Django', 'Flask', 'GraphQL', 'Laravel'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    tone: 'teal',
    chips: ['AWS EC2', 'S3', 'Lambda', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    icon: '🗄️',
    title: 'Data & Storage',
    tone: 'rose',
    chips: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL', 'Firebase', 'WebSocket'],
  },
];

const projects = [
  {
    label: 'Fintech',
    emoji: '💳',
    title: 'Figo Africa — Fintech MVP',
    description:
      'Led the MVP build for a fintech platform with payment APIs, merchant management, RBAC, real-time payment notifications, and React dashboards.',
    stack: ['React', 'Node.js', 'WebSocket'],
    tone: 'violet',
    demoHref: '#contact',
    codeHref: 'mailto:qabdulbasit18@gmail.com',
  },
  {
    label: 'Delivery',
    emoji: '🚚',
    title: 'Sameday Custom — Delivery Platform',
    description:
      'Built a same-day delivery MVP with responsive frontend, live tracking, Redis-backed real-time updates, Stripe, PayPal, and dynamic delivery pricing.',
    stack: ['React', 'Vue.js', 'Redis'],
    tone: 'amber',
    demoHref: '#contact',
    codeHref: 'mailto:qabdulbasit18@gmail.com',
  },
  {
    label: 'eCommerce',
    emoji: '🛒',
    title: 'Wicartit — Multi-Vendor Commerce',
    description:
      'Built a multi-vendor eCommerce platform with vendor inventory tools, real-time stock sync, RBAC admin dashboards, Paystack, and Flutterwave.',
    stack: ['React', 'TypeScript', 'Express'],
    tone: 'teal',
    demoHref: '#contact',
    codeHref: 'mailto:qabdulbasit18@gmail.com',
  },
  {
    label: 'Systems',
    emoji: '⚙️',
    title: 'Real-Time Product Systems',
    description:
      'Designed scalable APIs, authentication flows, dashboards, and real-time features across fintech, delivery, and commerce products.',
    stack: ['REST APIs', 'Auth', 'AWS'],
    tone: 'rose',
    demoHref: '#contact',
    codeHref: 'mailto:qabdulbasit18@gmail.com',
  },
];

const approach = [
  {
    step: '01',
    title: 'Understand the product',
    description:
      'I map the user flow, business goal, current stack, and highest-risk technical decisions before writing code.',
  },
  {
    step: '02',
    title: 'Design the system',
    description:
      'I shape the interface, API boundaries, data model, and delivery plan so the build has a clear direction.',
  },
  {
    step: '03',
    title: 'Ship in cycles',
    description:
      'I build in visible iterations, keep feedback tight, and move from working prototype to production-quality release.',
  },
  {
    step: '04',
    title: 'Improve what matters',
    description:
      'After launch, I refine performance, accessibility, backend reliability, and the details users actually feel.',
  },
];

const embeddedRoles = [
  'Frontend Engineer',
  'Backend Engineer',
  'API Architect',
  'Product Thinker',
  'UI Polisher',
  'Automation Builder',
];

const outcomes = [
  { value: '3+', label: 'Years experience' },
  { value: '40%', label: 'API response gain' },
  { value: '90%', label: 'Overselling reduced' },
  { value: '20%', label: 'Checkout lift' },
];

const experience = [
  {
    date: "Mar '22 — Present",
    title: 'Full Stack Developer',
    company: 'Figo Africa · Lagos, Nigeria · Remote',
    description:
      'Led development of a fintech MVP from ideation to launch, designed payment, authentication, and merchant APIs, improved response times by 40%, and built real-time payment notifications with WebSockets.',
  },
  {
    date: "Mar '21 — Oct '22",
    title: 'Full-Stack Developer',
    company: 'Sameday Custom · Pennsylvania, United States · Remote',
    description:
      'Built a same-day delivery platform MVP, implemented live delivery tracking with WebSockets and Redis, integrated Stripe and PayPal, and improved completed orders by 20%.',
  },
  {
    date: "Sep '20 — Jun '21",
    title: 'Full Stack Developer',
    company: 'Wicartit · Lagos, Nigeria · Remote',
    description:
      'Built a multi-vendor eCommerce platform with React, TypeScript, Node.js, and Express.js, including real-time stock sync, role-based vendor dashboards, Paystack, and Flutterwave integrations.',
  },
];

const socials = [
  { icon: '💼', tone: 'si-v', platform: 'LinkedIn', handle: 'Available on request', href: '#contact' },
  { icon: '✉️', tone: 'si-a', platform: 'Email', handle: EMAIL, href: `mailto:${EMAIL}` },
  { icon: '📍', tone: 'si-t', platform: 'Location', handle: 'Nigeria · Open to remote', href: '#contact' },
  { icon: '📞', tone: 'si-r', platform: 'Phone', handle: '09131171967', href: 'tel:+2349131171967' },
];

function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const typedRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const [formStatus, setFormStatus] = useState('Ready to send');

  useEffect(() => {
    const cur = cursorRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return undefined;

    const onMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      cur.style.left = `${e.clientX}px`;
      cur.style.top = `${e.clientY}px`;
    };

    let frameId;
    const animRing = () => {
      const { x, y, rx, ry } = mouseRef.current;
      mouseRef.current.rx = rx + (x - rx) * 0.12;
      mouseRef.current.ry = ry + (y - ry) * 0.12;
      ring.style.left = `${mouseRef.current.rx}px`;
      ring.style.top = `${mouseRef.current.ry}px`;
      frameId = requestAnimationFrame(animRing);
    };

    document.addEventListener('mousemove', onMove);
    frameId = requestAnimationFrame(animRing);

    const interactiveEls = document.querySelectorAll('a, button, input, textarea');
    const onEnter = () => ring.classList.add('is-hovering');
    const onLeave = () => ring.classList.remove('is-hovering');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frameId);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const phrases = ['React.js / TypeScript', 'Node.js / Express', 'PostgreSQL / Redis', 'AWS / Docker'];
    const el = typedRef.current;
    if (!el) return undefined;

    let pi = 0;
    let ci = 0;
    let deleting = false;
    const timeouts = [];

    const schedule = (fn, ms) => {
      const id = setTimeout(fn, ms);
      timeouts.push(id);
    };

    const type = () => {
      const word = phrases[pi];
      if (!deleting) {
        ci += 1;
        el.textContent = word.slice(0, ci);
        if (ci === word.length) {
          deleting = true;
          schedule(type, 1800);
          return;
        }
      } else {
        ci -= 1;
        el.textContent = word.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      schedule(type, deleting ? 55 : 90);
    };

    schedule(type, 1400);
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    revealEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const animCount = (el) => {
      const target = +el.dataset.target;
      const dur = 1400;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - (1 - p) ** 3;
        el.textContent = Math.round(ease * target);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.count-up').forEach(animCount);
            countObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    document.querySelectorAll('.about-facts,.hero-metrics').forEach((el) => countObs.observe(el));
    return () => countObs.disconnect();
  }, []);

  useEffect(() => {
    const orb1 = document.querySelector('.orb1');
    const orb2 = document.querySelector('.orb2');
    const orb3 = document.querySelector('.orb3');
    const onScroll = () => {
      const sy = window.scrollY;
      if (orb1) orb1.style.transform = `translateY(${sy * 0.12}px)`;
      if (orb2) orb2.style.transform = `translateY(${sy * 0.07}px)`;
      if (orb3) orb3.style.transform = `translateY(${sy * 0.09}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    const handlers = [];

    cards.forEach((card) => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
        card.style.transform = `translateY(-6px) rotateX(${y}deg) rotateY(${x}deg)`;
        card.style.transformStyle = 'preserve-3d';
      };
      const onLeave = () => {
        card.style.transform = '';
        card.style.transformStyle = '';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      handlers.push({ card, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      setFormStatus('Please fill out every field.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    setFormStatus('Opening your email app...');
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      <nav id="navbar">
        <a href="#hero" className="nav-logo">
          Quadri<span>;</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#approach">Approach</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Hire Me →</a>
      </nav>

      <section id="hero">
        <div className="hero-bg-orb orb1" />
        <div className="hero-bg-orb orb2" />
        <div className="hero-bg-orb orb3" />
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to opportunities
          </div>
          <h1 className="hero-name">
            <span className="first">Abdulbasit</span>
            <span className="last">Quadri</span>
          </h1>
          <div className="hero-title-row">
            <span className="hero-title">Full-Stack Developer</span>
            <div className="hero-title-divider" />
            <span className="typing-wrap">
              <span id="typed-text" ref={typedRef} />
            </span>
          </div>
          <p className="hero-desc">
            Full-stack engineer with over three years of experience building and scaling web applications across fintech, delivery systems, eCommerce, and ticketing systems.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work ↓</a>
            <a href="#contact" className="btn btn-ghost">Let&apos;s Connect</a>
          </div>
        </div>
        <div className="hero-system reveal-scale" aria-hidden="true">
          <div className="system-topline">
            <span>Product system</span>
            <span>Live build</span>
          </div>
          <div className="system-map">
            <span className="system-node n1">UI</span>
            <span className="system-node n2">API</span>
            <span className="system-node n3">DB</span>
            <span className="system-node n4">Auth</span>
            <span className="system-node n5">Cloud</span>
          </div>
          <div className="system-bars">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="hero-metrics">
          <div className="metric">
            <div className="metric-num">
              <span className="count-up" data-target="3">0</span>+
            </div>
            <div className="metric-label">Years Exp</div>
          </div>
          <div className="metric">
            <div className="metric-num">
              <span className="count-up" data-target="40">0</span>%
            </div>
            <div className="metric-label">API Gain</div>
          </div>
          <div className="metric">
            <div className="metric-num">
              <span className="count-up" data-target="20">0</span>%
            </div>
            <div className="metric-label">Checkout Lift</div>
          </div>
        </div>
        <div className="hero-scroll">
          <span className="scroll-label">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      <div className="role-strip" aria-label="Capabilities">
        <div className="role-track">
          {[...embeddedRoles, ...embeddedRoles].map((role, index) => (
            <span key={`${role}-${index}`}>{role}</span>
          ))}
        </div>
      </div>

      <section id="about">
        <div className="about-grid">
          <div className="about-visual reveal-left">
            <div className="about-card">
              <div className="about-card-glow" />
              <div className="about-initials">QA</div>
              <div className="about-tag">🇳🇬 Lagos, Nigeria</div>
              <div className="about-corner corner-tl" />
              <div className="about-corner corner-br" />
            </div>
          </div>
          <div className="about-text">
            <div className="sec-eyebrow reveal">About me</div>
            <h2 className="sec-title reveal delay-1">
              Building things that <em>matter</em> on the web.
            </h2>
            <p className="lead reveal delay-2">
              Hey, I&apos;m Abdulbasit Quadri, a full-stack developer focused on MVPs, scalable APIs, real-time product features, and clean user experiences.
            </p>
            <p className="reveal delay-3">
              I&apos;ve worked across fintech, same-day delivery, and multi-vendor eCommerce products, building both the frontend interfaces and the backend systems that power them.
            </p>
            <p className="reveal delay-4">
              My stack includes React.js, TypeScript, Node.js, PostgreSQL, Redis, WebSockets, Docker, AWS, and CI/CD pipelines.
            </p>
            <div className="about-facts reveal delay-5">
              <div className="fact">
                <div className="fact-num">
                  <span className="count-up" data-target="3">0</span>+ yrs
                </div>
                <div className="fact-label">Experience</div>
              </div>
              <div className="fact">
                <div className="fact-num">
                  <span className="count-up" data-target="40">0</span>%
                </div>
                <div className="fact-label">Faster APIs</div>
              </div>
              <div className="fact">
                <div className="fact-num">
                  <span className="count-up" data-target="90">0</span>%
                </div>
                <div className="fact-label">Less overselling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach">
        <div className="approach-header">
          <div>
            <div className="sec-eyebrow reveal">How I work</div>
            <h2 className="sec-title reveal delay-1">
              Close to the product,<br /><em>serious about shipping.</em>
            </h2>
          </div>
          <p className="reveal delay-2">
            Inspired by the best studio sites: the work should feel strategic before it feels decorative. Every sprint needs a clear reason to exist.
          </p>
        </div>
        <div className="approach-grid">
          {approach.map((item, index) => (
            <article key={item.title} className={`approach-card reveal delay-${index + 1}`}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="skills-layout">
          <div>
            <div className="sec-eyebrow reveal">Tech Stack</div>
            <h2 className="sec-title reveal delay-1">
              Skills &<br /><em>expertise</em>
            </h2>
            <div className="skills-intro reveal delay-2">
              <p>
                Across frontend, backend, databases, deployment, and testing, with strong practical experience in real-time systems and product MVPs.
              </p>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={skill.title} className={`skill-card reveal delay-${i + 1}`}>
                <div className={`skill-icon-wrap ${skill.tone}`}>{skill.icon}</div>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.chips.map((chip) => (
                    <span key={chip} className={`chip ${CHIP_CLASS[skill.tone]}`}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="projects-header">
          <div>
            <div className="sec-eyebrow reveal">Selected Work</div>
            <h2 className="sec-title reveal delay-1">
              Featured <em>Projects</em>
            </h2>
          </div>
          <a
            href="#contact"
            className="projects-all reveal delay-2"
          >
            Request case studies →
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className={`project-card reveal delay-${index + 1}`}>
              <div className={`project-thumb pt-${project.tone}`}>
                <div className="project-thumb-grid" />
                <span className="project-emoji">{project.emoji}</span>
                <span className={`project-label lbl-${project.tone}`}>{project.label}</span>
              </div>
              <div className="project-body">
                <div className="project-num">{String(index + 1).padStart(2, '0')}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item} className="stack-dot">{item}</span>
                    ))}
                  </div>
                  <div className="project-links-row">
                    <a href={project.demoHref} className="plink" title="Discuss project">↗</a>
                    <a
                      href={project.codeHref}
                      className="plink"
                      title="Email about this project"
                    >
                      ✉
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="outcome-grid reveal">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="outcome-item">
              <strong>{outcome.value}</strong>
              <span>{outcome.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="experience">
        <div className="sec-eyebrow reveal">Work History</div>
        <h2 className="sec-title reveal delay-1">Experience</h2>
        <div className="timeline">
          {experience.map((item, i) => (
            <div key={`${item.company}-${item.date}`} className={`timeline-item reveal delay-${i + 1}`}>
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <h3>{item.title}</h3>
              <div className="timeline-company">{item.company}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="contact-layout">
          <div>
            <div className="sec-eyebrow reveal">Get in touch</div>
            <h2 className="sec-title reveal delay-1">
              Let&apos;s build<br /><em>something great.</em>
            </h2>
            <p className="reveal delay-2">
              Whether it&apos;s a new project, a full-time role, or just a technical conversation — I&apos;d love to hear from you. I respond within 24 hours.
            </p>
            <div className="contact-email reveal delay-3">
              📬 <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="socials">
              {socials.map((social, i) => (
                <a
                  key={social.platform}
                  href={social.href}
                  className={`social-link reveal delay-${i + 2}`}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <div className={`social-icon ${social.tone}`}>{social.icon}</div>
                  <div className="social-info">
                    <span className="social-platform">{social.platform}</span>
                    <span className="social-handle">{social.handle}</span>
                  </div>
                  <span className="social-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-side reveal delay-2">
            <form className="form-card" onSubmit={handleContactSubmit}>
              <h3>Send a message</h3>
              <p className="form-sub">{formStatus}</p>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className="form-btn">Send Message →</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-left">
          © 2026 <span>Abdulbasit Quadri</span> — Full Stack Developer
        </div>
        <div className="footer-right">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}

export default App;
