import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("Accueil");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-nav shadow-card backdrop-blur-xl' 
          : 'bg-transparent'
      } mx-4 mt-4 rounded-2xl`}
    >
      <div className="container-custom px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-glow">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 48 48">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
              </svg>
            </div>
            <h2 className="text-white text-xl font-bold hidden sm:block">Fodé Momo Soumah</h2>
          </motion.div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth
                    duration={500}
                    spy
                    offset={-100}
                    onSetActive={() => setActive(link.name)}
                    className={`cursor-pointer relative text-sm font-medium transition-all duration-300 ${
                      active === link.name
                        ? "text-primary-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {active === link.name && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bouton CTA Desktop */}
          <div className="hidden md:block">
            <Link
              to="contact"
              smooth
              duration={500}
              className="btn-primary text-sm cursor-pointer"
            >
              Travaillons ensemble
            </Link>
          </div>

          {/* Menu Mobile */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>

        {/* Navigation Mobile */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } transition-all duration-300 ease-in-out`}
        >
          <div className="pt-6 pb-4 border-t border-white/10 mt-4">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth
                    duration={500}
                    spy
                    offset={-100}
                    onClick={() => setOpen(false)}
                    onSetActive={() => setActive(link.name)}
                    className={`block text-center py-2 px-4 rounded-lg transition-all duration-300 ${
                      active === link.name
                        ? "text-primary-400 bg-primary-400/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Link
                to="contact"
                smooth
                duration={500}
                onClick={() => setOpen(false)}
                className="btn-primary text-sm cursor-pointer inline-block"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
