function Contact(){
  return(
    <section className="p-5 bg-light" id="contact">
      <div className="container">

        <h2 className="section-title text-center mb-4">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">

            <form>

              <input className="form-control mb-3" placeholder="Name"/>

              <input className="form-control mb-3" placeholder="Email"/>

              <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>

              <button className="btn btn-primary w-100">Send Message</button>

            </form>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact