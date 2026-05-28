import { motion } from "framer-motion";

const QuoteSection = () => {
    return (
        <section
            id="quote"
            className="h-screen flex items-center justify-center px-6 relative"
        >
            <div className="absolute inset-0 .bg-gradient-to-r from-violet-900/20 to-pink-900/20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center relative z-10"
            >
                <h2 className="text-4xl md:text-7xl font-black leading-tight .bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                    “One day these random moments will become the stories we never stop
                    telling.”
                </h2>
            </motion.div>
        </section>
    );
};

export default QuoteSection;