import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-8">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">

        <div>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm mb-10 border bg-orange-500/10 text-orange-400 border-orange-500/20">
            ✨ AI-Powered Learning Platform
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span>Your Personal</span>
            <br />
            <span className="text-orange-500">AI Learning</span>
            <br />
            <span>Ecosystem</span>
          </motion.h1>

          <p className="mt-8 text-lg max-w-xl leading-relaxed text-gray-400">
            Master every concept from school to competitive exams with AI-powered notes,
            personalized tutoring, smart practice, and real-time analytics.
          </p>

          <div className="mt-10 flex gap-5">
            <Button variant="primary">
              Start Learning →
            </Button>

            <Button variant="secondary">
              Watch Demo
            </Button>
          </div>
        </div>



      </div>
    </section>
  );
}