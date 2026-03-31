import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    period: "JUL 2025 — PRESENT",
    title: "Founder & Lead Developer",
    company: "Maniora",
    location: "Hyderabad, Telangana",
    description: "Leading a digital solutions company specializing in modern web development, social media growth, and end-to-end digital transformation for businesses across India.",
    icon: Briefcase,
    color: "from-amber-500/20 to-yellow-500/20",
    tech: ["React", "Node.js", "MongoDB", "Express", "Next.js", "Tailwind CSS"],
  },
  {
    period: "APR 2025 — JUL 2025",
    title: "Full Stack Web Developer",
    company: "Company Role",
    location: "Hyderabad",
    description: "Worked as a full stack web developer for 3 months, building and maintaining web applications while gaining valuable industry experience before venturing out on my own.",
    icon: GraduationCap,
    color: "from-blue-500/20 to-cyan-500/20",
    tech: ["JavaScript", "React", "Node.js", "MongoDB","Tailwind CSS"],
  },
  {
    period: "2023 — APR 2025",
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    description: "Delivered projects for clients worldwide, specializing in full stack applications and scalable web solutions. Built a strong foundation before transitioning to full-time roles.",
    icon: Award,
    color: "from-purple-500/20 to-pink-500/20",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MySQL"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-32 relative" id="experience">
      <div className="story-divider mb-20" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="chapter-number mb-6">Chapter 03 — The Journey</p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-[1.1]">
            Where the <em className="text-gradient italic">path</em> has led.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-light">
            Every project, every late night, every breakthrough — it all adds up to a story worth telling.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10 group-hover:scale-125 transition-transform duration-300" />

                <div className={`md:pl-20 p-8 rounded-2xl border border-border bg-card/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 overflow-hidden relative`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4">
                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <exp.icon className="w-6 h-6 text-primary" />
                      </motion.div>

                      <div className="flex-1">
                        <span className="font-mono text-xs text-primary tracking-wider uppercase">{exp.period}</span>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading mt-1">{exp.title}</h3>
                        <p className="text-lg text-foreground/80">{exp.company} <span className="text-muted-foreground">• {exp.location}</span></p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-secondary/50 border border-border text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
