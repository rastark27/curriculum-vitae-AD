function SkillList({ items }) {
  return (
    <div className="cv-skills-grid">
      {items.map((s, i) => (
        <div key={i} className="cv-skill-card">
          <i className="fa-solid fa-seedling"></i>
          <span>{s}</span>
        </div>
      ))}
    </div>
  )
}

export default SkillList
