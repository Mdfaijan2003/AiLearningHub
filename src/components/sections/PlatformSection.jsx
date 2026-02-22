import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="px-8 py-24">

      {/* ===== Stats Row ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 mb-24">

        <div className="transition-all duration-300 hover:-translate-y-2">
          <h3 className="text-4xl font-bold text-orange-500">
            {isInView && <CountUp end={50} duration={3} />}K+
          </h3>
          <p className="text-gray-400 mt-2">
            Active Learners
          </p>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-2">
          <h3 className="text-4xl font-bold text-orange-500">
            {isInView && <CountUp end={95} duration={3} />}%
          </h3>
          <p className="text-gray-400 mt-2">
            Success Rate
          </p>
        </div>

        <div className="transition-all duration-300 hover:-translate-y-2">
          <h3 className="text-4xl font-bold text-orange-500">
            {isInView && <CountUp end={10} duration={3} />}K+
          </h3>
          <p className="text-gray-400 mt-2">
            Topics Covered
          </p>
        </div>

      </div>

      {/* ===== Main Heading ===== */}
      <div className="text-center max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">

          <span className="text-white">
            All-in-One
          </span>{" "}

          <span className="
            bg-gradient-to-r
            from-orange-400
            via-pink-500
            to-purple-500
            bg-clip-text
            text-transparent
          ">
            AI Learning
          </span>{" "}

          <span className="text-white">
            Platform
          </span>

        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Everything you need to excel, powered by AI
        </p>

      </div>

    </section>
  );
}