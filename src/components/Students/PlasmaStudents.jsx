import "./Students.css";

// --- Ph.D. Project Students Data ---
const phdStudents = [
  {
    name: "Drishti Sharma",
    rollNo: "PhD21PHY01",
    email: "drishti.phd@nitj.ac.in",
    specialization: "Plasma Surface Interaction",
    image: "/images/phd1.jpg",
  },
  {
    name: "Vikas Thakur",
    rollNo: "PhD21PHY02",
    email: "vikas.phd@nitj.ac.in",
    specialization: "Microwave Plasma Diagnostics",
    image: "/images/phd2.jpg",
  },
  // Add more PhD students here
];

// --- M.Sc. Project Students Data ---
const mscStudents = [
  {
    name: "Aman Verma",
    rollNo: "21PH1001",
    email: "aman21ph@nitj.ac.in",
    specialization: "Plasma Diagnostics",
    image: "/images/student1.jpg",
  },
  {
    name: "Sakshi Mehta",
    rollNo: "21PH1003",
    email: "sakshi21ph@nitj.ac.in",
    specialization: "Paschen Curve Verification",
    image: "/images/student2.jpg",
  },
  {
    name: "Ravi Kumar",
    rollNo: "21PH1005",
    email: "ravi21ph@nitj.ac.in",
    specialization: "Microwave Plasma Studies",
    image: "/images/student3.jpg",
  },
];

const PlasmaStudents = () => {
  return (
    <section className="student-page">
      <h2>Ph.D. Project Students</h2>
      <div className="student-grid">
        {phdStudents.map((student, index) => (
          <div className="student-card" key={index}>
            <img src={student.image} alt={student.name} />
            <h3>{student.name}</h3>
            <p><strong>Roll No:</strong> {student.rollNo}</p>
            <p><strong>Email:</strong> <a href={`mailto:${student.email}`}>{student.email}</a></p>
            <p><strong>Area:</strong> {student.specialization}</p>
          </div>
        ))}
      </div>

      <h2>M.Sc. Project Students</h2>
      <div className="student-grid">
        {mscStudents.map((student, index) => (
          <div className="student-card" key={index}>
            <img src={student.image} alt={student.name} />
            <h3>{student.name}</h3>
            <p><strong>Roll No:</strong> {student.rollNo}</p>
            <p><strong>Email:</strong> <a href={`mailto:${student.email}`}>{student.email}</a></p>
            <p><strong>Area:</strong> {student.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlasmaStudents;
