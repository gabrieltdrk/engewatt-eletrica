import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Zap, FileSearch, Settings, Home, Building2, Factory, ArrowRight, CheckCircle } from "lucide-react";

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mainServices = [
    {
      icon: Zap,
      title: "Projetos Elétricos",
      description: "Desenvolvimento completo de projetos elétricos prediais e industriais",
      features: [
        "Projetos de instalações elétricas",
        "Dimensionamento de cargas",
        "Diagramas unifilares e multifilares",
        "Memorial de cálculo detalhado"
      ],
      gradient: "bg-energy-gradient"
    },
    {
      icon: FileSearch,
      title: "Laudos Técnicos",
      description: "Elaboração de laudos e pareceres técnicos especializados",
      features: [
        "Laudo de conformidade elétrica",
        "Análise de instalações existentes",
        "Relatórios de inspeção",
        "ART (Anotação de Responsabilidade Técnica)"
      ],
      gradient: "bg-power-gradient"
    },
    {
      icon: Settings,
      title: "Consultoria Especializada",
      description: "Assessoria técnica e consultoria em engenharia elétrica",
      features: [
        "Consultoria em eficiência energética",
        "Adequação às normas técnicas",
        "Análise de viabilidade técnica",
        "Suporte técnico especializado"
      ],
      gradient: "bg-energy-gradient"
    }
  ];

  const segments = [
    {
      icon: Home,
      title: "Residencial",
      description: "Soluções elétricas para residências e condomínios"
    },
    {
      icon: Building2,
      title: "Comercial",
      description: "Projetos para estabelecimentos comerciais e empresariais"
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Instalações elétricas para indústrias e plantas fabris"
    }
  ];

  return (
    <section id="services" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="bg-energy-gradient bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços em engenharia elétrica,
            desde projetos residenciais até grandes instalações industriais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-electric transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 ${service.gradient} rounded-lg shadow-glow mr-4 group-hover:animate-glow-pulse transition-all duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-success mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group cursor-pointer"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Segmentos Atendidos</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos diversos segmentos com soluções personalizadas para cada necessidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className=""
            >
              <Card className="text-center p-8 bg-card hover:shadow-soft transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <div className="p-4 bg-secondary rounded-full w-fit mx-auto mb-4">
                    <segment.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{segment.title}</h4>
                  <p className="text-muted-foreground">{segment.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}