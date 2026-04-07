import React, { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import data from "../data/data";
import { motion, AnimatePresence } from "framer-motion";

const Formation = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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
    <section className="section-padding relative" id='formation'>
      <div className="container-custom">
        {/* En-tête */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-400 font-semibold tracking-widest uppercase text-xs mb-4 block">Education</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Mon <span className="text-gradient">Parcours</span> Académique
          </h2>
          <div className="w-20 h-1.5 bg-premium-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto font-inter">
            Les étapes clés de mon apprentissage et mes certifications
          </p>
        </motion.div>

        <AnimatedSection>
          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Ligne verticale - centrée sur desktop, gauche sur mobile */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden sm:block"></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12 md:space-y-24"
            >
              {data.formation.map((formation, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Point de timeline central */}
                  <div className="absolute left-6 md:left-1/2 top-10 md:top-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-bg -translate-x-1/2 -content-[''] hidden sm:block z-10 shadow-glow"></div>

                  {/* Date - Desktop side */}
                  <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "text-left pl-12" : "text-right pr-12"}`}>
                    <span className="text-3xl font-black text-white/10 uppercase tracking-tighter">
                      {formation.date}
                    </span>
                  </div>

                  {/* Carte de formation */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      className="glass-card p-8 group relative overflow-hidden h-full"
                      whileHover={{ y: -5 }}
                    >
                      {/* Date mobile */}
                      <div className="md:hidden flex items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-xs font-bold uppercase tracking-widest">
                          {formation.date}
                        </span>
                      </div>

                      <div className="flex flex-col gap-6">
                        <div className="space-y-4">
                          <div className="w-14 h-14 bg-premium-gradient rounded-xl flex items-center justify-center shadow-glow mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                          </div>

                          <h3 className="text-2xl font-black text-white group-hover:text-primary-400 transition-colors leading-tight">
                            {formation.titre}
                          </h3>

                          <div className="flex items-center gap-2 text-primary-300 font-bold text-sm tracking-wide uppercase">
                            <span className="w-6 h-px bg-primary-400/30"></span>
                            {formation.organisateur}
                          </div>

                          <p className="text-gray-400 text-sm leading-relaxed font-inter line-clamp-4">
                            {formation.description}
                          </p>
                        </div>

                        {/* Pied de carte avec badge certificat */}
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <span className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${formation.certificat ? "text-emerald-400" : "text-white/30"
                            }`}>
                            <div className={`w-2 h-2 rounded-full ${formation.certificat ? "bg-emerald-400" : "bg-white/10"}`}></div>
                            {formation.certificat ? "Diplômé" : "En cours"}
                          </span>

                          {formation.certificat && (
                            <button
                              onClick={() => setSelectedCert(formation.certificat)}
                              className="text-[10px] items-center flex gap-1 font-black text-white/50 hover:text-white transition-colors tracking-tighter uppercase font-mono border-b border-transparent hover:border-white/20"
                            >
                              <span>Voir le Certificat</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>

      {/* Modal Certificat */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <img
                src={selectedCert}
                alt="Certificat"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Formation
