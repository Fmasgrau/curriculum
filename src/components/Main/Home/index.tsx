import Fade from 'react-reveal/Fade'

export default function (): JSX.Element {
  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <Fade top cascade>
          <div className="home__data">
            <span className="home__greeting">Hello, My name is</span>
            <h1 className="home__name">Facundo Masgrau</h1>
            <span className="home__profession">Full Stack Developer</span>
            <a
              download=""
              href="assets/pdf/CV - JULIAN VAZQUEZ - EN.pdf"
              className="button button-light home__button"
            >
              Download CV
            </a>
          </div>
        </Fade>
        <Fade bottom>
          <div className="home__social">
            <a
              href="https://github.com/jumjules42/"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/julianvazquezdev/"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/jumjules/"
              target="_blank"
              className="home__social-icon"
              rel="noreferrer"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </Fade>
        {/* <Fade right>
            <div className="home__img">
              <img src={JavascriptPhoto} alt="Me one." />
            </div>
          </Fade> */}
      </div>
    </section>
  )
}
