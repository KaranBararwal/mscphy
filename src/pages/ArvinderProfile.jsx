import "./Profile.css"

const ArvinderProfile = () => {
  return (
    <section className="profile-page">
      <h2>Dr. Arvinder Singh - Plasma Research Laboratory</h2>
      <img src="/images/faculty1.jpg" alt="Dr Arvinder Singh" className="profile-img" />
      <p>
        Dr. Arvinder Singh leads the Plasma Research Laboratory at NIT Jalandhar. The lab is focused on advanced plasma physics, including diagnostics, confinement, and applications in material processing.
      </p>

      <h3>Experiments in Plasma Lab:</h3>
      <ul>
        <li>Langmuir Probe Diagnostics</li>
        <li>Magnetized Plasma Confinement</li>
        <li>RF and DC Glow Discharge Experiments</li>
        <li>Plasma Etching and Thin Film Deposition</li>
        <li>Plasma-based Surface Modification</li>
      </ul>
    </section>
  );
};

export default ArvinderProfile;
