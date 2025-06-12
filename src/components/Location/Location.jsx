import "./Location.css";

const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.041733860325!2d75.53394167530528!3d31.395929274266985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f13c1460f1d%3A0x2f4ad0a93c66ea7e!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%2C%20Jalandhar!5e0!3m2!1sen!2sin!4v1718124747462!5m2!1sen!2sin";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src={location}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NIT Jalandhar Location"
      ></iframe>
    </section>
  );
};

export default Location;