import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <img
        src="/first-year-memories/images/hero.jpg"
        className="absolute w-full h-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[#050816]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-8xl font-black mb-6 bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">
          FIRST YEAR
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
          The chaos. The friendships. The memories that accidentally became the
          best part of life.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;