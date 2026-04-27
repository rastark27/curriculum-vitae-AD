import { useEffect, useMemo, useState } from 'react'
import cvData from './data/cv.json'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Section from './components/Section'
import Timeline from './components/Timeline'
import SkillList from './components/SkillList'
import CourseList from './components/CourseList'
import Nav from './components/Nav'
import './App.css'

const SECTIONS = [
  { id: 'perfil', label: 'Perfil', icon: 'fa-user' },
  { id: 'experiencia', label: 'Experiencia', icon: 'fa-briefcase' },
  { id: 'formacion', label: 'Formación', icon: 'fa-graduation-cap' },
  { id: 'cursos', label: 'Cursos', icon: 'fa-certificate' },
  { id: 'habilidades', label: 'Habilidades', icon: 'fa-stethoscope' },
  { id: 'logros', label: 'Logros', icon: 'fa-award' }
]

function App() {
  const [active, setActive] = useState('perfil')
  const initials = useMemo(() => 'AD', [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (entry.intersectionRatio > 0.4) setActive(entry.target.id)
          }
        })
      },
      { threshold: [0.15, 0.45] }
    )
    document.querySelectorAll('.cv-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="cv-app">
      <Nav sections={SECTIONS} active={active} onSelect={setActive} />

      <main className="cv-main">
        <Hero personal={cvData.personal} initials={initials} />

        <div className="cv-grid">
          <Sidebar
            personal={cvData.personal}
            personalSkills={cvData.personalSkills}
            languages={cvData.languages}
            computerSkills={cvData.computerSkills}
          />

          <div className="cv-content">
            <Section id="perfil" icon="fa-user-doctor" title="Perfil profesional">
              <p className="cv-profile-text">{cvData.profile}</p>
            </Section>

            <Section id="experiencia" icon="fa-briefcase" title="Experiencia laboral">
              <Timeline items={cvData.experience} />
            </Section>

            <Section id="formacion" icon="fa-graduation-cap" title="Historial académico">
              <div className="cv-edu">
                {cvData.education.map((e, i) => (
                  <div key={i} className="cv-edu-item">
                    <div className="cv-edu-mark">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                      <h3>{e.degree}</h3>
                      <p className="cv-edu-inst">{e.institution}</p>
                      <span className="cv-chip">{e.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="cursos" icon="fa-certificate" title="Cursos y capacitaciones">
              <CourseList items={cvData.courses} />
            </Section>

            <Section id="habilidades" icon="fa-stethoscope" title="Habilidades técnicas">
              <SkillList items={cvData.technicalSkills} />
            </Section>

            <Section id="logros" icon="fa-award" title="Logros destacados">
              <ul className="cv-achievements">
                {cvData.achievements.map((a, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-check"></i>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>

        <footer className="cv-footer">
          <p>
          </p>
          <button className="cv-print" onClick={() => window.print()}>
            <i className="fa-solid fa-print"></i> Imprimir / Guardar PDF
          </button>
        </footer>
      </main>
    </div>
  )
}

export default App
