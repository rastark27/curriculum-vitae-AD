function Section({ id, icon, title, children }) {
  return (
    <section id={id} className="cv-section">
      <header className="cv-section-header">
        <span className="cv-section-icon">
          <i className={`fa-solid ${icon}`}></i>
        </span>
        <h2>{title}</h2>
        <span className="cv-section-line"></span>
      </header>
      <div className="cv-section-body">{children}</div>
    </section>
  )
}

export default Section
