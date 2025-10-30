import { useState, useEffect } from 'react'
import Header from './components/Header'
import ParticlesBackground from './components/ParticlesBackground'
import FloatingShapes from './components/FloatingShapes'
import HeroSection from './components/HeroSection'
import GospelToonsSection from './components/GospelToonsSection'
import JesusSection from './components/JesusSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import Lightbox from './components/Lightbox'
import './App.css'

function App() {
  const [lightboxData, setLightboxData] = useState({ 
    isOpen: false, 
    src: '', 
    caption: '', 
    images: [], 
    currentIndex: 0 
  })

  const openLightbox = (src, caption, images = [], currentIndex = 0) => {
    setLightboxData({ isOpen: true, src, caption, images, currentIndex })
  }

  const closeLightbox = () => {
    setLightboxData({ isOpen: false, src: '', caption: '', images: [], currentIndex: 0 })
  }

  const navigateLightbox = (direction) => {
    const { images, currentIndex } = lightboxData
    if (images.length === 0) return

    let newIndex = currentIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length
    } else if (direction === 'prev') {
      newIndex = (currentIndex - 1 + images.length) % images.length
    }

    const newImage = images[newIndex]
    setLightboxData({
      ...lightboxData,
      src: newImage.src,
      caption: `${newImage.name} - ${newImage.date}`,
      currentIndex: newIndex
    })
  }

  return (
    <div className="App">
      <ParticlesBackground />
      <FloatingShapes />
      <Header />
      <HeroSection />
      <GospelToonsSection 
        sectionId="gospel-english" 
        title="Gospel Toons English"
        language="english"
        openLightbox={openLightbox}
      />
      <GospelToonsSection 
        sectionId="gospel-tamil" 
        title="Gospel Toons Tamil"
        language="tamil"
        openLightbox={openLightbox}
      />
      <JesusSection openLightbox={openLightbox} />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <Lightbox 
        isOpen={lightboxData.isOpen}
        src={lightboxData.src}
        caption={lightboxData.caption}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
        hasMultipleImages={lightboxData.images.length > 1}
        currentIndex={lightboxData.currentIndex}
        totalImages={lightboxData.images.length}
      />
    </div>
  )
}

export default App

