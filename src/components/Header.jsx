import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Mail, Clock, Menu, X, ArrowRight } from 'lucide-react'
import { company } from '../data/site'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>
              <Phone size={14} /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail size={14} /> {company.email}
            </a>
          </div>
          <div className="topbar-right">
            <Clock size={14} /> {company.hours}
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="container nav-inner">
          <Link to="/" className="brand" aria-label="RK Hydrotesting home">
            <img src="/rk-logo.png" alt="RK Hydrotesting logo" />
            <div className="brand-text">
              <strong>
                <span>RK</span> Hydrotesting
              </strong>
              <small>Service</small>
            </div>
          </Link>

          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-cta-mobile">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote <ArrowRight size={16} />
              </Link>
            </li>
          </ul>

          <Link to="/contact" className="btn btn-primary nav-cta">
            Get a Quote <ArrowRight size={16} />
          </Link>

          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  )
}
