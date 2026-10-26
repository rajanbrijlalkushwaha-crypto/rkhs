import { CheckCircle2, Eye, Rocket, HardHat, Users } from 'lucide-react'
import { PageHero, Reveal, SectionTitle, CtaBand, Counter } from '../components/ui'
import { workforce, equipment, stats } from '../data/site'

export default function About() {
  const totalStaff = workforce.reduce((a, w) => a + w.count, 0)
  return (
    <>
      <PageHero title="About Us" crumb="About Us" image="/images/site-crew.jpg" />

      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle kicker="Our Story" title="A hydrotesting partner built in the field" />
            <Reveal delay={100}>
              <p className="lead">
                RK Hydrotesting Service is a specialist contractor for hydrostatic testing of oil & gas cross-country
                pipelines, serving the energy, petrochemical and refinery industries.
              </p>
              <p>
                Every pipeline is subject to specific codes and inspections before it is placed into service. Our team
                works with you to make sure the testing process is executed safely and to the right standard — and that
                complete, accurate documentation is handed over to every party that needs it.
              </p>
              <p>
                Our certified technicians respond quickly with equipment and crew. Every test we run uses a hydrotest
                tree with a certified gauge and relief valve to prevent over-pressurisation.
              </p>
              <ul className="check-list">
                <li><CheckCircle2 /> Lines from 4" to 36" diameter</li>
                <li><CheckCircle2 /> Mainline, spurline, HDD and CGD sections</li>
                <li><CheckCircle2 /> Projects in Odisha, Karnataka, MP, Chhattisgarh & Rajasthan</li>
              </ul>
            </Reveal>
          </div>
          <Reveal className="img-stack">
            <img className="img-main" src="/images/pipeline-string.jpg" alt="Coated pipeline strung along right-of-way" />
            <img className="img-float" src="/images/sparks.jpg" alt="Grinding a pipe joint" />
          </Reveal>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          {stats.map((s, k) => (
            <Reveal key={s.label} delay={k * 100} className="stat">
              <strong><Counter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container mv-grid">
          <Reveal className="mv-card">
            <div className="value-icon"><Eye /></div>
            <h3>Our Vision</h3>
            <p>
              To build and maintain an organisation of highly skilled professionals who meet our customers' needs with
              honesty and integrity — and to deliver work that makes the nation proud.
            </p>
          </Reveal>
          <Reveal delay={120} className="mv-card dark">
            <div className="value-icon"><Rocket /></div>
            <h3>Our Mission</h3>
            <p>
              To consistently exceed the standards of quality and service our customers demand, with expert solutions
              that meet specification — on time, every time.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <SectionTitle center kicker="Workforce" title={`${totalStaff} trained hands on every spread`} />
          <div className="team-grid">
            {workforce.map((w, k) => (
              <Reveal key={w.role} delay={k * 70} className="team-card">
                {k < 3 ? <HardHat /> : <Users />}
                <strong>{String(w.count).padStart(2, '0')}</strong>
                <span>{w.role}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark" id="equipment">
        <div className="container">
          <SectionTitle light kicker="Machinery" title="Equipment fleet" text="Owned, maintained and calibrated in-house." />
          <Reveal className="equip-table-wrap">
            <table className="equip-table">
              <thead>
                <tr><th>Equipment</th><th>Capacity</th><th>Qty</th></tr>
              </thead>
              <tbody>
                {equipment.map((e, k) => (
                  <tr key={k}>
                    <td>{e.name}</td>
                    <td>{e.spec}</td>
                    <td><span className="qty">{String(e.qty).padStart(2, '0')}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
