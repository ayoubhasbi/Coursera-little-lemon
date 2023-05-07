import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div className='w-full bg-[#ECECEC]'>
        <div className='px-40 flex justify-center items-center'>
          <Navbar />
        </div>
      </div>

      <div className='w-full bg-[#495E57]'>
        <div className='px-40'>
          <Hero />
        </div>
      </div>

      <div className='w-full bg-[#ECECEC]'>
        <div className='px-40'>
          <Highlights />
        </div>
      </div>

      <div className='w-full bg-[#495E57]'>
        <div className='px-40'>
          <Testimonials />
        </div>
      </div>

      <div className='w-full bg-[#ECECEC]'>
        <div className='px-40'>
          <About />
        </div>
      </div>

      <div className='w-full bg-[#D9D9D9]'>
        <div className='px-40'>
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App;
