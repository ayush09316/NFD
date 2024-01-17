import {Aggregator, About, Hero, Footer, Navbar, Contact, Roadmap,Members,Features } from './component'

function App() {
 

  return (
    <div className='flex justify-center flex-col items-center'>
     <Navbar/>
     <Hero/>
     <About/>
     <Aggregator/>
     <Features/>
     <Roadmap/>
     <Members/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
