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
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <AnimatedSection>
          {/* En-tête de section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-400 font-semibold tracking-widest uppercase text-xs mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Mes <span className="text-gradient">Projets</span>
            </h2>
            <div className="w-20 h-1.5 bg-premium-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto font-inter">
              Une immersion dans mes dernières réalisations numériques
            </p>
          </motion.div>

          {/* Grille des projets */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
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
                  y: -10,
                  transition: { duration: 0.4 }
                }}
                className="glass-card group flex flex-col h-full overflow-hidden"
              >
                {/* Image du projet */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80"></div>

                  {/* Badge statut */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md border border-white/10 shadow-lg ${projet.statut === "terminé"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                      }`}>
                      {projet.statut === "terminé" ? "Conclut" : "En cours"}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black text-white group-hover:text-primary-400 transition-colors duration-300">
                      {projet.titre}
                    </h3>
                    <span className="text-white/30 text-xs font-mono">/ 0{index + 1}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-inter flex-grow">
                    {projet.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {([...(Array.isArray(projet.langage.frontend) ? projet.langage.frontend : [projet.langage.frontend]),
                    ...(Array.isArray(projet.langage.backend) ? projet.langage.backend : [projet.langage.backend]),
                    projet.langage.baseDonnees]
                    ).filter(Boolean).map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-primary-300 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                      {projet.equipe}
                    </span>

                    {projet.statut === "terminé" ? (
                      <a
                        href={projet.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-white transition-colors duration-300 group/btn font-bold text-sm"
                      >
                        VOIR LE PROJET
                        <svg
                          className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/50">
                        BIENTÔT DISPONIBLE
                      </span>
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
