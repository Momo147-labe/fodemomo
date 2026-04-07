import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import data from "../data/data";

const Contact = () => {
  const { email, phone } = data.info;

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "EMAIL",
      value: email,
      href: `mailto:${email}`,
      color: "text-blue-400"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "TÉLÉPHONE",
      value: phone[0],
      href: `tel:${phone[0]}`,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <AnimatedSection>
          {/* En-tête */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary-400 font-semibold tracking-widest uppercase text-xs mb-4 block">Collaboration</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Travaillons <span className="text-gradient">Ensemble</span>
            </h2>
            <div className="w-20 h-1.5 bg-premium-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto font-inter">
              Donnez vie à vos projets avec une expertise technique de premier plan
            </p>
          </motion.div>

          {/* Contact Hub */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-12 md:p-20 text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Decorative Background Element */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">Prêt à démarrer l'aventure ?</h3>
                  <p className="text-gray-400 text-lg max-w-xl mx-auto font-inter">
                    Qu'il s'agisse d'une application complexe ou d'un site vitrine élégant, je suis prêt à relever le défi.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.href}
                      className="glass-card p-8 group hover:bg-white/5 transition-all duration-500 border-white/5"
                      whileHover={{ y: -5 }}
                    >
                      <div className={`w-14 h-14 mx-auto mb-6 bg-white/5 rounded-2xl flex items-center justify-center ${method.color} shadow-inner-glow group-hover:shadow-glow transition-all duration-500`}>
                        {method.icon}
                      </div>
                      <h4 className="text-xs font-black text-white/40 tracking-widest uppercase mb-2">{method.title}</h4>
                      <p className="text-xl font-bold text-white break-all tracking-tighter">{method.value}</p>
                    </motion.a>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-black text-emerald-400 tracking-widest uppercase">Disponible immédiatement</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="mt-20 flex flex-col items-center space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-black text-white/30 tracking-[0.3em] uppercase">Connectons-nous ailleurs</p>
              <div className="flex gap-6">
                {[
                  { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z' },
                  { name: 'GitHub', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-14 h-14 glass-card flex items-center justify-center text-white/40 hover:text-white hover:border-primary-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
