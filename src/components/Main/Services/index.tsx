export default function (): JSX.Element {
  return (
    <section className="services section bd-container" id="services">
      <h2 className="section-title">Services</h2>

      <div className="services__container bd-grid">
        <div className="services__data">
          <i className="bx bx-bracket services__icon"></i>
          <h3 className="services__title">Frontend developer</h3>
          <div className="services__description">
            <i className="bx bxl-html5 services__icon-tech"></i>
            HTML5 <br />
            <i className="bx bxl-css3 services__icon-tech"></i> CSS3
            <br />
            <i className="bx bxl-react services__icon-tech"></i>
            React <br />
            <i className="bx bxl-redux services__icon-tech"></i>
            Redux - Thunk
            <br />
            <i className="bx bxl-bootstrap services__icon-tech"></i>
            Bootstrap <br />
            <i className="bx bx-user services__icon-tech"></i> Tailwind Css
            <br />
            <i className="bx bx-mask services__icon-tech"></i> React testing
            library <br />
            <i className="bx bx-mask services__icon-tech"></i>
            Jest <br />
            <i className="bx bx-mask services__icon-tech"></i>
            Cypress
          </div>
        </div>

        <div className="services__data">
          <i className="bx bx-server services__icon"></i>
          <h3 className="services__title">Backend developer</h3>
          <div className="services__description">
            <i className="bx bxl-nodejs services__icon-tech"></i>
            NodeJS <br />
            EX ExpressJS
            <br />
            <i className="bx bx-mask services__icon-tech"></i>
            Nginx
            <br />
            <i className="bx bx-data services__icon-tech"></i>
            PostgreSQL <br />
            <i className="bx bx-data services__icon-tech"></i>
            MongoDB <br />
          </div>
        </div>

        <div className="services__data">
          <i className="bx bx-brain services__icon"></i>
          <h3 className="services__title">DevOps</h3>
          <div className="services__description">
            <i className="bx bxl-git services__icon-tech"></i> Git
            <br />
            <i className="bx bxl-github services__icon-tech"></i>
            GitHub <br />
            <i className="bx bx-terminal services__icon-tech"></i>
            Terminal/Unix <br />
            <i className="bx bx-box services__icon-tech"></i> Docker
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}
