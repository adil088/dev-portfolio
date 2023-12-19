import "./App.css";
import Navbar from '../src/components/Navbar'
import Profile from '../src/components/Profile'
import About from '../src/components/About'
import Skills from '../src/components/Skills'
import Projects from '../src/components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
