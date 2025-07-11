import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Services.css';

// Importando imagens diretamente
import devicesIcon from '../../assets/logos/Devices.svg';
import hardDrivesIcon from '../../assets/logos/HardDrives.svg';
import infinityIcon from '../../assets/logos/Infinity.svg';

const Services = () => {
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

  const servicesData = [
    {
      id: 1,
      title: 'Websites e Aplicativos',
      description: 'Desenvolvimento de interfaces',
      icon: devicesIcon,
    },
    {
      id: 2,
      title: 'API e banco de dados',
      description: 'Criação de serviços do sistema',
      icon: hardDrivesIcon,
    },
    {
      id: 3,
      title: 'DevOps',
      description: 'Gestão e infraestrutura da aplicação',
      icon: infinityIcon,
    },
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="services" ref={ref}>
      <motion.header 
        className="flex-col-8"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h4><span>Meus serviços</span></h4>
        <h2>Como posso ajudar o seu negócio</h2>
      </motion.header>

      <motion.div 
        className="cards flex gap-24"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {servicesData.map((service) => (
          <motion.div 
            className="card flex-col-20" 
            key={service.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
            }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <img src={service.icon} alt={service.title} />
            </div>

            <div className="description flex-col-8">
              <h3>{service.title}</h3>
              <p className="tx-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
