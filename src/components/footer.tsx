import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Github } from "lucide-react";
import company from "../../company-info.json";
import logo from "@/assets/logo.png";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white p-1 shadow-glow">
                <img
                  src={logo}
                  alt="Engewatt Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Engewatt</h3>
                <p className="text-sm text-background/70">Engenharia Elétrica</p>
              </div>
            </div>
            <p className="text-background/80 mb-4">
              Soluções completas em engenharia elétrica com qualidade,
              segurança e inovação.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: "Início", id: "hero" },
                { label: "Sobre", id: "about" },
                { label: "Serviços", id: "services" },
                { label: "Contato", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {[
                "Projetos Elétricos",
                "Laudos Técnicos",
                "Consultoria Especializada",
                "Análise de Eficiência Energética",
              ].map((service) => (
                <li key={service}>
                  <span className="text-background/80">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-background/80">{company.tel}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-background/80">{company.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-background/80">{company.location}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-background/20 mt-12 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} Engewatt. Todos os direitos reservados.
            </p>
            <p className="text-background/70 text-sm flex items-center">
              Desenvolvido por{" "}
              <a
                href="https://github.com/gabrieltdrk"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-1 hover:text-background transition-colors duration-200 flex items-center space-x-1"
              >
                <Github className="w-4 h-4" />
                <span>@gabrieltdrk</span>
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}