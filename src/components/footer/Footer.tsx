import './footer.css';
import fiservLogo from "../../assets/fiserv_logo_orange_rgb.jpg";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      
        <div className="links">
          <p className="copyright" >©2024 Fiserv, Inc. or its affiliates</p>
          <a href="#" className="footer-link"  target="_blank" rel="noopener noreferrer">Submit FUEL Feedback</a>
          <a href="#" className="footer-link"  target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="#" className="footer-link"  target="_blank" rel="noopener noreferrer">Terms of Use</a>
          <a href="https://www.fiserv.com/" className="footer-link"  target="_blank" rel="noopener noreferrer">
            <img src={fiservLogo} alt="Fiserv" className="fiserv-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};
