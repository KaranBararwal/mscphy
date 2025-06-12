import { Link } from "react-router-dom";

import "./Cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <h1>
        Join the M.Sc. Physics Program at NIT Jalandhar
        <br />
        Advance Your Research Career with Us
      </h1>
      <Link to="/contact" className="hero-btn">
        CONTACT US
      </Link>
    </section>
  );
};

export default Cta;
