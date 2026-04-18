function Projects(){
  return(
    <section className="p-5" id="projects">
      <div className="container">

        <h2 className="section-title text-center mb-4">Projects</h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5>Todo List App</h5>
                <p>Task manager with JavaScript.</p>
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5>Weather App</h5>
                <p>Weather application using API.</p>
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5>Portfolio Website</h5>
                <p>Responsive portfolio using React.</p>
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects