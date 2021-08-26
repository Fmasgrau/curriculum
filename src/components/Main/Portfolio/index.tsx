import NextJsProject from '../../../assets/img/nextjs.png'
import CvProject from '../../../assets/img/cvproject.png'
import CoverPhoto from '../../../assets/img/coverphoto.jpg'

export default function (): JSX.Element {
  return (
    <section className="portfolio bd-container section" id="portfolio">
      <span className="section-subtitle">My recent works</span>
      <h2 className="section-title">Portfolio</h2>

      {/* <div className="portfolio__nav">
    <span
      className="portfolio__item active-portfolio"
      data-filter="all"
    >
      All
    </span>
    <span className="portfolio__item" data-filter=".web">
      Full Stack
    </span>
    <span className="portfolio__item" data-filter=".ux">
      Frontend
    </span>
    <span className="portfolio__item" data-filter=".app">
      App
    </span>
  </div> */}

      <div className="portfolio__container bd-grid">
        <div className="portfolio__content mix web">
          <a href="#" target="_blank">
            <img src={NextJsProject} alt="" className="portfolio__img" />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">Test for a client</span>
            <a
              href="https://github.com/Fmasgrau/NextJs-Test"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="portfolio__title">Carousel - NextJS Tailwind</h2>
            </a>
            <a
              href="https://github.com/Fmasgrau/NextJs-Test"
              target="_blank"
              className="button button-link"
              rel="noreferrer"
            >
              View Details
            </a>
          </div>
        </div>

        <div className="portfolio__content mix web">
          <a href="#" target="_blank">
            <img src={CvProject} alt="" className="portfolio__img" />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">Curriculum</span>
            <a
              href="https://github.com/Fmasgrau/curriculum"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="portfolio__title">React JS</h2>
            </a>
            <a
              href="https://github.com/Fmasgrau/curriculum"
              target="_blank"
              className="button button-link"
              rel="noreferrer"
            >
              View Details
            </a>
          </div>
        </div>

        <div className="portfolio__content mix web">
          <a href="#" target="_blank">
            <img src={CoverPhoto} alt="coverphoto" className="portfolio__img" />
          </a>
          <div className="portfolio__data">
            <span className="portfolio__subtitle">Metasearch</span>
            <a
              href="https://github.com/Fmasgrau/metasearch"
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="portfolio__title">Metasearch - React JS</h2>
            </a>
            <a
              href="https://github.com/Fmasgrau/metasearch"
              target="_blank"
              className="button button-link"
              rel="noreferrer"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
