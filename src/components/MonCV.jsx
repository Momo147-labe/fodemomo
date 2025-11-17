import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import data from '../data/data';

// --- Composants Réutilisables ---

// Composant pour un élément de contact
const ContactItem = ({ icon, text }) => (
  <motion.div 
    className="flex items-center mb-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
    whileHover={{ x: 5 }}
  >
    <span className="mr-3 text-lg text-primary-400">{icon}</span>
    <p className="text-sm text-gray-300">{text}</p>
  </motion.div>
);

// Composant pour la barre de niveau de compétence
const SkillItem = ({ name, level }) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium text-white">{name}</p>
        <span className="text-xs text-primary-400 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div 
          className="bg-gradient-to-r from-primary-400 to-purple-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

// Composant pour le titre de section
const SectionTitle = ({ text }) => (
  <motion.h2 
    className="relative text-xl font-bold mb-6 text-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="relative z-10">{text}</span>
    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-purple-500"></div>
  </motion.h2>
);

// Composant pour un élément de la chronologie
const TimelineItem = ({ years, title, description, isLast = false }) => (
  <motion.div 
    className={`flex relative ${!isLast ? 'pb-8' : ''}`}
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
  >
    {/* Ligne verticale */}
    {!isLast && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-0.5 bg-gradient-to-b from-primary-400 to-purple-500 ml-5 opacity-50"></div>
      </div>
    )}

    {/* Cercle */}
    <div className="flex-shrink-0 relative">
      <div className="w-4 h-4 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full mt-1.5 border-2 border-dark-bg relative z-10 shadow-glow"></div>
    </div>
    
    <div className="ml-6 flex-grow p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="text-sm font-semibold text-primary-400 mb-2">{years}</div>
      <h4 className="text-base font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);


// --- Composant Principal du CV ---

const CV = () => {
  // Référence pour cibler le contenu du CV
  const cvRef = useRef(null);

  /**
   * Fonction pour gérer le téléchargement du CV en PDF.
   */
  const handleDownloadPDF = () => {
    const input = cvRef.current;
    if (!input) return;

    // 1. Convertir l'élément HTML en toile (canvas)
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); 
      
      const imgWidth = 210; // Largeur A4 en mm
      const pageHeight = 297; // Hauteur A4 en mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;

      // 2. Ajouter l'image au PDF (gestion du contenu sur plusieurs pages)
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      // 3. Télécharger le fichier
      pdf.save(`CV_${data.info.name.replace(' ', '_')}.pdf`);
    });
  };

  /**
   * Fonction pour gérer l'impression du CV.
   */
  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="bg-dark-bg min-h-screen p-8">
      
      {/* Boutons d'action */}
      <motion.div 
        className="max-w-6xl mx-auto mb-8 flex justify-end space-x-4 print-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={handlePrint}
          className="btn-secondary flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0l-1.5 3.5h13l-1.5-3.5m-10 0V9a2 2 0 012-2h6a2 2 0 012 2v8m-6 0h6m-3-1v-4"></path>
          </svg>
          Imprimer
        </motion.button>
        <motion.button
          onClick={handleDownloadPDF}
          className="btn-primary flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Télécharger PDF
        </motion.button>
      </motion.div>

      {/* Contenu du CV */}
      <motion.div 
        ref={cvRef} 
        className="max-w-6xl mx-auto bg-dark-card backdrop-blur-sm border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        {/* En-tête avec gradient */}
        <header className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-purple-500/20 animate-pulse"></div>
          <div className="relative z-10">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {data.info.name}
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 font-medium"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Développeur Full-Stack
            </motion.p>
          </div>
        </header>

        {/* Corps principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          
          {/* Colonne de gauche */}
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            
            {/* Photo de profil */}
            <div className="flex justify-center">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={data.info.profile}
                  alt="Profile" 
                  className="w-40 h-40 rounded-2xl object-cover border-4 border-primary-400/50 shadow-glow" 
                />
                <div className="absolute inset-0 rounded-2xl ring-4 ring-primary-400/30 ring-offset-4 ring-offset-transparent animate-pulse-slow"></div>
              </motion.div>
            </div>

            {/* Contact */}
            <section>
              <SectionTitle text="CONTACT" />
              <ContactItem icon="📧" text={data.info.email} />
              <ContactItem icon="📞" text={data.info.phone} />
              <ContactItem icon="📍" text={data.info.address} />
              <ContactItem icon="🌐" text={data.info.website} />
            </section>

            {/* Compétences */}
            <section>
              <SectionTitle text="COMPÉTENCES" />
              <SkillItem name="React/React Native" level={95} />
              <SkillItem name="Node.js" level={90} />
              <SkillItem name="JavaScript/TypeScript" level={92} />
              <SkillItem name="MongoDB" level={85} />
              <SkillItem name="UI/UX Design" level={80} />
            </section>

            {/* Langues */}
            <section>
              <SectionTitle text="LANGUES" />
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Français</span>
                  <span className="text-primary-400">Natif</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">Anglais</span>
                  <span className="text-primary-400">Courant</span>
                </div>
              </div>
            </section>

          </motion.div>

          {/* Colonne de droite */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >

            {/* À propos */}
            <section>
              <SectionTitle text="À PROPOS" />
              <motion.p 
                className="text-gray-300 leading-relaxed text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {data.info.bio}
              </motion.p>
            </section>

            {/* Formation */}
            <section>
              <SectionTitle text="FORMATION" />
              <div className="space-y-6">
                {data.education?.map((edu, index) => (
                  <TimelineItem 
                    key={index}
                    years={edu.period}
                    title={edu.degree}
                    description={edu.institution}
                    isLast={index === data.education.length - 1}
                  />
                )) || (
                  <TimelineItem 
                    years="2020 - 2024"
                    title="Formation en Développement Web"
                    description="Autodidacte - Spécialisation Full-Stack JavaScript"
                    isLast={true}
                  />
                )}
              </div>
            </section>

            {/* Expérience */}
            <section>
              <SectionTitle text="EXPÉRIENCE" />
              <div className="space-y-6">
                {data.experience?.map((exp, index) => (
                  <TimelineItem 
                    key={index}
                    years={exp.period}
                    title={exp.position}
                    description={`${exp.company} - ${exp.description}`}
                    isLast={index === data.experience.length - 1}
                  />
                )) || (
                  <TimelineItem 
                    years="2022 - Présent"
                    title="Développeur Full-Stack Freelance"
                    description="Développement d'applications web et mobiles avec React, Node.js et React Native"
                    isLast={true}
                  />
                )}
              </div>
            </section>

            {/* Projets récents */}
            <section>
              <SectionTitle text="PROJETS RÉCENTS" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.projects?.slice(0, 4).map((project, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="font-semibold text-white mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-primary-400/20 text-primary-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )) || (
                  <div className="col-span-2 text-center text-gray-400">
                    <p>Projets en cours de développement...</p>
                  </div>
                )}
              </div>
            </section>

          </motion.div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-primary-600/20 to-purple-600/20 backdrop-blur-sm border-t border-white/10 p-6 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 {data.info.name} - Développeur Full-Stack
          </p>
        </footer>
      </motion.div>
    </div>
  );
};

export default CV;
