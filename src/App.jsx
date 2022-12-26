import './App.css'
import CardContainer from './components/CardContainer'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Header />
    <main>
    <AboutMe />
    <Skills />
    <CardContainer />
    <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App
