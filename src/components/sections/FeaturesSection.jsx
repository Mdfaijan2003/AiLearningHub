import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    icon: "🧠",
    title: "AI Tutor",
    description: "24/7 personalized AI assistance.",
    color: "bg-gradient-to-br from-pink-500 to-purple-500",
  },
  {
    icon: "📘",
    title: "Smart Notes",
    description: "AI-generated summaries.",
    color: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: "🎯",
    title: "Adaptive Practice",
    description: "Target your weak areas.",
    color: "bg-gradient-to-br from-orange-500 to-yellow-500",
  },
  {
    icon: "📈",
    title: "Progress Analytics",
    description: "Track improvement deeply.",
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    icon: "⚡",
    title: "Concept Roadmap",
    description: "Structured learning paths.",
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
  },
  {
    icon: "🏅",
    title: "Exam Ready Mode",
    description: "Last-minute revision system.",
    color: "bg-gradient-to-br from-pink-500 to-red-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}