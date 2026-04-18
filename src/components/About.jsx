function About() {
  return (
    <section id="about" className="p-5">
      <div className="container ">
        <h2 className="section-title text-center mb-4">About Me</h2>

        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png"
              className="img-fluid rounded about-img"
              alt="profile"
            />
          </div>

          <div className="col-md-6 pt-3 pt-md-0">
            <p>
              Hello! I'm Vishal Jangir, a passionate frontend developer.
              I enjoy building responsive and interactive websites using
              HTML, CSS, JavaScript, React and Bootstrap.
            </p>

            <p>
              I focus on creating clean UI, responsive design, and
              user-friendly web applications.
            </p>

            <button className="btn btn-primary">
              Download Resume
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About