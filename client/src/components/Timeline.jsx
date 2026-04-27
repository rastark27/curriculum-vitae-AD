function Timeline({ items }) {
  return (
    <ol className="cv-timeline">
      {items.map((it, i) => (
        <li key={i} className="cv-timeline-item">
          <span className="cv-timeline-dot"></span>
          <div className="cv-timeline-card">
            <div className="cv-timeline-head">
              <h3>{it.position}</h3>
              <span className="cv-chip">{it.period}</span>
            </div>
            <p className="cv-timeline-company">
              <i className="fa-solid fa-building"></i>
              {it.company}
              {it.location && <span className="cv-muted"> · {it.location}</span>}
            </p>
            <p className="cv-timeline-desc">{it.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Timeline
