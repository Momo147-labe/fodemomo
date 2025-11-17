import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// --- Composants Réutilisables ---

// Composant pour un élément de contact
const ContactItem = ({ icon, text }) => (
  <div className="flex items-center mb-2">
    <span className="mr-3 text-lg text-blue-600">{icon}</span>
    <p className="text-sm text-gray-700">{text}</p>
  </div>
);

// Composant pour la barre de niveau de compétence
const SkillItem = ({ name, level }) => {
  const dots = Array(5).fill(0).map((_, i) => (
    <span 
      key={i} 
      className={`inline-block w-2 h-2 rounded-full mx-0.5 ${i < level ? 'bg-blue-600' : 'bg-gray-300'}`}
    ></span>
  ));

  return (
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm font-medium">{name}</p>
      <div className="flex">{dots}</div>
    </div>
  );
};

// Composant pour le titre de section à droite
const SectionTitle = ({ text }) => (
  <h2 className="bg-blue-600 text-white text-lg font-bold p-2 mb-4 uppercase rounded-md inline-block">
    {text}
  </h2>
);

// Composant pour un élément de la chronologie (Éducation/Expérience)
const TimelineItem = ({ years, title, description, isLast = false }) => (
  <div className={`flex relative ${!isLast ? 'pb-8' : ''}`}>
    
    {/* Ligne verticale de la chronologie */}
    {!isLast && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-0.5 bg-blue-300 ml-5"></div>
      </div>
    )}

    {/* Cercle et contenu */}
    <div className="flex-shrink-0 relative">
      <div className="w-3 h-3 bg-blue-600 rounded-full mt-1.5 border-2 border-white relative z-10"></div>
    </div>
    
    <div className="ml-6 flex-grow">
      <div className="text-sm font-semibold text-blue-600 mb-1">{years}</div>
      <h4 className="text-base font-bold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 leading-snug">{description}</p>
    </div>
  </div>
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
      pdf.save('CV_Harry_Nelson.pdf');
    });
  };

  /**
   * Fonction pour gérer l'impression du CV.
   */
  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="bg-gray-100 min-h-screen p-8">
      
      {/* --- Boutons d'action (Imprimer / Télécharger) --- */}
      {/* La classe 'print-hidden' sera ciblée par le CSS pour masquer les boutons à l'impression */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-end space-x-4 print-hidden">
        <button
          onClick={handlePrint}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md"
        >
          {/* Icône d'impression (SVG) */}
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m0 0l-1.5 3.5h13l-1.5-3.5m-10 0V9a2 2 0 012-2h6a2 2 0 012 2v8m-6 0h6m-3-1v-4"></path></svg>
          Imprimer
        </button>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md"
        >
          {/* Icône de téléchargement (SVG) */}
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Télécharger PDF
        </button>
      </div>

      {/* --- Contenu du CV (Ref pour PDF) --- */}
      <div 
        ref={cvRef} 
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden"
      >
        
        {/* En-tête (approximation de la vague) */}
        <header className="bg-blue-800 p-6">{/* Espace réservé pour la vague de design */}</header>

        {/* Corps principal : deux colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* Colonne de gauche : Contact, Skills, Hobbies */}
          <div className="md:col-span-1 bg-blue-50 p-6 relative">
            
            {/* Vague de design en haut à gauche (approximation visuelle Tailwind) */}
            <div className="absolute top-0 left-0 w-full h-1/4 bg-blue-600 transform -skew-y-3 origin-top-left -translate-y-1/2 md:hidden"></div>

            {/* Photo de profil */}
            <div className="flex justify-center mb-6 mt-4 md:mt-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                {/* REMPLACEZ CECI PAR LE CHEMIN DE VOTRE PROPRE IMAGE */}
                <img src="/path/to/your/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Informations de contact */}
            <section className="mb-8 pt-4">
              <h3 className="text-xl font-semibold mb-3 border-b pb-1 text-blue-800 uppercase">CONTACT</h3>
              <ContactItem icon="📧" text="helpshared@gmail.com" />
              <ContactItem icon="📞" text="+0112 3456 7890" />
              <ContactItem icon="📍" text="Longstret 123 Privince, Country 01234" />
              <ContactItem icon="🌐" text="WWW.HELPSHARED.COM" />
            </section>

            {/* Compétences (Skills) */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3 border-b pb-1 text-blue-800 uppercase">SKILLS</h3>
              <SkillItem name="Web design" level={5} />
              <SkillItem name="Graphic design" level={4} />
              <SkillItem name="Ui design" level={5} />
              <SkillItem name="Drawing" level={3} />
              <SkillItem name="Animation" level={4} />
            </section>

            {/* Loisirs (Hobbies) */}
            <section>
              <h3 className="text-xl font-semibold mb-3 border-b pb-1 text-blue-800 uppercase">HOBBIES</h3>
              <p className="text-sm">Football, Writing, Music, Travel</p>
            </section>

          </div>

          {/* Colonne de droite : Bio, Éducation et Expérience */}
          <div className="md:col-span-2 p-8">

            {/* Titre et Profession */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 uppercase">HARRY NELSON</h1>
              <p className="text-xl text-blue-600 font-medium">GRAPHIC DESIGNER</p>
            </div>

            {/* À propos de moi (About Me) */}
            <section className="mb-8">
              <SectionTitle text="ABOUT ME" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            {/* Éducation */}
            <section className="mb-8">
              <SectionTitle text="EDUCATION" />
              <TimelineItem years="2009 - 2012" title="FIRST UNIVERCITY" description="Lorem ipsum dolor sit amet, elit, sed do ut labore amet, sed tempor ut labore dolore." />
              <TimelineItem years="2012 - 2015" title="SECOND UNIVERCITY" description="Lorem ipsum dolor sit amet, elit, sed labore tempor ut labore dolore magna aliqua." />
              <TimelineItem years="2015 - 2017" title="THIRD UNIVERCITY" description="Lorem ipsum dolor sit amet, elit, sed tempor ut labore dolore magna." />
            </section>

            {/* Expérience */}
            <section>
              <SectionTitle text="EXPERIENCE" />
              <TimelineItem years="2017 - 2019" title="FIRST COMPANY" description="Lorem ipsum dolor sit amet, elit, sed do ut labore et ipsum dolor sit amet, elit, tempor ut labore dolore magna aliqua." />
              <TimelineItem years="2019 - 2021" title="SECOND COMPANY" description="Lorem ipsum dolor sit amet, elit, sed do tempor ut labore dolore magna." isLast={true} />
            </section>

          </div>
        </div>

        {/* Pied de page (Footer) */}
        <footer className="bg-blue-800 text-white p-3 text-center text-xs">
          WWW.HELPSHARED.COM
        </footer>
      </div>
    </div>
  );
};

export default CV;