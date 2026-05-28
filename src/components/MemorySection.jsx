import { motion } from "framer-motion";

const boys = [
    {
        name: "Prathmesh Narode",
        memory:
            "From bunked lectures to random roaming and nonstop chaos, first year genuinely would not have felt the same without him. What started as just being bench partners slowly became one of the realest friendships of the year, filled with random jokes, unnecessary adventures, and memories that never felt planned",
    },

    {
        name: "Arjun Sawant",
        memory:
            "The kind of guy who looked clueless",
    },

    {
        name: "Pruthviraj Patil",
        memory:
            "Most Chaotic Person I've Ever Met",
    },

    {
        name: "Chaitanya Kharude",
        memory:
            "The calm one in the chaos, but somehow always part of the best memories",
    },

    {
        name: "Ganesh Mahajan",
        memory:
            "The kind of friend who never took anything seriously",
    },
];

const girls = [
    {

        name: "Ruchita",
        memory:
            "Some bonds were never loud, just quietly important from the beginning",
    },
    {
        name: "Gracy Mahajan",
        memory:
            "Between managing the group and randomly scolding me",
    },
    
    {
        name: "Mansi Patil",
        memory:
            "The same humor, the same music taste, and the same nonchalant energy made the friendship feel effortless, sarcastic, and genuinely comfortable - even though we became friends in the last month of the first year",
    },

   

    {
        name: "Himanshi",
        memory:
            "Project chaos, and helping each other during DTI, the friendship quietly became memorable",
    },
     {
        name: "Priya Zade",
        memory:
            "Between random jokes during lectures and chaotic backbench energy, boredom never really existed",
    },

    {
        name: "Ridhhi Yenkar",
        memory:
            "Between backbench chaos, engineering graphics help, and full bhai energy, the friendship somehow always felt comfortable",
    },

    // {
    //     name: "Arya Patil",
    //     memory:
    //         "From being part of the DTI team to sacrificing the party for the project",
    // },

    // {
    //     name: "Mohini Patil",
    //     memory:
    //         "Your memory here.",
    // },

    


];

const MemorySection = () => {
    return (
        <section id="memories" className="bg-black text-white overflow-hidden">

            {/* GROUP PHOTO SECTION */}

            <div className="relative h-screen overflow-hidden">
                <img
                    src="/images/group-photo.jpg"
                    alt="group"
                    className="w-full h-full object-cover opacity-60"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-16 left-8 md:left-20 z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-8xl font-black mb-6 leading-none"
                    >
                        FIRST
                        <br />
                        YEAR
                    </motion.h1>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Random moments. Real people. Permanent memories.
                    </p>
                </div>
            </div>

            {/* BOYS SECTION */}

            <div className="px-6 md:px-20 pt-40 pb-32">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-black text-center mb-24"
                >
                    {/* The Boys */}
                </motion.h1>

                <div className="space-y-56">
                    {boys.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                           className={`grid md:grid-cols-2 gap-20 items-center px-10 md:px-24 ${index % 2 !== 0
                                ? "md:[&>*:first-child]:order-2"
                                : ""
                                }`}
                        >

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-3 bg-gradient-to-r from-violet-500/20 to-pink-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl" />

                                <img
                                    src={`/images/${person.name
                                        .toLowerCase()
                                        .replace(/ /g, "-")}.jpg`}
                                    alt={person.name}
                                    className="relative w-full h-[550px] object-cover rounded-3xl shadow-2xl"
                                />
                            </motion.div>

                            <div className="space-y-6">
                                <p className="uppercase tracking-[8px] text-sm text-violet-400">
                                    FIRST YEAR MEMORY
                                </p>

                                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                    {person.name}
                                </h2>

                                <div className="w-24 h-[2px] bg-violet-400" />



                                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                    {name}
                                </h2>

                                <div className="w-24 h-[2px] bg-violet-400" />

                                <p className="text-gray-400 text-lg leading-loose max-w-xl">
                                    {person.memory}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            {/* GIRLS SECTION */}

            <div className="px-6 md:px-20 pt-40 pb-32 bg-[#050816]">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-black text-center mb-24"
                >
                    {/* The Girls */}
                </motion.h1>

                <div className="space-y-56">
                    {girls.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className={`grid md:grid-cols-2 gap-20 items-center px-10 md:px-24 ${index % 2 !== 0
                                ? "md:[&>*:first-child]:order-2"
                                : ""
                                }`}
                        >

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-3 bg-gradient-to-r from-pink-500/20 to-violet-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl" />

                                <img
                                    src={`/images/${person.name
                                        .toLowerCase()
                                        .replace(/ /g, "-")}.jpg`}
                                    alt={person.name}
                                    className="relative w-full h-[550px] object-cover rounded-3xl shadow-2xl"
                                />
                            </motion.div>

                            <div className="space-y-6">
                                <p className="uppercase tracking-[8px] text-sm text-violet-400">
                                    FIRST YEAR MEMORY
                                </p>

                                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                    {person.name}
                                </h2>

                                <div className="w-24 h-[2px] bg-violet-400" />

                                <p className="text-gray-400 text-lg leading-loose max-w-xl">
                                    {person.memory}
                                </p>

                                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                                    {name}
                                </h2>

                                <div className="w-24 h-[2px] bg-pink-400" />

                                
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default MemorySection;