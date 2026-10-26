import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Target, Wrench, FileText } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import { Reveal, Counter, SectionTitle, CtaBand } from '../components/ui'
import { stats, services, process, projects, clients, values, gallery, equipment } from '../data/site'

const valueIcons = [ShieldCheck, Target, Wrench, FileText]

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* About */}
      <section className="section about-split">
        <div className="container split">
          <Reveal className="img-stack">
            <img className="img-main" src="/images/pipeline-row-canada.jpg" alt="Pipeline construction right-of-way" />
            <img className="img-float" src="/images/field-welding.jpg" alt="Pipeline field welding" />
            <div className="exp-badge">
              <strong>36"</strong>
              <span>Largest line<br />tested</span>
            </div>
          </Reveal>
          <div>
            <SectionTitle
              kicker="Who We Are"
              title="Hydrotesting specialists for India's oil & gas pipelines"
            />
            <Reveal delay={100}>
              <p className="lead">
                RK Hydrotesting Service is a dedicated hydrotesting contractor for cross-country oil & gas pipelines,
                RLNG lines, slurry lines and city gas distribution networks.
              </p>
              <p>
                Every pipeline must be proven before it goes into service. We work alongside EPC contractors and PMCs to
                plan, execute and document each test section safely and to the correct code — and we hand over complete,
                accurate records to every party that needs them.
              </p>
              <ul className="check-list">
                <li><CheckCircle2 /> Cleaning, gauging, hydrotesting, dewatering & swabbing</li>
                <li><CheckCircle2 /> Certified gauges, relief valves & dead-weight testers</li>
                <li><CheckCircle2 /> Own fleet of pumps, compressors & DG sets</li>
                <li><CheckCircle2 /> Worked on GAIL, BPCL, IOCL & NMDC projects</li>
              </ul>
              <Link to="/about" className="btn btn-dark">
                More About Us <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((s, k) => (
            <Reveal key={s.label} delay={k * 100} className="stat">
              <strong>
                <Counter value={s.value} suffix={s.suffix} />
              </strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section bg-soft">
        <div className="container">
          <div className="title-row">
            <SectionTitle kicker="What We Do" title="End-to-end pipeline testing services" />
            <Reveal>
              <Link to="/services" className="link-arrow">
                All Services <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
          <div className="service-grid">
            {services.map((s, k) => (
              <Reveal key={s.id} delay={(k % 3) * 100}>
                <Link to={`/services#${s.id}`} className="service-card">
                  <div className="service-img" style={{ backgroundImage: `url(${s.image})` }} />
                  <div className="service-body">
                    <span className="service-num">{String(k + 1).padStart(2, '0')}</span>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="link-arrow small">
                      Learn more <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="process-bg" style={{ backgroundImage: 'url(/images/pipes-row.jpg)' }} />
        <div className="container">
          <SectionTitle
            light
            center
            kicker="How We Work"
            title="From first pig run to signed test certificate"
            text="A proven six-step method that keeps your spread moving and your client satisfied."
          />
          <div className="process-grid">
            {process.map((p, k) => (
              <Reveal key={p.step} delay={k * 90} className="process-card">
                <span className="process-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment teaser */}
      <section className="section">
        <div className="container split reverse">
          <div>
            <SectionTitle
              kicker="Our Strength"
              title="Our own equipment. Our own crew."
              text="No waiting on hired machines. Our fleet is maintained in-house and mobilised with trained operators."
            />
            <Reveal delay={100} className="equip-mini">
              {equipment.slice(0, 8).map((e, k) => (
                <div key={k}>
                  <strong>{String(e.qty).padStart(2, '0')}</strong>
                  <span>
                    {e.name}
                    <small>{e.spec}</small>
                  </span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={200}>
              <Link to="/about#equipment" className="btn btn-dark">
                Full Equipment List <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
          <Reveal className="img-tall">
            <img src="/images/welder.jpg" alt="Welder working on pipe joint" />
            <div className="img-tag">
              <span>41</span> skilled field staff
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="section bg-dark">
        <div className="container">
          <div className="title-row">
            <SectionTitle light kicker="Track Record" title="Recent pipeline projects" />
            <Reveal>
              <Link to="/projects" className="link-arrow light">
                All Projects <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
          <div className="project-grid">
            {projects.slice(0, 4).map((p, k) => (
              <Reveal key={k} delay={k * 100} className="project-card">
                <div className="project-top">
                  <span className="pill">{p.owner}</span>
                  <span className={`status ${p.status === 'Ongoing' ? 'on' : ''}`}>{p.status}</span>
                </div>
                <div className="project-size">{p.size}</div>
                <h3>{p.title}</h3>
                <div className="project-meta">
                  <span><MapPin size={14} /> {p.location}</span>
                  <span>{p.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="clients">
        <div className="container">
          <p className="clients-label">Trusted on projects for</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...clients, ...clients].map((c, k) => (
              <span key={k}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section">
        <div className="container">
          <SectionTitle center kicker="Why RK Hydrotesting" title="Why EPC contractors call us first" />
          <div className="values-grid">
            {values.map((v, k) => {
              const Icon = valueIcons[k]
              return (
                <Reveal key={v.title} delay={k * 100} className="value-card">
                  <div className="value-icon"><Icon /></div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-soft">
        <div className="container">
          <SectionTitle center kicker="On Site" title="Life on the right-of-way" />
          <div className="gallery">
            {gallery.map((g, k) => (
              <Reveal key={k} delay={(k % 4) * 80} className={`gallery-item g${k}`}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <span>{g.caption}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
