import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import './index.css';
import ThemeToggle from './components/ThemeToggle';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <div className="dark:bg-dark-purple">
            <ThemeToggle />
            <Header />
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </div>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
