import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-80 -left-80 w-[1000px] h-[1000px] bg-purple-600/18 rounded-full blur-[300px]"
      />

      <motion.div
        animate={{ x: [0, -40, 25, 0], y: [0, 30, -15, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-60 w-[1200px] h-[1200px] bg-blue-600/30 rounded-full blur-[320px]"
      />

      <motion.div
        animate={{ scale: [1, 1.05, 0.97, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[45%] left-[40%] w-[850px] h-[850px] bg-orange-500/22 rounded-full blur-[250px]"
      />
    </>
  );
}