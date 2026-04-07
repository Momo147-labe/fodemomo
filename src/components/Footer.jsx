import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="py-12 border-t border-white/5 text-center relative overflow-hidden"
  >
    <div className="container-custom">
      <div className="flex flex-col items-center gap-8">
        <div className="w-12 h-12 bg-premium-gradient rounded-xl flex items-center justify-center shadow-glow-sm">
          <span className="text-white font-bold text-lg">FS</span>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-black text-white tracking-[0.4em] uppercase">Fodé Momo Soumah</p>
          <p className="text-xs font-bold text-white/30 tracking-widest uppercase flex items-center justify-center gap-3">
            Développeur Full Stack
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500/50"></span>
            UI/UX Designer
          </p>
        </div>

        <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} — Designed with Precision. All Rights Reserved.
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
