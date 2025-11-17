import React from 'react'
import AnimatedSection from './AnimatedSection'
import data from "../data/data";
import { motion } from "framer-motion";

const Formation = () => {
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
    <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-surface" id='formation'>
      <div className="container-custom">
        {/* En-tête */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Formation</span> & Éducation
          </h2>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto">
            Mon parcours académique et les certifications qui façonnent mon expertise
          </p>
        </motion.div>

        <AnimatedSection>
          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale - cachée sur mobile */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-transparent hidden sm:block"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 md:space-y-12"
            >
              {data.formation.map((formation, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8"
                >
                  {/* Point de timeline */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-glow">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div className="absolute -inset-1 sm:-inset-2 bg-primary-400/20 rounded-full animate-pulse"></div>
                  </div>

                  {/* Carte de formation */}
                  <motion.div 
                    className="flex-1 w-full card-modern group overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 md:gap-6">
                      {/* Contenu */}
                      <div className="lg:col-span-2 space-y-3 md:space-y-4">
                        {/* Badge de date */}
                        <div className="inline-flex items-center gap-2 bg-primary-400/10 text-primary-400 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formation.date}
                        </div>

                        {/* Titre */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-primary-300 transition-colors leading-tight">
                          {formation.titre}
                        </h3>

                        {/* Organisateur */}
                        <div className="flex items-center gap-2 text-dark-text-secondary">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="font-medium text-sm sm:text-base">{formation.organisateur}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {formation.description}
                        </p>

                        {/* Badge de certification */}
                        <div className="inline-flex items-center gap-2 bg-green-400/10 text-green-400 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          {formation.certificat ? "Certifié" : "Non Certifié"}
                        </div>
                      </div>

                      {/* Certificat */}
                      <div className="relative group/cert mt-4 lg:mt-0">
                        <div className="relative overflow-hidden rounded-xl border-2 border-white/10 group-hover/cert:border-primary-400/50 transition-all duration-300">
                          <img 
                            src={formation.certificat}
                            alt={`Certificat ${formation.titre}`}
                            className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover/cert:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                              Voir le certificat
                            </span>
                          </div>
                        </div>
                        
                        {/* Effet de lueur */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-xl blur opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Formation


