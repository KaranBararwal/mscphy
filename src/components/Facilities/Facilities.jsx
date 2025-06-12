import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Facilities for M.Sc. Physics at NIT Jalandhar</h1>
      <p>
        Experience an environment that fosters advanced learning and research in Physics.
      </p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/library.png" alt="Library" />
          <h3>Advanced Central Library</h3>
          <p>
            Access a vast collection of physics journals, research papers, e-books, and 
            reference materials that support your academic journey.
          </p>
        </div>

        <div className="facilities-col">
          <img src="/images/washington.png" alt="Physics Lab" />
          <h3>Well-Equipped Physics Laboratories</h3>
          <p>
            Hands-on experiments in Modern Physics, Solid State Physics, 
            Nuclear Physics, and Optics conducted in state-of-the-art labs.
          </p>
        </div>

        <div className="facilities-col">
          <img src="/images/about.jpg" alt="Research Support" />
          <h3>Research & Computational Facilities</h3>
          <p>
            Access high-performance computing labs, simulation software, and 
            project guidance for dissertation and research work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
