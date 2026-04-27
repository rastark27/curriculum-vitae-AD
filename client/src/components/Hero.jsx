import { useState } from 'react'

function Hero({ personal, initials }) {
  const [imgError, setImgError] = useState(false)
  const showPhoto = personal.photo && !imgError

  return (
    <header className="cv-hero">
      <div className="cv-hero-bg">
        <span className="bubble b1"></span>
        <span className="bubble b2"></span>
        <span className="bubble b3"></span>
      </div>
      <div className="cv-hero-inner">
        <div className="cv-avatar-wrap">
          <div className={`cv-avatar ${showPhoto ? 'has-photo' : ''}`}>
            {showPhoto ? (
              <img
                src={personal.photo}
                alt={personal.title}
                onError={() => setImgError(true)}
              />
            ) : (
              <span>{initials}</span>
            )}
          </div>
          <i className="fa-solid fa-apple-whole cv-avatar-icon" aria-hidden="true"></i>
        </div>
        <div className="cv-hero-text">
          <p className="cv-eyebrow">Currículum Vitae</p>
          <h1>{personal.title}</h1>
          <p className="cv-tagline">{personal.tagline}</p>
          <div className="cv-hero-meta">
            {personal.location && (
              <span><i className="fa-solid fa-location-dot"></i> {personal.location}</span>
            )}
            <span><i className="fa-solid fa-user-graduate"></i> UNLA</span>
            <span><i className="fa-solid fa-ruler-combined"></i> ISAK Nivel 2</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
