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
            I’m from Argentina and I'm front end developer focusing in react and
            javascript. I worked with other technologies such python, node, php,
            postgress and mongo. Personally besides of dev I'm an accountant,
            interested in market capital and criptocurrencies, I like to play
            football , go to the gym and I love hunging out with my friends
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
