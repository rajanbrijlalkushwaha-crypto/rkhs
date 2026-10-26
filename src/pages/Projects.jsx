import { useMemo, useState } from 'react'
import { MapPin, Calendar, Building2 } from 'lucide-react'
import { PageHero, Reveal, SectionTitle, CtaBand } from '../components/ui'
import { projects } from '../data/site'

const filters = ['All', 'Completed', 'Ongoing']

export default function Projects() {
  const [f, setF] = useState('All')
  const list = useMemo(() => (f === 'All' ? projects : projects.filter((p) => p.status === f)), [f])

  return (
    <>
      <PageHero title="Our Projects" crumb="Projects" image="/images/pipes-row.jpg" />

      <section className="section">
        <div className="container">
          <SectionTitle
            center
            kicker="Track Record"
            title="Pipelines we have tested"
            text="Mainlines, spurlines, HDD crossings and city gas networks for India's leading energy companies."
          />

          <div className="filter-bar">
            {filters.map((x) => (
              <button key={x} className={f === x ? 'active' : ''} onClick={() => setF(x)}>
                {x}
                <span>{x === 'All' ? projects.length : projects.filter((p) => p.status === x).length}</span>
              </button>
            ))}
          </div>

          <div className="project-list">
            {list.map((p, k) => (
              <Reveal key={p.title + p.size} delay={(k % 3) * 80} className="project-row">
                <div className="project-row-size">
                  <strong>{p.size}</strong>
                  <span className={`status ${p.status === 'Ongoing' ? 'on' : ''}`}>{p.status}</span>
                </div>
                <div className="project-row-body">
                  <span className="pill dark">{p.owner}</span>
                  <h3>{p.title}</h3>
                  <div className="project-meta">
                    <span><Building2 size={14} /> {p.client}</span>
                    <span><MapPin size={14} /> {p.location}</span>
                    <span><Calendar size={14} /> {p.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
