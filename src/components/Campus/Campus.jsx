import "./Campus.css";

const Campus = () => {
  return (
    <section className="campus">
      <h1>Our Campus at NIT Jalandhar</h1>
      <p>
        Explore the vibrant academic and cultural life of Dr. B R Ambedkar National Institute of Technology, Jalandhar.
      </p>
      <div className="row">
        <div className="campus-col">
          <img src="/images/admin-block.jpg" alt="Admin Block" />
          <div className="layer">
            <h3>ADMIN BLOCK</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src="/images/library.jpg" alt="Central Library" />
          <div className="layer">
            <h3>CENTRAL LIBRARY</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src="/images/hostel.jpg" alt="Student Hostels" />
          <div className="layer">
            <h3>STUDENT HOSTELS</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
