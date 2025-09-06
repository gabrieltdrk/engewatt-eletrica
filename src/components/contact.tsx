import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Zap } from "lucide-react";
import { useState } from "react";
import company from "../../company-info.json";

export function Contact() {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
    if (value.length > 11) value = value.slice(0, 11); // máximo de 11 dígitos

    // Formata para (XX) XXXXX-XXXX
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setPhone(value);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: company.tel.number,
      description: company.tel.description
    },
    {
      icon: Mail,
      title: "E-mail",
      content: company.email.address,
      description: company.email.description
    },
    {
      icon: MapPin,
      title: "Localização",
      content: company.location.city,
      description: company.location.description
    },
    {
      icon: Clock,
      title: "Horário",
      content: `${company.open.from} às ${company.open.to}`,
      description: company.open.description
    }

  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com seu backend ou serviço de e-mail
    alert("Mensagem enviada! Entraremos em contato em breve.");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="bg-energy-gradient bg-clip-text text-transparent">contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para começar seu projeto? Entre em contato conosco e solicite
            um orçamento personalizado sem compromisso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 bg-energy-gradient text-white shadow-electric h-fit">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 mr-3" />
                  <CardTitle className="text-2xl">Fale conosco</CardTitle>
                </div>
                <p className="text-white/90">
                  Estamos prontos para atender suas necessidades em engenharia elétrica.
                </p>
              </CardHeader>

              <CardContent className="p-0 space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-2 bg-white/20 rounded-lg">
                      <info.icon className="w-8 h-8" />
                    </div>
                    <div className="flex w-full flex-col">
                      <h4 className="font-semibold mb-1">{info.title}: {info.content}</h4>
                      <p className="text-white/70 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6"
            >
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg cursor-pointer"
                size="lg"
                onClick={() => {
                  const whatsappLink = "https://api.whatsapp.com/send?phone=5513996385150&text=Ol%C3%A1!%0A%0AEu%20gostaria%20de%20realizar%20um%20or%C3%A7amento."
                  window.open(whatsappLink, "_blank")
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: Atendimento Rápido
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl mb-2">Solicite seu orçamento</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        placeholder="Nome completo"
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        inputMode="email"
                        placeholder="seu@email.com"
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Celular</Label>
                      <Input
                        type="tel"
                        inputMode="tel"
                        id="phone"
                        placeholder="(48) 99999-9999"
                        pattern="\(\d{2}\) \d{5}-\d{4}"
                        required
                        className="border-border/50 focus:border-primary"
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Tipo de Serviço</Label>
                      <select
                        id="service"
                        className="w-full px-3 py-2 bg-background border border-border/50 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      >
                        <option disabled value="">Selecione o serviço</option>
                        <option value="projeto">Projeto Elétrico</option>
                        <option value="laudo">Laudo Técnico</option>
                        <option value="consultoria">Consultoria</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={5}
                      required
                      className="border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-energy-gradient hover:opacity-90 text-white shadow-electric cursor-pointer"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}