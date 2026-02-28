import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="px-8 pb-32">

      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Transform Your Learning?
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-10">
          Start your AI-powered learning journey today
        </p>

        {/* Button */}
        <Button variant="cta">
          Launch Dashboard
        </Button>

      </motion.div>

    </section>
  );
}