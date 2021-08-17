/* eslint-disable react/no-unescaped-entities */

export default function (): JSX.Element {
  return (
    <div className="footer__container bd-container">
      <h1 className="footer__title">Facundo Masgrau</h1>
      <p className="footer__description">Send me a message and let's talk.</p>

      <div className="footer__social">
        <a
          href="https://github.com/Fmasgrau"
          target="_blank"
          className="footer__link"
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/facundomasgrau/"
          target="_blank"
          className="footer__link"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://t.me/facundomasgrau"
          target="_blank"
          className="footer__link"
          rel="noreferrer"
        >
          <i className="bx bxl-telegram"></i>
        </a>
      </div>
      <p className="footer__copy">
        &#169; Main idea from Julian Vazquez.{' '}
        <a
          href="https://www.linkedin.com/in/julianvazquezdev/"
          target="_blank"
          className="footer__link"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
      </p>
    </div>
  )
}
