import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { PageHero, Reveal, SectionTitle, CtaBand } from '../components/ui'
import { services, process } from '../data/site'

export default function Services() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }, [hash])

  return (
    <>
      <PageHero title="Our Services" crumb="Services" image="/images/pipeline-row-canada.jpg" />

      <section className="section">
        <div className="container">
          <SectionTitle
            center
            kicker="Capabilities"
            title="Everything needed to prove a pipeline"
            text="We supply the engineers, technicians, riggers and machines — and produce every document your client asks for."
          />
          <div className="service-rows">
            {services.map((s, k) => (
              <div key={s.id} id={s.id} className={`service-row ${k % 2 ? 'reverse' : ''}`}>
                <Reveal className="service-row-img">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <span className="service-row-num">{String(k + 1).padStart(2, '0')}</span>
                </Reveal>
                <Reveal delay={120} className="service-row-body">
                  <span className="kicker">Service {String(k + 1).padStart(2, '0')}</span>
                  <h2>{s.title}</h2>
                  <p className="lead">{s.short}</p>
                  <ul className="check-list">
                    {s.points.map((p) => (
                      <li key={p}><CheckCircle2 /> {p}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-dark">
                    Enquire Now <ArrowRight size={18} />
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="process-bg" style={{ backgroundImage: 'url(/images/refinery.jpg)' }} />
        <div className="container">
          <SectionTitle light center kicker="Method" title="Our hydrotest sequence" />
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

      <CtaBand />
    </>
  )
}
