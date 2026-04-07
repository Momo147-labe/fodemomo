import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import data from '../data/data';

const CV = forwardRef((props, ref) => {
    // Calcul de la taille A4 = 210mm x 297mm
    return (
        <div ref={ref} className="w-[794px] h-[1123px] bg-white text-gray-800 font-sans flex mx-auto overflow-hidden">
            {/* Barre Latérale Gauche */}
            <div className="w-[35%] bg-[#0a2e4d] text-white p-5 flex flex-col">
                <div className="flex justify-center mb-5">
                    <div className="w-28 h-28 rounded-full border-[3px] border-white overflow-hidden bg-gray-200">
                        <img src={data.info.profile} alt={`${data.info.prenom} ${data.info.nom}`} className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Contact */}
                <section className="mb-5">
                    <h2 className="text-[15px] font-bold border-b border-white pb-1 mb-2 uppercase tracking-wider">Contact</h2>
                    <div className="space-y-2 text-[11px]">
                        <div className="flex items-center gap-3">
                            <Phone size={14} className="shrink-0" /> <span>{data.info.phone[0]}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={14} className="shrink-0" /> <span className="break-words max-w-[200px]">{data.info.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin size={14} className="shrink-0" /> <span>{data.info.adresse}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Linkedin size={14} className="shrink-0" /> <span>linkedin.com/in/fodemomo</span>
                        </div>
                    </div>
                </section>

                {/* Langues */}
                <section className="mb-5">
                    <h2 className="text-[15px] font-bold border-b border-white pb-1 mb-2 uppercase tracking-wider">Langues</h2>
                    <div className="space-y-2">
                        {data.langues.map((l, i) => (
                            <div key={i}>
                                <p className="text-[11px] mb-0.5">{l.langue}</p>
                                <div className="w-full bg-blue-900 h-1 rounded-full">
                                    <div
                                        className="bg-white h-1.5 rounded-full"
                                        style={{ width: l.niveau.toLowerCase().includes('courant') ? '100%' : '75%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Compétences */}
                <section className="mb-5 flex-grow">
                    <h2 className="text-[15px] font-bold border-b border-white pb-1 mb-2 uppercase tracking-wider">Compétences</h2>
                    <ul className="list-disc list-inside text-[11px] space-y-1 opacity-90 leading-tight">
                        {Object.values(data.skills).flat().filter(skill => skill.surCV).map((skill, index) => (
                            <li key={index}>{skill.titre} <span className="opacity-70 text-[10px]">({skill.niveau})</span></li>
                        ))}
                    </ul>
                </section>

                {/* Centres d'intérêt */}
                <section>
                    <h2 className="text-[15px] font-bold border-b border-white pb-1 mb-2 uppercase tracking-wider">Centres d'intérêt</h2>
                    <ul className="list-disc list-inside text-[11px] space-y-0.5 opacity-90">
                        {data.hobbies.map((h, i) => (
                            <li key={i}>{h.nom} {h.icone}</li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Contenu Principal Droit */}
            <div className="w-[65%] px-6 py-6 bg-white shadow-[-10px_0_20px_rgba(0,0,0,0.05)] z-10 flex flex-col">
                <header className="mb-5 text-right">
                    <h1 className="text-3xl font-black text-[#0a2e4d] uppercase mb-0.5 tracking-tight">{data.info.prenom} {data.info.nom}</h1>
                    <p className="text-[13px] text-gray-600 font-bold tracking-widest uppercase">Développeur Full-Stack</p>
                </header>

                {/* Profil */}
                <section className="mb-4">
                    <h2 className="text-[15px] font-bold text-[#0a2e4d] border-b border-gray-300 pb-0.5 mb-2 uppercase tracking-wider">Profil</h2>
                    <p className="text-gray-700 text-[11px] leading-snug text-justify">
                        {data.info.description}
                    </p>
                </section>

                {/* Projets Majeurs */}
                <section className="mb-4">
                    <h2 className="text-[15px] font-bold text-[#0a2e4d] border-b border-gray-300 pb-0.5 mb-2 uppercase tracking-wider">Projets / Expériences</h2>
                    <div className="space-y-3">
                        {data.projets.filter(projet => projet.surCV).map((projet, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-0">
                                    <h3 className="font-bold text-gray-800 text-[13px]">{projet.titre}</h3>
                                    <span className="text-gray-500 text-[10px] font-semibold">{projet.isActive ? "En cours" : "Terminé"}</span>
                                </div>
                                <p className="text-[#0a2e4d] font-semibold italic text-[10px] mb-0.5">
                                    Stack: {Array.isArray(projet.langage?.frontend) ? projet.langage.frontend.join(', ') : projet.langage?.frontend} - {projet.langage?.baseDonnees}
                                </p>
                                <ul className="list-disc list-outside ml-3 text-[11px] text-gray-700 space-y-0.5 leading-snug">
                                    <li>{projet.description}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Formation */}
                <section>
                    <h2 className="text-[15px] font-bold text-[#0a2e4d] border-b border-gray-300 pb-0.5 mb-2 uppercase tracking-wider">Formation</h2>
                    <div className="space-y-2">
                        {data.formation.filter(form => form.surCV).map((form, i) => (
                            <div key={i}>
                                <h3 className="font-bold text-gray-800 text-[12px] leading-tight">{form.titre}</h3>
                                <p className="text-[#0a2e4d] font-semibold text-[10px]">{form.organisateur}</p>
                                <p className="text-gray-500 text-[9px] italic">{form.date}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
});

CV.displayName = 'CV';
export default CV;