import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our M.Sc. Physics Students Say</h1>
      <p>
        Hear from our students about their research, lab experiences, and academic journey at NIT Jalandhar.
      </p>
      <div className="row">
        <div className="testimonial-col">
          <img src="/images/user1.jpg" alt="Student Christine" />
          <div>
            <p>
              &quot;The advanced physics labs and the exposure to real-time research at NIT Jalandhar have been phenomenal. The faculty is very supportive and encourages innovation.&quot;
            </p>
            <h3>Priya Sharma</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="filled-star" />
              ))}
            </div>
          </div>
        </div>

        <div className="testimonial-col">
          <img src="/images/user2.jpg" alt="Student David" />
          <div>
            <p>
              &quot;The curriculum is very research-oriented, and the facilities like the optics and nano-materials labs make learning exciting. Great place to grow academically!&quot;
            </p>
            <h3>Rahul Verma</h3>
            <div className="stars">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="filled-star" />
              ))}
              <FontAwesomeIcon icon={faStar} className="empty-star" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;