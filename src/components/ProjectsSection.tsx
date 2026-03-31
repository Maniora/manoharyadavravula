import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "The Kahani Crew",
    category: "Event Management & Photography",
    description: "A visually rich event management and photography website crafted with custom design and smooth interactions. Every pixel tells a story.",
    url: "https://thekahanicrew.com",
    num: "01",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "4KMedia",
    category: "Digital Marketing Agency",
    description: "High-performance agency site blending creativity with data-driven strategies. Built to convert visitors into believers.",
    url: "https://4kmedia.in",
    num: "02",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Pixelfable18",
    category: "E-commerce Platform",
    description: "Modern e-commerce with secure admin panel, seamless payments, and instant digital delivery of Lightroom presets.",
    url: "https://pixelfable18.in",
    num: "03",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "N Wellness Studio",
    category: "Booking Platform",
    description: "Elegant booking experience with service browsing, appointment scheduling, and a calming spa-like visual design.",
    url: "https://nwellness.onrender.com/",
    num: "04",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "GN Workshops",
    category: "Workshop Management",
    description: "Comprehensive system with payment gateway, participant tracking, and automated certification — end to end.",
    url: "http://gangadharnagarjuna.in/",
    num: "05",
    color: "from-red-500/20 to-rose-500/20",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-32 relative" id="projects">
      <div className="story-divider mb-32" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="chapter-number mb-6">Chapter 04 — The Work</p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-[1.1] max-w-3xl">
            Projects that <em className="text-gradient italic">speak</em> for themselves.
          </h2>
          <p className="text-muted-foreground max-w-xl font-light">
            Built at Maniora — real client work that drives real results. Each one a chapter in someone's growth story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {project.num}
                  </span>
                  <motion.div
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                <p className="text-xs font-mono tracking-widest text-primary/70 uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
