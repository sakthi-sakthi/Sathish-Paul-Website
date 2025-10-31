import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="category-circles">
          <div 
            className="category-circle"
            onClick={() => navigate('/gospeltoons-eng')}
          >
            <img 
              src="/images/Logo 1.png" 
              alt="Gospeltoons English"
              className="circle-logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div className="circle-content fallback" style={{display: 'none'}}>
              <div className="gt-logo-large">GT</div>
              <div className="circle-text">
                <span className="circle-label orange">English</span>
                <span className="circle-name">Gospeltoons</span>
              </div>
            </div>
          </div>

          <div 
            className="category-circle"
            onClick={() => navigate('/gospeltoons-tamil')}
          >
            <img 
              src="/images/Logo 2.png" 
              alt="Gospeltoons Tamil"
              className="circle-logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div className="circle-content fallback" style={{display: 'none'}}>
              <div className="gt-logo-large">GT</div>
              <div className="circle-text">
                <span className="circle-label orange">Tamil</span>
                <span className="circle-name">Gospeltoons</span>
              </div>
            </div>
          </div>

          <div 
            className="category-circle"
            onClick={() => navigate('/catholic-designs')}
          >
            <img 
              src="/images/Logo 3.png" 
              alt="Catholic Designs"
              className="circle-logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <div className="circle-content catholic fallback" style={{display: 'none'}}>
              <div className="catholic-text">
                <span className="catholic-title">CATHOLIC</span>
                <span className="catholic-subtitle orange">DESIGNS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="about-image">
            <img 
              src="/images/my icon.png" 
              alt="Sathish Paul SDB"
              onError={(e) => {
                e.target.src = '/images/Profile1.jpeg'
              }}
            />
          </div>
          <div className="about-text">
            <h2>Sathish Paul SDB</h2>
            <p className="text-justify">
              Fr. Sathish Paul is a Salesian priest from the province of Chennai with a professional background in Art and Graphic Design. With extensive experience in the field, he brings creativity and innovation to the mission. Deeply committed to sharing God's love, he believes in the power of art and aesthetics to engage and inspire young people, making faith accessible through visual and creative platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
