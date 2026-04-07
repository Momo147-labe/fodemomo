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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with custom gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/40 to-dark-bg"></div>

      <div className="relative container-custom px-6 z-10">
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Photo de profil avec effet glassmorphism */}
          <motion.div
            className="relative mb-4 mt-24"
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
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-primary-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Développeur Full-Stack</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight tracking-tight">
              <span className="text-white">Fodé Momo</span>
              <br />
              <span className="text-gradient">Soumah</span>
            </h1>
          </motion.div>

          {/* Sous-titre */}
          <motion.p
            className="text-lg md:text-xl text-dark-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-inter"
            variants={itemVariants}
          >
            Je conçois et développe des <span className="text-white font-medium">solutions numériques innovantes</span> et performantes, en alliant design élégant et technologies de pointe comme
            <span className="text-primary-400 font-semibold"> React & Node.js</span>.
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
              className="btn-primary cursor-pointer px-8 py-4 text-base shadow-glow hover:shadow-glow-lg transition-all"
            >
              <span>Découvrir mes projets</span>
            </Link>

            <Link
              to="contact"
              smooth
              duration={500}
              className="btn-secondary cursor-pointer px-8 py-4 text-base backdrop-blur-sm transition-all"
            >
              <span>Me contacter</span>
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
