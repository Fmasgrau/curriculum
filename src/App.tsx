/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */

import Navbar from './components/Header/Navbar'
import Home from './components/Main/Home'
import About from './components/Main/About'
import Qualification from './components/Main/Qualification'
import Services from './components/Main/Services'
import Hireme from './components/Main/Hireme'
import Portfolio from './components/Main/Portfolio'
import ContactMe from './components/Main/ContactMe'
import Footer from './components/Footer'

export default function App(): JSX.Element {
  return (
    <>
      <a href="#" className="scrolltop" id="scroll-top">
        <i className="bx bx-chevron-up scrolltop__icon"></i>
      </a>

      <header className="l-header" id="header">
        <Navbar></Navbar>
      </header>

      <main className="l-main">
        <Home></Home>

        <About></About>

        <Qualification></Qualification>

        <Services></Services>

        <Hireme></Hireme>

        <Portfolio></Portfolio>

        {/* <!--===== TESTIMONIAL =====--> */}
        {/* Nothing at the moment */}

        <ContactMe></ContactMe>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  )
}
