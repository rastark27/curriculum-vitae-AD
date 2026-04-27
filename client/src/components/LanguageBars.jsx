function LanguageBars({ items }) {
  return (
    <ul className="cv-lang">
      {items.map((l, i) => (
        <li key={i}>
          <div className="cv-lang-row">
            <span className="cv-lang-name">{l.language}</span>
            <span className="cv-lang-level">{l.level}</span>
          </div>
          <div className="cv-lang-bar">
            <div className="cv-lang-fill" style={{ width: `${l.percent}%` }}></div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default LanguageBars
