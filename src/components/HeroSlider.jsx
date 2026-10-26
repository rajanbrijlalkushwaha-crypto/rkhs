import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Gauge, FileCheck2 } from 'lucide-react'
import { heroSlides } from '../data/site'

export default function HeroSlider() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = heroSlides.length

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setI((i + 1) % n), 6500)
    return () => clearTimeout(t)
  }, [i, paused, n])

  return (
    <section className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {heroSlides.map((s, k) => (
        <div key={k} className={`hero-slide ${k === i ? 'active' : ''}`} aria-hidden={k !== i}>
          <div className="hero-img" style={{ backgroundImage: `url(${s.image})` }} />
          <div className="hero-shade" />
          <div className="container hero-content">
            <span className="hero-kicker">{s.kicker}</span>
            <h1>
              {s.title}
              <br />
              <em>{s.accent}</em>
            </h1>
            <p>{s.text}</p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                Our Services <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn btn-ghost">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-controls container">
        <div className="hero-dots">
          {heroSlides.map((_, k) => (
            <button key={k} className={k === i ? 'active' : ''} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`}>
              <span>{String(k + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
        <div className="hero-arrows">
          <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous slide">
            <ChevronLeft />
          </button>
          <button onClick={() => setI((i + 1) % n)} aria-label="Next slide">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="hero-strip">
        <div className="container hero-strip-inner">
          <div><ShieldCheck /> <span><strong>Zero-compromise safety</strong>Relief valve on every test head</span></div>
          <div><Gauge /> <span><strong>Up to 450 bar</strong>In-house pressurisation pumps</span></div>
          <div><FileCheck2 /> <span><strong>Full test documentation</strong>Client & PMC formats</span></div>
        </div>
      </div>
    </section>
  )
}
