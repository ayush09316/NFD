import { About, Hero, Footer, Navbar, Contact, Roadmap,Members } from './component'

function App() {
 

  return (
    <div className='flex justify-center flex-col items-center'>
     <Navbar/>
     <Hero/>
     <About/>
     <Roadmap/>
     <Members/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
