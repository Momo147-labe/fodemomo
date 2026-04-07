import data from "../data/data";
import { motion } from "framer-motion";

const categoryLabels = {
  langages: "Langages",
  frameworks: "Frameworks",
  backend: "Backend",
  baseDonnees: "Bases de données",
  outils: "Outils Informatiques"
};

const Langages = () => {
  const getProgressPercentage = (niveau) => {
    const niveauMap = {
      'debutant': 35,
      'intermediaire': 60,
      'avance': 85,
      'expert': 95,
      'maitre': 100
    };
    return niveauMap[niveau?.toLowerCase()] || 50;
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Expertise Technique</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Ma <span className="text-gradient">Stack</span> Moderne
          </h2>
          <div className="w-24 h-1 bg-premium-gradient mx-auto rounded-full mb-8"></div>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto font-inter">
            Des technologies maîtrisées pour construire des solutions robustes et élégantes.
          </p>
        </motion.div>

        <div className="space-y-24">
          {Object.entries(data.skills).map(([key, skills]) => {
            if (!skills || skills.length === 0) return null;

            return (
              <div key={key} className="space-y-10">
                <div className="flex items-center gap-6">
                  <h3 className="text-2xl md:text-3xl font-black text-white whitespace-nowrap tracking-tight">
                    {categoryLabels[key] || key}
                  </h3>
                  <div className="h-px bg-gradient-to-r from-white/20 to-transparent w-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {skills.map((lang, index) => (
                    <motion.div
                      key={lang.titre}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ y: -8 }}
                      className="glass-card p-8 group relative border-white/5"
                      viewport={{ once: true }}
                    >
                      {/* Background Accent */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-700"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-5 mb-8">
                          <div className="w-14 h-14 bg-white/5 rounded-xl p-3 border border-white/10 group-hover:border-primary-500/30 transition-colors flex items-center justify-center flex-shrink-0">
                            <img
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                              src={lang.logo}
                              alt={lang.titre}
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-black text-white group-hover:text-primary-400 transition-colors tracking-tight">
                              {lang.titre}
                            </h4>
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
                              {lang.annee} exp.
                            </p>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div className="flex justify-between items-end">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Maîtrise</span>
                            <span className="text-xl font-black text-primary-400 leading-none">
                              {getProgressPercentage(lang.niveau)}%
                            </span>
                          </div>

                          <div className="relative w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className="absolute top-0 left-0 h-full bg-premium-gradient rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${getProgressPercentage(lang.niveau)}%` }}
                              transition={{ duration: 1.2, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Langages;
