import "./People.css";
import { Link } from "react-router-dom";

const facultyData = [
  {
    name: "Dr Arvinder Singh",
    post: "Professor (HAG)",
    email: "arvinders@nitj.ac.in",
    image: "/images/faculty1.jpg",
    profileLink: "/faculty/arvinder",
  },
];

const People = () => {
  return (
    <section className="people-content">
      <h2 className="faculty-heading">Meet Our Esteemed Faculty</h2>
      <div className="faculty-grid">
        {facultyData.map((faculty, index) => (
          <div className="faculty-card" key={index}>
            <img src={faculty.image} alt={faculty.name} />
            <h3>{faculty.name}</h3>
            <p>{faculty.post}</p>
            <p>
              <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
            </p>
            <Link
              to={faculty.profileLink}
              className="hero-btn red-btn"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default People;
