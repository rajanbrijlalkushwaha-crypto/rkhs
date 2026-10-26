import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { PageHero, Reveal, SectionTitle } from '../components/ui'
import { company, services } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No server yet: opens the visitor's email app with the enquiry filled in.
  const submit = (e) => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Hydrotesting enquiry — ' + (form.company || form.name))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const cards = [
    { icon: Phone, title: 'Call Us', lines: [company.phone, company.phoneAlt], href: `tel:${company.phone.replace(/\s/g, '')}` },
    { icon: Mail, title: 'Email', lines: [company.email], href: `mailto:${company.email}` },
    { icon: MapPin, title: 'Location', lines: [company.address, 'Pan-India mobilisation'] },
    { icon: Clock, title: 'Working Hours', lines: [company.hours, 'Site support 24×7'] },
  ]

  return (
    <>
      <PageHero title="Contact Us" crumb="Contact" image="/images/plant-pipes.jpg" />

      <section className="section">
        <div className="container">
          <div className="contact-cards">
            {cards.map((c, k) => (
              <Reveal key={c.title} delay={k * 80} className="contact-card">
                <div className="value-icon"><c.icon /></div>
                <h3>{c.title}</h3>
                {c.lines.map((l) =>
                  c.href ? <a key={l} href={c.href}>{l}</a> : <p key={l}>{l}</p>
                )}
              </Reveal>
            ))}
          </div>

          <div className="contact-split">
            <Reveal className="contact-img" >
              <img src="/images/site-crew.jpg" alt="Site team" />
              <div className="contact-img-text">
                <h3>Tell us about your line</h3>
                <p>Diameter, length, test pressure and location — we'll reply with a plan and quote within 24 hours.</p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionTitle kicker="Request a Quote" title="Send us your enquiry" />
              {sent ? (
                <div className="form-sent">
                  <CheckCircle2 size={40} />
                  <h3>Thank you, {form.name || 'there'}!</h3>
                  <p>Your email app should have opened with the enquiry. If it didn't, write to us at <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
                  <button className="btn btn-dark" onClick={() => setSent(false)}>Send another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submit}>
                  <div className="row">
                    <label>Your name *<input required value={form.name} onChange={set('name')} /></label>
                    <label>Company<input value={form.company} onChange={set('company')} /></label>
                  </div>
                  <div className="row">
                    <label>Phone *<input required type="tel" value={form.phone} onChange={set('phone')} /></label>
                    <label>Email<input type="email" value={form.email} onChange={set('email')} /></label>
                  </div>
                  <label>Service required
                    <select value={form.service} onChange={set('service')}>
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s.id}>{s.title}</option>)}
                    </select>
                  </label>
                  <label>Project details *
                    <textarea required rows={5} placeholder='e.g. 12" × 25 km gas pipeline, Odisha, test pressure 120 bar' value={form.message} onChange={set('message')} />
                  </label>
                  <button type="submit" className="btn btn-primary">
                    Send Enquiry <Send size={18} />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
