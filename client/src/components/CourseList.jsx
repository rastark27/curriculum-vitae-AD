function CourseList({ items }) {
  return (
    <div className="cv-courses">
      {items.map((c, i) => (
        <article key={i} className="cv-course">
          <div className="cv-course-year">{c.year}</div>
          <div>
            <h4>{c.name}</h4>
            {c.org && <p className="cv-muted">{c.org}</p>}
          </div>
        </article>
      ))}
    </div>
  )
}

export default CourseList
