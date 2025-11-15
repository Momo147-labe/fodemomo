import data from "../data/data";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const Langages = () => {
  const getProgressPercentage = (niveau) => {
    const niveauMap = {
      'debutant': 25,
      'intermediaire': 50,
      'avance': 75,
      'expert': 90,
      'maitre': 95
    };
    return niveauMap[niveau?.toLowerCase()] || 50;
  };

  const getProgressColor = (niveau) => {
    const colorMap = {
      'debutant': 'from-red-400 to-red-600',
      'intermediaire': 'from-yellow-400 to-yellow-600',
      'avance': 'from-blue-400 to-blue-600',
      'expert': 'from-green-400 to-green-600',
      'maitre': 'from-purple-400 to-purple-600'
    };
    return colorMap[niveau?.toLowerCase()] || 'from-primary-400 to-primary-600';
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-dark-surface to-dark-bg">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technologies</span> & Compétences
          </h2>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto">
            Une collection d'outils et technologies que j'utilise pour donner vie aux idées
          </p>
        </motion.div>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.langages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-modern group cursor-pointer overflow-hidden"
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <img 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                      src={lang.logo} 
                      alt={lang.titre}
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {lang.titre}
                  </h3>

                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>{lang.annee} ans</span>
                    <span>{lang.nbreProjet} projets</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-300">Niveau</span>
                      <span className="text-sm font-bold text-primary-400">{lang.niveau}</span>
                    </div>
                    
                    <div className="relative w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getProgressColor(lang.niveau)} rounded-full shadow-lg`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${getProgressPercentage(lang.niveau)}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                    
                    <div className="text-right">
                      <motion.span 
                        className="text-xs font-medium text-primary-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                        viewport={{ once: true }}
                      >
                        {getProgressPercentage(lang.niveau)}%
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Langages;
