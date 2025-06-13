import "./Profile.css";
import { useNavigate } from "react-router-dom";

const ArvinderProfile = () => {
    const navigate = useNavigate();

  return (
    <section className="profile-page">
      <h2>Dr. Arvinder Singh - Plasma Research Laboratory</h2>
      <img src="/images/faculty1.jpg" alt="Dr Arvinder Singh" className="profile-img" />

      <h3>Course Details: Plasma Laboratory (PHL-546)</h3>
      <table className="course-table">
        <tbody>
          <tr>
            <td><strong>Course code</strong></td>
            <td>PHL-546</td>
          </tr>
          <tr>
            <td><strong>Course title</strong></td>
            <td>Plasma Laboratory</td>
          </tr>
          <tr>
            <td><strong>Credits</strong></td>
            <td>0-0-3</td>
          </tr>
          <tr>
            <td><strong>Course type</strong></td>
            <td>For M.Sc. (Physics) students</td>
          </tr>
          <tr>
            <td><strong>Prerequisites</strong></td>
            <td>Electrodynamics: PHL-518</td>
          </tr>
          <tr>
            <td><strong>Assessment</strong></td>
            <td>Both continuous and semester end examination</td>
          </tr>
        </tbody>
      </table>

      <h3>Course Objective</h3>
      <p>
        To measure various plasma parameters with the help of single and double Langmuir probes, 
        to study the breakdown voltage of a given plasma, to obtain the plasma coating on a substrate 
        and also cleaning of substrate surfaces, to launch and detect ion acoustic waves, to understand 
        the microwave plasma, to understand the conditions of occurrence of striations. 
        Basic understanding acquired will be helpful in industry as well as for doing experimental plasma research.
      </p>

      <h3>Course Outcomes</h3>
      <ul>
        <li><strong>CO1:</strong> Measurement of floating potential, plasma potential, electron potential, and ion density.</li>
        <li><strong>CO2:</strong> Importance of Paschen curve for determining the minimum value of breakdown voltage for plasma formation.</li>
        <li><strong>CO3:</strong> The physics of sputtering with and without magnetic field.</li>
        <li><strong>CO4:</strong> The collective behavior of a plasma.</li>
        <li><strong>CO5:</strong> The physics of microwave plasma.</li>
        <li><strong>CO6:</strong> To find the range of current values, pressure, and tube radii where striations can survive.</li>
      </ul>

      <h3>Syllabus / List of Experiments</h3>
      <ol>
        <li>Study of plasma parameters such as electron density, ion density, electron temperature, floating potential, plasma potential etc. using single and double Langmuir probe.</li>
        <li>Verification of Paschen curve.</li>
        <li>Study of plasma coating of different materials on substrate.</li>
        <li>Study of plasma cleaning of substrate surfaces.</li>
        <li>Demonstration of microwave plasma.</li>
        <li>Study of collective behavior of a plasma by launching and detecting ion acoustic waves.</li>
        <li>To study the conditions of occurrence of striations.</li>
      </ol>

       {/* New Section for Students */}
      <h3>Students Involved in Plasma Experiments</h3>
      <p>
        A number of postgraduate students have actively participated in plasma experiments under Dr. Arvinder Singh’s guidance.
      </p>
      <button className="hero-btn red-btn" onClick={() => navigate("/students/plasma")}>
        View Students
      </button>

    </section>
  );
};

export default ArvinderProfile;
