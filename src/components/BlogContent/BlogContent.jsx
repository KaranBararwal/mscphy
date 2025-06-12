import "./BlogContent.css";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="/images/certificate.jpg" alt="MSc Physics" />
          <h2>MSc in Physics &apos; Program Overview - NIT Jalandhar</h2>
          <p>
            Welcome to the MSc in Physics program at NIT Jalandhar. This
            two-year postgraduate course is designed to provide students with a
            deep understanding of the fundamental and applied aspects of modern
            physics. Our curriculum emphasizes analytical thinking,
            experimental skills, and research-oriented learning.
          </p>
          <br />
          <p>
            The program offers specialized modules in areas like Quantum
            Mechanics, Electrodynamics, Thermodynamics, and Statistical
            Mechanics. Students also engage in laboratory work, projects, and
            dissertation-based research to prepare for careers in academia,
            research, and industry.
          </p>
          <br />
          <p>
            Whether you&apos;re a student, working professional, or an
            enthusiast, there&apos;s something for everyone in our MSc Physics
            journey. Embrace a vibrant academic culture with leading faculty and
            world-class infrastructure at NIT Jalandhar.
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <textarea rows="5" placeholder="Your comment"></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>

        <div className="blog-right">
          <h3>Course Categories</h3>
          <div>
            <span>Quantum Mechanics</span>
            <span>12</span>
          </div>
          <div>
            <span>Electrodynamics</span>
            <span>9</span>
          </div>
          <div>
            <span>Thermodynamics</span>
            <span>6</span>
          </div>
          <div>
            <span>Statistical Mechanics</span>
            <span>8</span>
          </div>
          <div>
            <span>Solid State Physics</span>
            <span>11</span>
          </div>
          <div>
            <span>Experimental Techniques</span>
            <span>7</span>
          </div>
          <div>
            <span>Dissertation</span>
            <span>5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
