import { motion } from "framer-motion";
import { Linkedin, Youtube, Globe, Mail, Heart } from "lucide-react";

// Instagram icon component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ravulamanohar", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@manioratech", label: "YouTube" },
  { icon: InstagramIcon, href: "https://www.instagram.com/maniora.in/", label: "Instagram" },
  { icon: Globe, href: "https://www.maniora.in", label: "Maniora" },
  { icon: Mail, href: "mailto:ravulamanohar8@gmail.com", label: "Personal Email" },
];

const FooterSection = () => {
  return (
    <footer className="py-20 relative overflow-hidden">
      <div className="story-divider mb-16" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="chapter-number mb-6">Epilogue</p>
          
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            The story <em className="text-gradient italic">continues</em>.
          </h3>
          
          <p className="text-muted-foreground text-sm mb-12 max-w-md font-light leading-relaxed">
            Let's write the next chapter together. Reach out and let's build something remarkable.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <motion.a
              href="https://wa.me/919640161711"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.607.951.965-3.518-.232-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </motion.a>
            <motion.a
              href="mailto:ravulamanohar8@gmail.com"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm tracking-wide glow-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Personal Email
            </motion.a>
            <motion.a
              href="mailto:info@maniora.in"
              className="group inline-flex items-center gap-3 border border-border text-foreground px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Globe className="w-4 h-4" />
              Maniora Email
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-12">
            {socialLinks.map((social, i) => (
              <motion.a
                key={`${social.label}-${i}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.p 
            className="text-muted-foreground text-xs tracking-widest font-mono flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            © 2026 RAVULA MANOHAR YADAV • CRAFTED WITH
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3 h-3 text-primary fill-primary" />
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
