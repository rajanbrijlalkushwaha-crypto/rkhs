import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Fades/slides children in when they scroll into view.
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Counts up from 0 when visible.
export function Counter({ value, suffix = '', duration = 1800 }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setN(Math.round(value * eased))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export function SectionTitle({ kicker, title, text, light = false, center = false }) {
  return (
    <Reveal className={`section-title ${light ? 'light' : ''} ${center ? 'center' : ''}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

export function PageHero({ title, crumb, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero-shade" />
      <div className="container page-hero-inner">
        <span className="kicker">RK Hydrotesting Service</span>
        <h1>{title}</h1>
        <div className="crumbs">
          <Link to="/">Home</Link> <span>/</span> {crumb}
        </div>
      </div>
      <div className="pipe-line" />
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-bg" style={{ backgroundImage: 'url(/images/sparks.jpg)' }} />
      <div className="container cta-inner">
        <Reveal>
          <span className="kicker">Have a line ready for test?</span>
          <h2>Get a hydrotest team on site — fast.</h2>
          <p>Send us the diameter, length and location. We'll come back with a plan and quote within 24 hours.</p>
        </Reveal>
        <Reveal delay={150} className="cta-actions">
          <Link to="/contact" className="btn btn-primary">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
