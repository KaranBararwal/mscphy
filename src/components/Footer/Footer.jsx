import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About M.Sc. Physics - NIT Jalandhar</h4>
      <p>
        The Department of Physics at NIT Jalandhar is committed to advancing knowledge through
        cutting-edge research and academic excellence in the field of Physics. The M.Sc. Physics
        program emphasizes both theoretical understanding and practical laboratory experience,
        fostering a strong foundation for careers in research, industry, and academia.
        <br />
        With modern lab infrastructure, dedicated faculty, and an encouraging academic environment,
        we aim to shape curious minds into future scientists and educators.
      </p>

      <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} className="fab" />
        <FontAwesomeIcon icon={faTwitter} className="fab" />
        <FontAwesomeIcon icon={faInstagram} className="fab" />
        <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
      </div>

      <p>
        Made with <FontAwesomeIcon icon={faHeart} className="fa-heart" /> by Team NITJ
      </p>
    </section>
  );
};

export default Footer;