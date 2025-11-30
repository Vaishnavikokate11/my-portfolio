import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
                <Footer />
              </main>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
