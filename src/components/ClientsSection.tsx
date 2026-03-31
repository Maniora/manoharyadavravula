import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ujwal",
    role: "Co-Founder • The Kahani Crew",
    quote: "Working with the MANIORA team was a great experience. The website looks premium, loads fast, and perfectly represents our brand. The custom gallery and smooth animations really make it stand out. Very happy with the final result!",
    avatar: "https://ui-avatars.com/api/?name=Ujwal&background=random",
  },
  {
    name: "Akhil",
    role: "Founder • Pixelfable18",
    quote: "Working with MANIORA was an amazing experience. They built us a preset-selling website with an admin panel that makes it super easy to manage orders and track presets. Our business finally has a professional online presence!",
    avatar: "https://ui-avatars.com/api/?name=Akhil&background=random",
  },
  {
    name: "Krishna Kanth",
    role: "Founder • 4KMedia",
    quote: "The MANIORA team nailed our website for 4KMedia. The output is clean, fast, and on-brand—but the real highlight is the animated illustrations. They bring the site to life and make our story pop. Super impressed!",
    avatar: "https://ui-avatars.com/api/?name=Krishna+Kanth&background=random",
  },
];

const ClientsSection = () => {
  return (
    <section className="py-32 relative" id="clients">
      <div className="story-divider mb-32" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="chapter-number mb-6">Chapter 05 — The People</p>
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-[1.1]">
            Stories I've helped <em className="text-gradient italic">write</em>.
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto font-light">
            Behind every project is a client who trusted me with their vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card/50 border border-border rounded-2xl p-8 hover:border-primary/20 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-foreground/90 italic leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
