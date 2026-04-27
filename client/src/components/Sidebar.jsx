import LanguageBars from './LanguageBars'

function Sidebar({ personal, personalSkills, languages, computerSkills }) {
  return (
    <aside className="cv-sidebar">
      <div className="cv-card">
        <h3><i className="fa-solid fa-id-card"></i> Contacto</h3>
        <ul className="cv-contact">
          {personal.email && (
            <li><i className="fa-solid fa-envelope"></i> {personal.email}</li>
          )}
          {personal.phone && (
            <li><i className="fa-solid fa-phone"></i> {personal.phone}</li>
          )}
          {personal.location && (
            <li><i className="fa-solid fa-location-dot"></i> {personal.location}</li>
          )}
          {personal.linkedin && (
            <li><i className="fa-brands fa-linkedin"></i> {personal.linkedin}</li>
          )}
          {!personal.email && !personal.phone && !personal.linkedin && (
            <li className="cv-muted">Datos de contacto disponibles a pedido.</li>
          )}
        </ul>
      </div>

      <div className="cv-card">
        <h3><i className="fa-solid fa-heart"></i> Habilidades personales</h3>
        <ul className="cv-tags">
          {personalSkills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="cv-card">
        <h3><i className="fa-solid fa-language"></i> Idiomas</h3>
        <LanguageBars items={languages} />
      </div>

      <div className="cv-card">
        <h3><i className="fa-solid fa-laptop"></i> Informática</h3>
        <ul className="cv-list">
          {computerSkills.map((s, i) => (
            <li key={i}><i className="fa-solid fa-circle-check"></i> {s}</li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
