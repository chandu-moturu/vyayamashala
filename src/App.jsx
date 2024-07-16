import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Stories from './pages/Stories/Stories'
import Facilities from './pages/Facilities/Facilities'
import Trainers from './pages/Trainers/Trainers'

function App() {
  

  return (
    <>
      <div className='app'>
        <Navbar />
        <div className="app-sub">
          <Home />
          <Services />
          <Stories />
          <Facilities />
        </div>
        <Trainers />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App
