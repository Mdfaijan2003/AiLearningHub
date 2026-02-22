import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, description, color }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative group rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,140,0,0.25)]"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-br from-orange-500/20 via-purple-500/10 to-transparent" />

      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl text-white ${color}`}>
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}