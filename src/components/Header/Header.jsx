import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import './Header.css';

// Importando imagens diretamente
import githubLogo from '../../assets/logos/GitHub.svg';
import htmlLogo from '../../assets/logos/HTML.svg';
import cssLogo from '../../assets/logos/CSS.svg';
import jsLogo from '../../assets/logos/JavaScript.svg';
import reactLogo from '../../assets/logos/React.svg';
import nodeLogo from '../../assets/logos/NodeJs.svg';
import kubernetesLogo from '../../assets/logos/kubernetes.svg';
import dockerLogo from '../../assets/logos/docker.svg';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Detectar se é dispositivo móvel
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar inicialmente
    checkMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile);
    
    // Limpar listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const technologies = [
    { name: 'GitHub', logo: githubLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Node.Js', logo: nodeLogo },
    { name: 'Kubernets', logo: kubernetesLogo },
    { name: 'Docker', logo: dockerLogo },
  ];

  return (
    <motion.header 
      id="info" 
      className={`container ${isMobile ? 'mobile-container' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="header-content"
      >
        <div className="avatar">
          <img
            src="https://github.com/caioalbert.png"
            alt="Foto de perfil"
          />
        </div>

        <h4 className="intro-text">Hello World! Meu nome é <span>Caio Alberto</span> e sou</h4>

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Desenvolvedor Fullstack
        </motion.h1>

        <p className="tx-sm">
          Sou apaixonado por tecnologia des de criança quando vi meu pai programando em pascal,
          fascinado por aprender coisas novas diariamente, e por novos desafios. sempre pronto para o meu proximo nivel! 
        </p>
      </motion.div>

      <motion.nav 
        className="tags"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <ul className="tech-list gap-16 flex">
          {technologies.map((tech, index) => (
            <motion.li 
              key={tech.name}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="tech-item"
            >
              <img src={tech.logo} alt={`logo ${tech.name}`} />
              <span>{tech.name}</span>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <Link
        to="jobs"
        smooth={true}
        duration={500}
        className="scroll-button"
      >
        <motion.button
          id="scroll"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown size={isMobile ? 18 : 24} />
        </motion.button>
      </Link>
    </motion.header>
  );
};

export default Header;
