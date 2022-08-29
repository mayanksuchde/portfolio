import Home from './Home/Home';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import About from './About/About';
import Background from './Background';
import './App.scss';
import {WindowContextProvider} from './context/WindowSize';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <WindowContextProvider>
          <div className='main'>
              <Home /> 
              <About />
              <Skills />
              <Projects />
              <Contact />
          </div>
          <div className="bg">
            {/* {responsiveBg} */}
            <Background />
          </div>      
        </WindowContextProvider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
