/* eslint-disable react/no-unescaped-entities */
import AboutPhoto from '../../../assets/img/masgrandefacu.jpg'

export default function (): JSX.Element {
  return (
    <section className="about section bd-container" id="about">
      <span className="section-subtitle">My history</span>
      <h2 className="section-title">About me</h2>

      <div className="about__container bd-grid">
        <div className="about__data bd-grid">
          <p className="about__description">
            <span>
              Hi, I'm Facundo, nice to meet you <br />
            </span>
            Hi, I'm Facundo, nice to meet you.I’m from Argentina and I'm a front
            end developer focusing on react and javascript. I've worked with
            other technologies such as python, node, php, postgresql and mongo.
            Besides being a dev I'm an accountant, and I’m interested in market
            capital and criptocurrencies. I like to play football , go to the
            gym and I love hanging out with Friends
          </p>

          <div>
            <span className="about__number">4+</span>
            <span className="about__achievement">Years of Experience</span>
          </div>

          <div>
            <span className="about__number">10+</span>
            <span className="about__achievement">Projects completed</span>
          </div>
        </div>

        <img src={AboutPhoto} alt="" className="about__img" />
      </div>
    </section>
  )
}
