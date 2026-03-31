import { motion } from "framer-motion";
import { Code2, Rocket, Youtube, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "The Craft",
    subtitle: "Full Stack Developer",
    story: "Next.js, React, Node.js, MySQL, MongoDB, Express — the tools I wield to turn ideas into living, breathing products.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Rocket,
    title: "The Venture",
    subtitle: "Founder @ Maniora",
    story: "A digital solutions company born in Hyderabad, built on the belief that every business deserves a powerful online presence.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Youtube,
    title: "The Voice",
    subtitle: "YouTube Tech Creator",
    story: "Sharing what I learn with the world — because knowledge grows when you give it away.",
    color: "from-red-500/20 to-pink-500/20",
  },
];

const AboutSection = () => {
  return (
    <section className="relative" id="about">
      <div className="story-divider" />

      <div className="max-w-5xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="chapter-number mb-6">Chapter 02 — Who I Am</p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-[1.1]">
            Every great product begins with a{" "}
            <em className="text-gradient italic">story</em>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            I'm a MERN stack developer and founder of Maniora. I don't just write code — I craft
            digital narratives that help businesses connect, grow, and leave their mark on the web.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative p-8">
                {/* Icon with glow */}
                <motion.div
                  className="mb-6 inline-flex"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </motion.div>

                <p className="text-xs font-mono tracking-widest text-primary/70 uppercase mb-3">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-bold font-heading mb-3 flex items-center gap-2">
                  {item.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
