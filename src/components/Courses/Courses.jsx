import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1>Research Areas in M.Sc. Physics</h1>
      <p>
        Explore the exciting research domains offered in the M.Sc. Physics program at NIT Jalandhar.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>Condensed Matter Physics</h3>
          <p>
            Investigate the properties of matter in solid and liquid phases. Engage in experimental and theoretical studies on nanomaterials, semiconductors, and magnetic materials.
          </p>
        </div>
        <div className="course-col">
          <h3>Plasma Physics</h3>
          <p>
            Study ionized gases and their applications in fusion technology, space sciences, and advanced material processing.
          </p>
        </div>
        <div className="course-col">
          <h3>Photonics and Optoelectronics</h3>
          <p>
            Explore the interaction of light with matter, fiber optics, laser systems, and devices used in modern communication and sensing technologies.
          </p>
        </div>
        <div className="course-col">
          <h3>Nuclear and Particle Physics</h3>
          <p>
            Delve into the structure of atomic nuclei, fundamental particles, and the forces that govern them, with potential collaboration on high-energy experiments.
          </p>
        </div>
        <div className="course-col">
          <h3>Theoretical Physics</h3>
          <p>
            Focus on quantum mechanics, classical field theory, and mathematical modeling of physical systems to understand the universe at a fundamental level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
