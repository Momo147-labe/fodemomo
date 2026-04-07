import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import generatePdf from '../utils/genererPDF';
import CV from './CV';

const Navbar = () => {
  const [active, setActive] = useState("Accueil");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cvRef = useRef(null);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    if (cvRef.current) {
      generatePdf(cvRef, "Fode_Momo_Soumah");
    }
  };

  const links = [
    { name: "Accueil", id: "home" },
    { name: "A propos", id: "apropos" },
    { name: "Compétences", id: "skills" },
    { name: "Projets", id: "projects" },
    { name: "Formations", id: "formation" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass-nav py-3 sm:py-4 shadow-lg'
        : 'bg-transparent py-6 sm:py-8'
        }`}
    >
      <div className="container-custom px-6 sm:px-10 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-premium-gradient rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
            <span className="text-white font-bold text-xl">FS</span>
          </div>
          <span className="text-white text-xl font-black tracking-tight hidden md:block uppercase">Fodé Momo</span>
        </motion.div>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1 shadow-inner-glow">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth
                  duration={500}
                  spy
                  offset={-100}
                  onSetActive={() => setActive(link.name)}
                  className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === link.name
                    ? "bg-primary-500 text-white shadow-glow"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bouton CTA Desktop */}
        <div className="hidden lg:block">
          <button
            onClick={handleDownloadCV}
            className="btn-primary cursor-pointer px-8 py-3 rounded-xl font-bold shadow-glow hover:shadow-glow-lg transition-all"
          >
            Télécharger CV
          </button>
        </div>

        {/* Menu Mobile Button */}
        <motion.button
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.95 }}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </motion.button>
      </div>

      {/* Navigation Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-dark-bg/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="px-6 py-10 space-y-4">
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      smooth
                      duration={500}
                      onClick={() => setOpen(false)}
                      className={`block py-4 px-6 rounded-2xl text-center text-xl font-semibold transition-all ${active === link.name
                        ? "bg-primary-500 text-white shadow-glow"
                        : "text-gray-300 hover:text-white hover:bg-white/5 border border-white/5"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <button
                  onClick={(e) => {
                    setOpen(false);
                    handleDownloadCV(e);
                  }}
                  className="btn-primary w-full text-center py-4 rounded-2xl font-bold text-lg"
                >
                  Télécharger CV
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden CV for PDF Generation */}
      <div className="absolute top-[-20000px] left-[-20000px] pointer-events-none opacity-0">
        <CV ref={cvRef} />
      </div>
    </motion.nav>
  );
};

export default Navbar;
