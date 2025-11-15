import React from 'react'
import { motion } from 'framer-motion'
import data from '../data/data'

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

  // Prendre les 6 premières technologies de data.langages
  const skills = data.langages.slice(0, 6).map(lang => ({
    name: lang.titre,
    level: getProgressPercentage(lang.niveau),
    color: getProgressColor(lang.niveau)
  }));

  return (
    <section id="apropos" className="section-padding bg-gradient-to-b from-dark-surface to-dark-bg" >
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="text-gradient">Propos</span> de Moi
          </h2>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto">
            Découvrez mon parcours, mes compétences et ma passion pour le développement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Section gauche - Photo et contact */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Photo */}
            <div className="relative">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src={data.info.profile}
                  alt="Fodé Momo Soumah - Développeur Full Stack"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-2xl blur opacity-75"></div>
            </div>

            {/* Carte contact */}
            <div className="card-modern">
              <h3 className="text-xl font-bold text-white mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">{data.info.email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">{data.info.phone.join(' / ')}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">Paris, France</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section droite - Description et compétences */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Mon Histoire</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Développeur Full-Stack passionné avec une expertise dans la création d'applications web modernes et responsives. 
                Mon parcours professionnel est guidé par l'amour de la technologie et un désir constant d'apprendre et d'implémenter 
                des solutions innovantes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Je me spécialise dans l'écosystème JavaScript, en construisant des expériences utilisateur fluides et en m'efforçant 
                toujours d'écrire du code propre, efficace et évolutif.
              </p>
            </div>

            {/* Compétences */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Compétences Principales</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="relative w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Aproposdemoi


