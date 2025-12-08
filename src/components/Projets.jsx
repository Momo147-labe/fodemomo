import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import data from "../data/data";

const Projets = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-bg to-dark-surface">
      <div className="container-custom">
        <AnimatedSection>
          {/* En-tête de section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="text-gradient">Projets</span>
            </h2>
            <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations, alliant créativité et expertise technique
            </p>
          </motion.div>

          {/* Grille des projets */}
          <motion.div 
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.projets.map((projet, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="relative bg-gradient-to-br from-dark-surface/80 to-dark-surface/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
                aria-labelledby={`proj-${index}-title`}
              >
                {/* Effet de lueur */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400/20 via-primary-500/20 to-primary-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Image du projet */}
                <div className="relative overflow-hidden">
                  <img 
                    src={projet.image} 
                    alt={projet.titre}
                    className="w-full h-56 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Badge statut */}
                  <div className="absolute top-4 left-4">
                    {projet.statut === "terminé" ? (
                      <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-300 px-3 py-1.5 rounded-full text-xs font-medium">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Terminé
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-400/30 text-orange-300 px-3 py-1.5 rounded-full text-xs font-medium">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        En cours
                      </div>
                    )}
                  </div>
                  
                  {/* Badge équipe */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                      {projet.equipe}
                    </span>
                  </div>
                  
                  {/* Overlay avec titre */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 id={`proj-${index}-title`} className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                      {projet.titre}
                    </h3>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 space-y-4">
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {projet.description}
                  </p>

                  {/* Barre de progression pour projets en cours */}
                  {projet.statut === "en_cours" && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Progression</span>
                        <span className="text-xs font-medium text-primary-400">{projet.progression}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-400 to-primary-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${projet.progression}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Technologies compactes */}
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(projet.langage.frontend) 
                      ? projet.langage.frontend 
                      : [projet.langage.frontend]
                    ).map((tech, i) => (
                      <span key={`front-${i}`} className="text-xs font-medium text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {(Array.isArray(projet.langage.backend) 
                      ? projet.langage.backend 
                      : [projet.langage.backend]
                    ).map((tech, i) => (
                      <span key={`back-${i}`} className="text-xs font-medium text-blue-300 bg-blue-400/10 border border-blue-400/20 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    <span className="text-xs font-medium text-purple-300 bg-purple-400/10 border border-purple-400/20 px-2 py-1 rounded-md">
                      {projet.langage.baseDonnees}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <span className="text-xs text-gray-400">Projet personnel</span>
                    </div>
                    
                    {projet.statut === "terminé" ? (
                      <a 
                        href={projet.lien} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 bg-primary-500/10 hover:bg-primary-500/20 border border-primary-400/30 hover:border-primary-400/50 text-primary-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group/btn"
                      >
                        <span>Voir</span>
                        <svg 
                          className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 bg-gray-500/10 border border-gray-400/30 text-gray-400 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                        <span>En développement</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projets;
