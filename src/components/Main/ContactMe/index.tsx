import ContactForm from './ContactForm'

export default function (): JSX.Element {
  return (
    <section className="contact bd-container section" id="contact">
      <span className="section-subtitle">For jobs</span>
      <h2 className="section-title">Contact Me</h2>

      <div className="contact__container bd-grid">
        <div className="contact__content bd-grid">
          <div className="contact__box">
            <i className="bx bx-home contact__icon"></i>
            <h3 className="contact__title">Location</h3>
            <span className="contact__description">
              Buenos Aires, Argentina
            </span>
          </div>

          {/* <div className="contact__box">
                <i className="bx bx-phone contact__icon"></i>
                <h3 className="contact__title">Phone</h3>
                <a
                  href="https://wa.link/eh9txw"
                  className="whatsapp"
                  target="_blank"
                >
                  <span className="contact__description">+54 2226 556259</span>
                </a>
              </div> */}

          <div className="contact__box">
            <i className="bx bx-envelope contact__icon"></i>
            <h3 className="contact__title">Gmail</h3>
            <span className="contact__description">
              facundomasgrau@gmail.com
              <br />
            </span>
          </div>

          <div className="contact__box">
            <i className="bx bx-chat contact__icon"></i>
            <h3 className="contact__title">Chat</h3>
            <div>
              <a
                href="https://t.me/facundomasgrau"
                target="_blank"
                className="contact__social"
                rel="noreferrer"
              >
                <i className="bx bxl-telegram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/facundomasgrau"
                target="_blank"
                className="contact__social"
                rel="noreferrer"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>

        <ContactForm></ContactForm>
      </div>
    </section>
  )
}
