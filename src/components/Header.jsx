import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)

      // Update active section
      const sections = ['home', 'gospel-english', 'gospel-tamil', 'jesus']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-circle">
            <img 
              src="/images/logo.jpg" 
              alt="Logo" 
              className="logo-img"
            />
          </div>
          <div className="logo-text">
            <h1 className="logo-title">Sathish Paul SDB</h1>
          </div>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-list">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
              >
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a 
                href="#gospel-english" 
                className={`nav-link ${activeSection === 'gospel-english' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('gospel-english') }}
              >
                <i className="fas fa-book-open"></i> Gospel Toons English
              </a>
            </li>
            <li>
              <a 
                href="#gospel-tamil" 
                className={`nav-link ${activeSection === 'gospel-tamil' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('gospel-tamil') }}
              >
                <i className="fas fa-book"></i> Gospel Toons Tamil
              </a>
            </li>
            <li>
              <a 
                href="#jesus" 
                className={`nav-link ${activeSection === 'jesus' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('jesus') }}
              >
                <i className="fas fa-dove"></i> Sacred Gallery
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

