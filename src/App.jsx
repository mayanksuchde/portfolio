import {Home, About, Skills, Projects, Contact} from './components';
import './App.css'
import Background from './components/Background';

function App() {

  return (
    <div className='main bg-gradient-to-r from-blue-800 to-[#0E172A]'>
      <Background />
      <Home /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
