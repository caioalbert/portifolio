import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
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

  const socialLinks = [
    {
      id: 'linkedin',
      name: 'Linkedin',
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/caioalbert/',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      url: 'https://www.instagram.com/caioalbert/',
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/caioalbert',
    },
    {
      id: 'email',
      name: 'E-mail',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:caioalbert@example.com',
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.header 
        className="flex-col-8"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h4>Contato</h4>
        <h2>Gostou do meu trabalho?</h2>
        <p className="tx-md">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>
      </motion.header>

      <motion.div 
        className="links grid gap-16"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {socialLinks.map((link) => (
          <motion.a 
            href={link.url} 
            className="inherit" 
            key={link.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-links" id={link.id}>
              {link.icon}
              <p className="tx-md">{link.name}</p>
              <FaExternalLinkAlt size={16} />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
