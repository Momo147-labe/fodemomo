import React from 'react'
import { motion } from 'framer-motion'
import data from '../data/data'
import AnimatedSection from './AnimatedSection'

const Aproposdemoi = () => {
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

  const allSkills = Object.values(data.skills).flat();
  const skills = allSkills.slice(0, 6).map(lang => ({
    name: lang.titre,
    level: getProgressPercentage(lang.niveau),
  }));

  return (
    <section id="apropos" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary-400 font-semibold tracking-widest uppercase text-xs mb-4 block">Discovery</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            À <span className="text-gradient">Propos</span> de Moi
          </h2>
          <div className="w-20 h-1.5 bg-premium-gradient mx-auto rounded-full mb-6"></div>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto font-inter">
            Une passion pour l'innovation numérique et l'excellence technique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Section gauche - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-premium-gradient rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={data.info.profile}
                  alt={data.info.nom}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>

                {/* Floating Stats */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-card p-6 flex justify-around items-center backdrop-blur-3xl border-white/20">
                    <div className="text-center">
                      <p className="text-2xl font-black text-white leading-none">05+</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Expérience</p>
                    </div>
                    <div className="w-px h-8 bg-white/10"></div>
                    <div className="text-center">
                      <p className="text-2xl font-black text-white leading-none">20+</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Projets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section droite - Content */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white tracking-tight">Mon Histoire</h3>
              <p className="text-gray-400 leading-relaxed text-lg font-inter">
                {data.info.description}
              </p>
              <p className="text-gray-400 leading-relaxed font-inter">
                Basé à <span className="text-white font-bold">Labé, Guinée</span>, je combine créativité visuelle et rigueur technique pour concevoir des solutions web qui marquent les esprits. Mon objectif est de transformer des idées complexes en expériences utilisateur simples et mémorables.
              </p>
            </div>

            {/* Micro Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-black text-white/60 uppercase tracking-widest">{skill.name}</span>
                    <span className="text-sm font-black text-primary-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      className="h-full bg-premium-gradient rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Langues & Hobbies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <h4 className="text-xs font-black text-white/60 uppercase tracking-widest">Langues</h4>
                <div className="space-y-3">
                  {data.langues.map((l, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                      <span className="text-sm font-bold text-white">{l.langue}</span>
                      <span className="text-xs font-bold text-primary-400/80 uppercase tracking-wider">{l.niveau}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-black text-white/60 uppercase tracking-widest">Centres d'intérêt</h4>
                <div className="flex flex-wrap gap-3">
                  {data.hobbies.map((h, i) => (
                    <span key={i} className="glass-card px-4 py-2 text-xs font-bold text-gray-300 flex items-center gap-2 border-white/5 hover:border-primary-500/30 transition-colors">
                      <span className="text-lg">{h.icone}</span> {h.nom}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
              <a href={`mailto:${data.info.email}`} className="glass-card px-6 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors border-white/10">
                <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span className="text-xs font-bold text-white tracking-wider">EMAIL ME</span>
              </a>
              <a href={`tel:${data.info.phone[0]}`} className="glass-card px-6 py-3 flex items-center gap-3 hover:bg-white/10 transition-colors border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-xs font-bold text-white tracking-wider">CALL ME</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Aproposdemoi
