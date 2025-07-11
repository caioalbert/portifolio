import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
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

  const experiences = [
    {
      id: 1,
      company: "AWS",
      position: "Cloud Developer",
      period: "Jan 2023 - Presente",
      location: "São Paulo, SP",
      description: [
        "Desenvolvimento e manutenção de soluções em nuvem utilizando serviços AWS",
        "Implementação de arquiteturas serverless com Lambda, API Gateway e DynamoDB",
        "Automação de infraestrutura utilizando CloudFormation e CDK",
        "Otimização de custos e performance de aplicações em nuvem"
      ],
      technologies: ["AWS", "Node.js", "Python", "Terraform", "Docker"]
    },
    {
      id: 2,
      company: "Microsoft",
      position: "Desenvolvedor Full Stack",
      period: "Mar 2021 - Dez 2022",
      location: "Remoto",
      description: [
        "Desenvolvimento de aplicações web utilizando React e .NET Core",
        "Implementação de microsserviços e APIs RESTful",
        "Integração com Azure DevOps para CI/CD",
        "Participação em projetos ágeis com metodologia Scrum"
      ],
      technologies: ["React", "TypeScript", ".NET Core", "SQL Server", "Azure"]
    },
    {
      id: 3,
      company: "Google",
      position: "Desenvolvedor Frontend",
      period: "Jun 2019 - Fev 2021",
      location: "Belo Horizonte, MG",
      description: [
        "Desenvolvimento de interfaces responsivas e acessíveis",
        "Implementação de componentes reutilizáveis com React",
        "Otimização de performance e SEO",
        "Colaboração com designers para implementação de UI/UX"
      ],
      technologies: ["JavaScript", "React", "Redux", "SASS", "Webpack"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="experience" className="experience-section" ref={ref}>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h4><span>Minha Jornada</span></h4>
        <h2>Experiência Profissional</h2>
      </motion.header>

      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {experiences.map((exp) => (
          <motion.div 
            className="timeline-item" 
            key={exp.id}
            variants={itemVariants}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <h3>{exp.position}</h3>
                <div className="company-name">
                  <FaBriefcase className="icon" />
                  <span>{exp.company}</span>
                </div>
                <div className="experience-meta">
                  <div className="period">
                    <FaCalendarAlt className="icon" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="location">
                    <FaMapMarkerAlt className="icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-description">
                <ul>
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="technologies-used">
                <h4>Tecnologias utilizadas:</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
