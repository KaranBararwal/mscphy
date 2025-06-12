import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>M.Sc. Physics at NIT Jalandhar</h1>
      <p>
        Dive deep into the world of advanced physics with state-of-the-art labs,
        dedicated research facilities, <br />
        and expert faculty guiding you at every step.
      </p>
      <Link to="/" className="hero-btn">
        Visit Us To Know More
      </Link>
    </div>
  );
};

export default TextBox;