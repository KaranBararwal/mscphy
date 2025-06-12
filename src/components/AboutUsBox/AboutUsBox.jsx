import { Link } from "react-router-dom";
import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>Welcome to NIT Jalandhar</h1>
          <p>
            Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NITJ) is one of the
            premier engineering institutions in India. We are dedicated to academic excellence,
            cutting-edge research, and holistic development of our students. At NIT Jalandhar, we
            empower learners with strong technical skills, critical thinking, and leadership
            qualities to tackle global challenges and innovate for a better future.
          </p>
          <Link to="#" className="hero-btn red-btn">
            EXPLORE NOW
          </Link>
        </div>
        <div className="about-col">
          <img src="images/about.jpg" alt="NIT Jalandhar Campus" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
