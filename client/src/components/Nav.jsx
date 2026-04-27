function Nav({ sections, active, onSelect }) {
  const handleClick = (id) => {
    onSelect(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="cv-nav">
      <div className="cv-nav-brand">
        <i className="fa-solid fa-leaf"></i>
        <span>Nutrición</span>
      </div>
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <button
              className={active === s.id ? 'is-active' : ''}
              onClick={() => handleClick(s.id)}
            >
              <i className={`fa-solid ${s.icon}`}></i>
              <span>{s.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
