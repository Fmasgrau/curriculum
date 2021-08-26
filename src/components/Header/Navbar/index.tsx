import Fade from 'react-reveal/Fade'

export default function index(): JSX.Element {
  return (
    <Fade top>
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">
          Facundo Masgrau
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact Me
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="/index_ES.html" className="nav__link">
                ES
              </a>
            </li> */}
          </ul>
        </div>

        <div className="nav__toggle">
          <i className="bx bx-menu" id="nav-toggle"></i>
        </div>
      </nav>
    </Fade>
  )
}
