import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Clients", href: "#clients" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-2xl border-b border-border/50" : "bg-background/50"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-lg font-heading font-bold text-foreground tracking-tight">
          RMY<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/ravulamanohar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition"
        >
          Connect
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
