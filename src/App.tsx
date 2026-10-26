import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Check,
  Code2, Github, Linkedin, Mail, Menu, Smartphone, Sparkles, X,
  Zap, Database, Layers3, Terminal, Workflow, Globe, ExternalLink
} from 'lucide-react'

const skills = [
  { icon: Smartphone, title: 'Mobile engineering', desc: 'Cross-platform apps built for speed, polish, and reliability.', tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'React Navigation'] },
  { icon: BrainCircuit, title: 'Generative AI', desc: 'Useful AI experiences grounded in real product workflows.', tags: ['LLM integration', 'RAG', 'Prompt engineering', 'Whisper', 'TTS'] },
  { icon: Workflow, title: 'Backend systems', desc: 'Clean APIs and services that connect product experiences end to end.', tags: ['Python', 'FastAPI', 'Node.js', 'Express.js'] },
  { icon: Database, title: 'Data & platform', desc: 'Practical data layers, observability, and delivery tooling.', tags: ['PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'CI/CD'] },
]

const projects = [
  {
    n: '01', type: 'AI PRODUCT', title: 'AI Meeting Notes',
    desc: 'A voice-first notes workflow that turns recordings into searchable transcripts, concise summaries, key points, and action items.',
    stack: ['React Native', 'FastAPI', 'Whisper', 'GPT-4o', 'PostgreSQL'],
    icon: BrainCircuit, tone: 'violet', link: 'https://github.com/lalitgaikwad274'
  },
  {
    n: '02', type: 'MOBILE · TELECOM', title: 'Vodafone Idea (Vi)',
    desc: 'Contributed to prepaid and postpaid user journeys, API-driven experiences, offer discovery, and performance improvements in a large-scale mobile app.',
    stack: ['React Native', 'Redux Toolkit', 'REST APIs', 'Kibana'],
    icon: Smartphone, tone: 'lime', link: 'https://www.myvi.in/'
  },
  {
    n: '03', type: 'AI · RAG', title: 'Intelligent Recharge Assistant',
    desc: 'A conversational assistant concept for understanding recharge intent, retrieving relevant plans, and connecting answers to live telecom APIs.',
    stack: ['Python', 'FastAPI', 'RAG', 'Azure AI Search', 'LLMs'],
    icon: Sparkles, tone: 'blue', link: 'https://github.com/lalitgaikwad274'
  },
]

const experience = [
  { date: 'NOW', title: 'Mobile + AI Engineering', company: 'Independent projects & continuous learning', text: 'Building at the intersection of mobile product development, backend APIs, and Generative AI.' },
  { date: 'PRODUCTION', title: 'React Native Developer', company: 'Vodafone Idea (Vi) app', text: 'Worked across mobile journeys, offer experiences, API integrations, and app performance optimization.' },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'lalitgaikwad274@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">LG</span><span>Lalit Gaikwad<span className="brand-dot">.</span></span></a>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#work" onClick={closeMenu}>Work</a><a href="#skills" onClick={closeMenu}>Expertise</a><a href="#experience" onClick={closeMenu}>Journey</a><a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="https://github.com/lalitgaikwad274" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
            <div className="availability"><span className="pulse" /> OPEN TO OPPORTUNITIES <span className="availability-line" /> PUNE, INDIA</div>
            <h1>Building mobile<br/>experiences. <span className="gradient-text">Making AI</span><br/><span className="gradient-text">useful.</span></h1>
            <p className="hero-lead">I'm Lalit — a React Native developer expanding into AI engineering. I build fast, reliable apps and connect them to intelligent experiences that solve real problems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
              <a className="button button-ghost" href={`mailto:${email}`}>Let's talk <ArrowUpRight size={17}/></a>
            </div>
            <div className="social-row">
              <a href="https://github.com/lalitgaikwad274" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <button onClick={copyEmail}><Mail size={17}/>{copied ? 'Email copied' : 'Email'} {copied && <Check size={14}/>}</button>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="visual-grid" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="core-card">
              <div className="core-top"><span className="live-dot"/> DEV MODE <span className="mono">v.2026</span></div>
              <div className="code-window">
                <div className="window-controls"><i/><i/><i/><span>assistant.ts</span></div>
                <pre><code><span className="code-purple">const</span> <span className="code-blue">builder</span> = {'{'}{'\n'}  focus: <span className="code-green">'mobile'</span>,{'\n'}  curiosity: <span className="code-green">'AI'</span>,{'\n'}  mindset: <span className="code-green">'ship it'</span>{'\n'}{'}'};{'\n\n'}<span className="code-purple">await</span> builder.<span className="code-blue">create</span>();<span className="cursor">▍</span></code></pre>
              </div>
              <div className="visual-footer"><span><Zap size={15}/> Performance-minded</span><span><Sparkles size={15}/> AI curious</span></div>
            </div>
            <div className="float-chip chip-top"><span className="chip-icon chip-lime"><Code2 size={16}/></span><span><b>React Native</b><small>Mobile experiences</small></span></div>
            <div className="float-chip chip-bottom"><span className="chip-icon chip-violet"><BrainCircuit size={16}/></span><span><b>Generative AI</b><small>Intelligent workflows</small></span></div>
            <div className="visual-caption">CRAFTED WITH INTENT <span>✳</span></div>
          </motion.div>
          <a className="scroll-cue" href="#intro"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
        </section>

        <section id="intro" className="intro-section section container">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }} className="section-kicker"><span>01 / A LITTLE ABOUT ME</span><span className="kicker-rule"/></motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} className="intro-grid">
            <h2>From mobile interfaces<br/>to <span className="muted-heading">intelligent products.</span></h2>
            <div className="intro-text"><p>I enjoy taking a product idea from a thoughtful interface to the APIs and systems behind it. My foundation is cross-platform mobile development; my current focus is bringing AI, voice, and retrieval into useful product experiences.</p><p>I care about the details users feel: responsive interactions, dependable integrations, clear architecture, and performance that holds up in production.</p></div>
          </motion.div>
          <div className="stats-grid">
            <div className="stat"><strong>4<span>+</span></strong><small>Years in software development*</small></div>
            <div className="stat"><strong>30<span>%</span></strong><small>Recharge page performance improvement*</small></div>
            <div className="stat"><strong>AI<span>+</span></strong><small>Mobile-first product mindset</small></div>
            <div className="stat"><strong>∞</strong><small>Curiosity for what's next</small></div>
          </div>
          <p className="fine-print">*Update these metrics to match the exact experience and impact you want to publicly claim.</p>
        </section>

        <section id="work" className="section work-section">
          <div className="container">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-heading">
              <div><div className="section-kicker"><span>02 / SELECTED WORK</span><span className="kicker-rule"/></div><h2>Ideas turned into <span className="gradient-text">impact.</span></h2></div>
              <p>A selection of mobile and AI-focused work, product thinking, and experiments.</p>
            </motion.div>
            <div className="project-list">
              {projects.map((project, i) => {
                const Icon = project.icon
                return <motion.article key={project.n} className={`project-card ${project.tone}`} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} transition={{ delay: i * .08 }}>
                  <div className="project-art"><div className="art-glow"/><div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-icon"><Icon size={35}/></div><span className="art-index">{project.n}</span><span className="art-label">{project.type}</span></div>
                  <div className="project-content"><div className="project-meta"><span>{project.type}</span><span className="project-status"><i/> FEATURED</span></div><h3>{project.title}</h3><p>{project.desc}</p><div className="tag-row">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">Explore project <ArrowUpRight size={16}/></a></div>
                </motion.article>
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-heading">
            <div><div className="section-kicker"><span>03 / EXPERTISE</span><span className="kicker-rule"/></div><h2>My toolkit for <span className="muted-heading">building well.</span></h2></div>
            <p>The right tool for the problem — with a focus on maintainability, user experience, and measurable outcomes.</p>
          </motion.div>
          <div className="skills-grid">
            {skills.map((skill, i) => { const Icon = skill.icon; return <motion.article key={skill.title} className="skill-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} transition={{ delay: i * .07 }}><div className="skill-icon"><Icon size={21}/></div><h3>{skill.title}</h3><p>{skill.desc}</p><div className="tag-row">{skill.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></motion.article> })}
          </div>
          <div className="architecture-strip"><div className="architecture-icon"><Layers3 size={20}/></div><div><b>Deep mobile engineering</b><p>Fabric · TurboModules · JSI · Hermes · Native modules · Performance profiling</p></div><ArrowUpRight className="strip-arrow" size={19}/></div>
        </section>

        <section id="experience" className="section journey-section">
          <div className="container">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="section-heading">
              <div><div className="section-kicker"><span>04 / THE JOURNEY</span><span className="kicker-rule"/></div><h2>Built on curiosity.<br/><span className="muted-heading">Driven by craft.</span></h2></div>
              <p>Growing from shipping mobile features to designing complete, AI-enabled experiences.</p>
            </motion.div>
            <div className="timeline">{experience.map((item, i) => <motion.div key={item.title} className="timeline-item" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * .1 }}><div className="timeline-date">{item.date}</div><div className="timeline-marker"><span/></div><div className="timeline-content"><h3>{item.title}</h3><div className="timeline-company">{item.company}</div><p>{item.text}</p></div></motion.div>)}</div>
            <div className="learning-note"><Terminal size={18}/><span>Currently exploring:</span><b>RAG systems, agentic workflows, FastAPI architecture, and production AI patterns.</b></div>
          </div>
        </section>

        <section id="contact" className="contact-section section container">
          <motion.div className="contact-card" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="contact-orb orb-one"/><div className="contact-orb orb-two"/>
            <div className="contact-inner"><div className="section-kicker"><span>05 / YOUR TURN</span><span className="kicker-rule"/></div><h2>Have a good problem?<br/><span className="gradient-text">Let's build the answer.</span></h2><p>I'm open to opportunities where mobile engineering, product thinking, and AI come together.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${email}`}>Start a conversation <ArrowUpRight size={17}/></a><a className="button button-ghost" href="https://github.com/lalitgaikwad274" target="_blank" rel="noreferrer">View GitHub <Github size={16}/></a></div></div>
            <div className="contact-decoration"><div className="deco-square"><Globe size={38}/></div><span>IDEAS → REALITY</span></div>
          </motion.div>
        </section>
      </main>

      <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">LG</span><span>Lalit Gaikwad<span className="brand-dot">.</span></span></a><span>Designed with intent. Built with React.</span><div className="footer-links"><a href="https://github.com/lalitgaikwad274" aria-label="GitHub"><Github size={17}/></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={17}/></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={17}/></a></div><span className="copyright">© {new Date().getFullYear()} Lalit Gaikwad</span></footer>
    </div>
  )
}

export default App
