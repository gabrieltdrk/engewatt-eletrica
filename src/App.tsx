import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { Footer } from './components/Footer'

export function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}