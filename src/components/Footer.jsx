import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        {/* Center - Copyright */}
        <div className="footer-center">
          © {new Date().getFullYear()} Sathish Paul SDB • All Rights Reserved • Powered by
          <a href="https://sathishpaul.net" target="_blank" rel="noopener noreferrer" className='footer-link'> Sathish Paul</a>
        </div>

        {/* Right - Social Icons */}
        <div className="footer-right">
          <a href="https://www.facebook.com/share/1PgmjRSQyd/" className="social"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/sathishpaul1?igsh=dmFqNGQxaDVqZHVv" className="social"><i className="fab fa-instagram"></i></a>
          <a href="https://youtube.com/@jsathishpaul?si=lzcAg-S8dRGTtszr" className="social" ><i className="fab fa-youtube"></i></a>
          <a href="https://wa.me/919655446908" className="social"><i className="fab fa-whatsapp"></i></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
