import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Shield, Award, Users } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-subtle-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-energy-gradient rounded-full shadow-glow animate-glow-pulse">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-energy-gradient bg-clip-text text-transparent">
                Engewatt
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Engenharia Elétrica de Excelência
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em projetos elétricos, laudos técnicos e consultoria especializada
              para residencial, comercial e industrial.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-energy-gradient hover:opacity-90 text-white shadow-electric text-lg px-8 py-4 h-auto cursor-pointer"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 h-auto cursor-pointer"
            >
              Conhecer Serviços
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg backdrop-blur-sm border border-border/50">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Segurança</h3>
              <p className="text-muted-foreground text-sm">
                Projetos seguindo rigorosamente as normas ABNT e NR-10
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg backdrop-blur-sm border border-border/50">
              <Award className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Qualidade</h3>
              <p className="text-muted-foreground text-sm">
                Engenheiro elétrico registrado no CREA com experiência comprovada
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-lg backdrop-blur-sm border border-border/50">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Atendimento</h3>
              <p className="text-muted-foreground text-sm">
                Suporte personalizado do projeto à execução
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}