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
      company: "FitBank",
      position: "DevOps Engineer",
      period: "Maio de 2024 - Presente (1 ano 3 meses)",
      location: "Fortaleza, Ceará, Brasil",
      description: [
        "Desenvolvimento de Shell Scripts e Python para automação de tarefas",
        "Desenvolvimento e manutenção de Pipelines de CI/CD",
        "Conhecimento de Docker e técnicas de containerização de aplicações",
        "Prática extensa com Kubernetes",
        "Manutenção em servidores Windows Server e configuração de servidores web IIS",
        "Gerenciamento de arquivos de configuração, variáveis de ambiente e secrets",
        "Monitoramento de aplicações e telemetria com Elastic Stack, Prometheus/Grafana, Zabbix",
        "Uso de metodologias ágeis",
        "Versado em Git e práticas que compõem o GitFlow",
        "Conhecimento da cultura GitOps com ArgoCD e Kustomize",
        "Conhecimento da linguagem C# e a plataforma .NET e seu ecossistema",
        "Conhecimento de funcionamento de API's, arquitetura REST, protocolo HTTP",
        "Uso de ferramentas de teste como Postman e banco de dados MongoDB",
        "Governança e documentação através de Wiki's",
        "AWS (EKS, EC2, ECR, etc)"
      ],
      technologies: ["Python", "Shell Script", "Docker", "Kubernetes", "CI/CD", "AWS", "Prometheus", "Grafana", "ArgoCD", "Git"]
    },
    {
      id: 2,
      company: "Rocket app tec",
      position: "Desenvolvedor WEB",
      period: "Abril de 2022 - Maio de 2024 (2 anos 2 meses)",
      location: "Fortaleza, Ceará, Brasil",
      description: [
        "Atuei como desenvolvedor web em projetos de backend e frontend, com foco na construção de APIs RESTful utilizando Node.js e Ruby on Rails",
        "Garantia de integração segura e rastreável com serviços externos",
        "No frontend, trabalhei com React, Vue.js, TailwindCSS, EJS e Next.js, criando interfaces modernas, responsivas e otimizadas para SEO",
        "Utilização de TypeScript para garantir maior qualidade e segurança no código",
        "Participação na automação de pipelines CI/CD com Azure DevOps, GitHub Actions e GitLab CI",
        "Containerização com Docker e orquestração via Kubernetes (manifests, ingress, ConfigMaps, secrets)",
        "Implementação de práticas GitOps com ArgoCD e Kustomize",
        "Automação de infraestrutura com Terraform em ambientes AWS, GCP e Azure",
        "Atuação com ferramentas de monitoramento como Prometheus, Grafana e ELK Stack",
        "Apoio ao time em processos de deploy, rollback, troubleshooting e suporte pós-produção",
        "Trabalho em times ágeis, contribuindo com documentação técnica em wikis e padronização de processos",
        "Foco em estabilidade, performance e entregas contínuas"
      ],
      technologies: ["Node.js", "Ruby on Rails", "React", "Vue.js", "Next.js", "TypeScript", "Docker", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"]
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
