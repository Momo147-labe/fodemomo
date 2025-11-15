import { motion } from "framer-motion";
import { Link } from "react-scroll";
import data from "../data/data";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Particules animées */}
      <div className="particle p1"></div>
      <div className="particle p2"></div>
      <div className="particle p3"></div>
      <div className="particle p4"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/20 to-dark-bg"></div>
      
      <div className="relative container-custom section-padding">
        <motion.div 
          className="flex flex-col items-center justify-center min-h-screen text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Photo de profil avec effet glassmorphism */}
          <motion.div 
            className="relative mb-8"
            variants={itemVariants}
          >
            <div className="relative">
              <img 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-glow" 
                src={data.info.profile}
                alt="Fodé Momo Soumah - Full Stack Developer"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-primary-400/60 ring-offset-4 ring-offset-transparent animate-pulse-slow"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-400/20 to-purple-500/20 blur-xl animate-float"></div>
            </div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="block text-white mb-2">Salut, je suis</span>
            <span className="text-gradient">Fodé Momo Soumah</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            className="text-lg md:text-xl text-dark-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            <span className="font-semibold text-primary-400">Développeur Full-Stack</span> passionné par la création d'expériences numériques exceptionnelles avec 
            <span className="text-white font-medium"> React, React Native & Node.js</span>
          </motion.p>

          {/* Badges de compétences */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={itemVariants}
          >
            {['React', 'Node.js', 'React Native', 'MongoDB'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-primary-300 hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Boutons d'action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              to="projects"
              smooth
              duration={500}
              className="btn-primary cursor-pointer inline-flex items-center gap-2"
            >
              <span>Voir mes projets</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              to="contact"
              smooth
              duration={500}
              className="btn-secondary cursor-pointer inline-flex items-center gap-2"
            >
              <span>Me contacter</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </motion.div>

          {/* Indicateur de scroll */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-sm font-medium">Découvrir</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
