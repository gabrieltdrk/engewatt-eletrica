import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, Briefcase, CheckCircle, TrendingUp } from "lucide-react";

export function About() {
    const stats = [
        { number: "10+", label: "Anos de Experiência" },
        { number: "300+", label: "Projetos Concluídos" },
        { number: "100%", label: "Satisfação do Cliente" },
        { number: "24h", label: "Resposta Garantida" },
    ];

    const achievements = [
        "Engenheiros formados pela Unisanta",
        "Especialização em instalações elétricas e painéis solares",
        "Registro ativo no CREA-SP",
        "Certificação em XX-XX ~",
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    ];

    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Sobre a <span className="bg-energy-gradient bg-clip-text text-transparent">Engewatt</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Fundada com o compromisso de entregar excelência em engenharia elétrica,
                        a Engewatt combina conhecimento técnico, inovação e atendimento personalizado.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
                            <CardContent className="p-0">
                                <div className="text-3xl md:text-4xl font-bold bg-energy-gradient bg-clip-text text-transparent mb-2 select-none">
                                    {stat.number}
                                </div>
                                <div className="text-muted-foreground text-sm md:text-base disabled select-none">{stat.label}</div>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-energy-gradient rounded-lg shadow-glow mr-4">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold">Nossa Expertise</h3>
                        </div>

                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                            Com mais de uma década de experiência no mercado,
                            nossa equipe especializada oferece soluções completas e personalizadas
                            para cada tipo de projeto.
                        </p>

                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                            Trabalhamos com segurança e sustentabilidade,
                            sempre em conformidade com as mais rigorosas normas técnicas.
                        </p>

                        <div className="space-y-3">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center"
                                >
                                    <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                                    <span className="text-foreground">{achievement}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <Card className="p-8 bg-energy-gradient text-white shadow-electric">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-6">
                                    <Briefcase className="w-8 h-8 mr-4" />
                                    <h3 className="text-2xl font-semibold">Nossa Missão</h3>
                                </div>

                                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                                    Prover soluções elétricas de alta qualidade, seguras e eficientes,
                                    contribuindo para o desenvolvimento sustentável de nossos clientes
                                    e da sociedade.
                                </p>

                                <div className="flex items-center">
                                    <TrendingUp className="w-6 h-6 mr-3" />
                                    <span className="text-white/90">
                                        Crescimento contínuo e inovação constante
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full blur-xl opacity-30 animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}