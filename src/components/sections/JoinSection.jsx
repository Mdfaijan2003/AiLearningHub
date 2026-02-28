import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section className="px-8 pb-28">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          max-w-6xl mx-auto
          rounded-3xl
          p-16
          border border-white/10
          bg-gradient-to-br
          from-orange-500/10
          via-purple-500/10
          to-blue-500/10
          backdrop-blur-xl
          text-center
        "
      >
        {/* Icon */}
        <div className="text-5xl text-orange-400 mb-8">
          👥
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join 50,000+ Students Excelling with AI
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-12">
          From school toppers to IIT-JEE rankers, students trust LearnAI
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-2xl font-bold text-orange-500">95%+</h3>
            <p className="text-gray-400 text-sm mt-2">JEE Advanced Success</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500">95%+</h3>
            <p className="text-gray-400 text-sm mt-2">NEET Success</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500">95%+</h3>
            <p className="text-gray-400 text-sm mt-2">Boards Success</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500">95%+</h3>
            <p className="text-gray-400 text-sm mt-2">CUET Success</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}