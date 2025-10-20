import XIcon from "../assets/x.svg"
import FacebookIcon from "../assets/facebook.svg"
import InstagramIcon from "../assets/instagram-icon.svg"
import GithubIcon from "../assets/github-icon.svg"
function Footer() {
  return (
    <footer className="footer-section">
      <img
        className="footer-icons"
        src={XIcon}
        alt="Twitter icon"
      />
      <img
        className="footer-icons"
        src={FacebookIcon}
        alt="Facebook icon"
      />
      <img src={InstagramIcon} alt="instagram icon" />
      <img src={GithubIcon} alt="GitHub icon" />
    </footer>
  );
}
export default Footer;
