import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="bg-dark-card text-center py-4 text-gray-400"
  >
    <p>
      © {new Date().getFullYear()} — <span className="text-dark-accent">Momo</span>. Tous droits réservés.
    </p>
  </motion.footer>
);

export default Footer;
