import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

// Importando imagens diretamente
import project1Image from '../../assets/images/ThumbnailProject01.png';
import project2Image from '../../assets/images/ThumbnailProject02.png';
import project3Image from '../../assets/images/ThumbnailProject03.png';
import project4Image from '../../assets/images/ThumbnailProject04.png';
import project5Image from '../../assets/images/ThumbnailProject05.png';
import project6Image from '../../assets/images/ThumbnailProject06.png';

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const projectsData = [
    {
      id: 1,
      title: 'Finance-IA',
      description: 'Aplicação de finanças com inteligência artificial para análise de dados e previsões',
      image: project1Image,
      url: 'https://finance-ia-eight.vercel.app/login',
      github: 'https://github.com/caioalbert/finance-ia'
    },
    {
      id: 2,
      title: 'Tech News',
      description: 'Homepage de um portal de notícias sobre a área de tecnologia',
      image: project2Image,
      url: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Página de Receita',
      description: 'Página com o passo a passo de uma receita para cupcakes',
      image: project3Image,
      url: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Zingen',
      description: 'Landing Page completa e responsiva de um aplicativo de Karaokê',
      image: project4Image,
      url: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Refund',
      description: 'Um sistema para pedido e acompanhamento de reembolso',
      image: project5Image,
      url: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Página de turismo',
      description: 'Página com as principais informações para quem quer viajar para Busan',
      image: project6Image,
      url: '#',
      github: '#'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="jobs" ref={ref}>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h4><span>Meu Trabalho</span></h4>
        <h2>Veja os projetos em destaque</h2>
      </motion.header>

      <motion.div 
        className="projects"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {projectsData.map((project) => (
          <motion.div 
            className="cards" 
            key={project.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt />
                  <span>Ver projeto</span>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            <div className="description flex-col-8">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
