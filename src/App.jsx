import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de recursos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div 
          className="loader"
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="loader-circle"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.h2
            animate={{ 
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Carregando...
          </motion.h2>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <Projects />
            <Services />
            <Contact />
          </main>
          <footer>
            <p>© 2025 Caio Alberto - Desenvolvedor Fullstack</p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
