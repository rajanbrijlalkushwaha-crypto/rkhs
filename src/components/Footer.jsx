import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react'
import { company, services, photoCredits } from '../data/site'

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="pipe-line" />
        <div className="container footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <img src="/rk-logo.png" alt="RK Hydrotesting logo" />
            </div>
            <p>
              Hydrotesting, cleaning, gauging, dewatering and swabbing for cross-country oil & gas pipelines and
              city gas networks across India.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <Phone size={16} />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
            <details className="credits">
              <summary>Photo credits</summary>
              <ul>
                {photoCredits.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </footer>

      <a className="float-whatsapp" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={26} />
      </a>
      <button className="float-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        <ArrowUp size={20} />
      </button>
    </>
  )
}
