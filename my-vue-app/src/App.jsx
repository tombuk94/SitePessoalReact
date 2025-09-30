import { useEffect, useState } from 'react';
import Capa from './components/Header.jsx';
import Profile from './components/Profile.jsx';
import Experience from './components/Experiences.jsx';
import Abilities from './components/Abilities.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Menu from './components/Menu.jsx';
import MenuMobile from './components/MenuMobile.jsx';
import StickyMenu from './components/StickyMenu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const menu = document.getElementById('menu');

    const handleScroll = () => {
      if (!menu) return;
      const top = menu.getBoundingClientRect().top + window.scrollY;
      const shouldShowSticky = window.scrollY >= top;

      setShowSticky(shouldShowSticky);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Capa />
      {!showSticky && <Menu />}        {/* Menu absolute visível até o scroll passar */}
      {showSticky && <StickyMenu />}  {/* Menu fixo aparece depois */}
      <MenuMobile />
      <Profile />
      <Experience />
      <Abilities />
      <Projects />
      <Contact />      
    </>
  );
}

export default App;
