import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Services } from './components/services'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { ToTopButton } from './components/to-top'

export function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ToTopButton />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}