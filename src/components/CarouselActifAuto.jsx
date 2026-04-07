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
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  if (projetsActifs.length === 0) return null;

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* En-tête */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-4 block">In Development</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Projets <span className="text-gradient">Actifs</span>
          </h2>
          <div className="w-20 h-1.5 bg-premium-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto font-inter">
            Un aperçu des innovations sur lesquelles je travaille actuellement
          </p>
        </motion.div>

        {/* Carousel Hub */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => (isHovering.current = true)}
          onMouseLeave={() => (isHovering.current = false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="w-full"
              >
                <div className="glass-card p-12 md:p-16 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8">
                    <span className="text-white/10 text-8xl font-black leading-none">0{current + 1}</span>
                  </div>

                  <div className="relative z-10 flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-24 h-24 bg-premium-gradient rounded-[2rem] flex items-center justify-center shadow-glow flex-shrink-0">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-3xl md:text-5xl font-black text-white tracking-widest">{projetsActifs[current].titre}</h3>
                        <div className="flex flex-wrap gap-4">
                          <span className="px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {projetsActifs[current].equipe}
                          </span>
                          <span className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            Live Build
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em]">Missions & Objectifs</h4>
                        <p className="text-gray-400 font-inter leading-relaxed">
                          {projetsActifs[current].description || "Construction d'une architecture résiliente et d'une interface utilisateur intuitive pour une expérience premium sans compromis."}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-xs font-black text-white/30 uppercase tracking-[0.3em]">Avancement Technique</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-end">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-400">Core Engine</span>
                            <span className="text-2xl font-black text-white leading-none">75%</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              className="h-full bg-premium-gradient rounded-full shadow-glow-sm"
                              initial={{ width: 0 }}
                              animate={{ width: "75%" }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-10 border-t border-white/5 flex flex-wrap gap-3">
                      {([...(Array.isArray(projetsActifs[current].langage.frontend) ? projetsActifs[current].langage.frontend : [projetsActifs[current].langage.frontend]),
                      ...(Array.isArray(projetsActifs[current].langage.backend) ? projetsActifs[current].langage.backend : [projetsActifs[current].langage.backend])]
                      ).filter(Boolean).map((tech, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-white/40 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-8 -right-8 flex justify-between pointer-events-none hidden lg:flex">
            <button onClick={prevSlide} className="w-16 h-16 pointer-events-auto glass-card flex items-center justify-center text-white/40 hover:text-white transition-all hover:bg-white/10 border-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="w-16 h-16 pointer-events-auto glass-card flex items-center justify-center text-white/40 hover:text-white transition-all hover:bg-white/10 border-white/10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-12 gap-4">
            {projetsActifs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === current ? "w-12 bg-primary-400 shadow-glow" : "w-4 bg-white/10"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselActifAuto;
