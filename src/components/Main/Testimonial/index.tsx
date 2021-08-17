export default function (): JSX.Element {
  return (
    <section className="testimonial bd-container section">
      <span className="section-subtitle">My client saying</span>
      <h2 className="section-title">Testimonial</h2>

      <div className="testimonial__container swiper-container">
        <div className="swiper-wrapper">
          <div className="testimonial__content swiper-slide">
            <img
              src="assets/img/testimonial1.jpg"
              alt=""
              className="testimonial__img"
            />
            <h3 className="testimonial__title">Nik Holly</h3>
            <span className="testimonial__client">Client</span>
            <p className="testimonial__description">
              This company does a very good service, offers the best deals and
              does a good job, I recommend it.
            </p>
          </div>

          <div className="testimonial__content swiper-slide">
            <img
              src="assets/img/testimonial2.jpg"
              alt=""
              className="testimonial__img"
            />
            <h3 className="testimonial__title">Sara Mill</h3>
            <span className="testimonial__client">Client</span>
            <p className="testimonial__description">
              This company does a very good service, offers the best deals and
              does a good job, I recommend it.
            </p>
          </div>

          <div className="testimonial__content swiper-slide">
            <img
              src="assets/img/testimonial3.jpg"
              alt=""
              className="testimonial__img"
            />
            <h3 className="testimonial__title">Clay Mitchell</h3>
            <span className="testimonial__client">Client</span>
            <p className="testimonial__description">
              This company does a very good service, offers the best deals and
              does a good job, I recommend it.
            </p>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  )
}
