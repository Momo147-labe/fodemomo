import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data/data";

const CarouselActifAuto = () => {
  const projetsActifs = data.projets.filter((p) => p.isActive === true);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const isHovering = useRef(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projetsActifs.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projetsActifs.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      if (!isHovering.current) {
        nextSlide();
      }
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  if (projetsActifs.length === 0) return null;

  return (
    <section className="section-padding bg-gradient-to-b from-dark-surface to-dark-bg">
      <div className="container-custom">
        {/* En-tête */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Projets <span className="text-gradient">En Cours</span>
            </h2>
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-dark-text-secondary text-lg">
            Découvrez mes projets actuellement en développement
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => (isHovering.current = true)}
          onMouseLeave={() => (isHovering.current = false)}
        >
          {/* Slides */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: -current * 100 + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projetsActifs.map((proj, index) => (
                <div key={index} className="min-w-full px-4">
                  <motion.div 
                    className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl group overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Effet de lueur d'arrière-plan */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Header compact */}
                    <div className="relative flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                            {proj.titre}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-full">
                              🚀 En cours
                            </span>
                            <span className="text-xs text-orange-300 bg-orange-400/10 px-2 py-1 rounded-full">
                              {proj.equipe}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stack technique en ligne */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {/* Frontend */}
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                          <span className="text-xs font-medium text-emerald-400">Frontend:</span>
                        </div>
                        {(Array.isArray(proj.langage.frontend) ? proj.langage.frontend : [proj.langage.frontend]).map((tech, i) => (
                          <span key={i} className="text-xs bg-emerald-400/10 text-emerald-300 px-2 py-1 rounded-md border border-emerald-400/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {/* Backend */}
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-xs font-medium text-blue-400">Backend:</span>
                        </div>
                        {(Array.isArray(proj.langage.backend) ? proj.langage.backend : [proj.langage.backend]).map((tech, i) => (
                          <span key={i} className="text-xs bg-blue-400/10 text-blue-300 px-2 py-1 rounded-md border border-blue-400/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {/* Database */}
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-xs font-medium text-purple-400">DB:</span>
                        </div>
                        <span className="text-xs bg-purple-400/10 text-purple-300 px-2 py-1 rounded-md border border-purple-400/20">
                          {proj.langage.baseDonnees}
                        </span>
                      </div>
                    </div>

                    {/* Progression avec animation */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-300">Avancement</span>
                        <span className="text-sm text-primary-400 font-bold">75%</span>
                      </div>
                      <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full shadow-lg"
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Action avec style moderne */}
                    <div className="flex items-center justify-between">
                      <a 
                        href={proj.lien} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <span>Voir le projet</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>Mise à jour récente</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {projetsActifs.length > 1 && (
            <>
              <motion.button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 backdrop-blur-sm border border-primary-400/30 rounded-full flex items-center justify-center text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 backdrop-blur-sm border border-primary-400/30 rounded-full flex items-center justify-center text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </>
          )}
        </div>

        {/* Indicateurs */}
        {projetsActifs.length > 1 && (
          <div className="flex justify-center mt-8 gap-3">
            {projetsActifs.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === current 
                    ? "bg-primary-400 shadow-glow" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CarouselActifAuto;
