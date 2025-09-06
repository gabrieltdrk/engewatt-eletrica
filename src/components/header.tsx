import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: "Início", id: "hero" },
        { label: "Sobre", id: "about" },
        { label: "Serviços", id: "services" },
        { label: "Contato", id: "contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border"
                    : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => scrollToSection("hero")}
                    >
                        <div className="w-12 h-12 rounded-full bg-white p-1 shadow-glow">
                            <img
                                src={logo}
                                alt="Engewatt Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-energy-gradient bg-clip-text text-transparent">
                                Engewatt
                            </h1>
                            <p className="text-xs text-muted-foreground">Engenharia Elétrica</p>
                        </div>
                    </motion.div>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(item.id)}
                                className="relative text-foreground hover:text-primary transition-colors duration-200 group cursor-pointer"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-energy-gradient group-hover:w-full transition-all duration-300" />
                            </motion.button>
                        ))}
                        <Button
                            onClick={() => scrollToSection("contact")}
                            className="bg-energy-gradient hover:opacity-90 text-white shadow-electric"
                        >
                            Orçamento
                        </Button>
                    </nav>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </Button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 md:hidden flex flex-col"
                        >
                            <div className="flex justify-end p-6">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-foreground hover:text-primary"
                                >
                                    <X className="w-6 h-6" />
                                </Button>
                            </div>

                            <motion.nav
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="flex-1 flex flex-col justify-center items-center space-y-8"
                            >
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className="text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Button
                                        onClick={() => scrollToSection("contact")}
                                        className="bg-energy-gradient hover:opacity-90 text-white shadow-electric text-xl px-8 py-3"
                                    >
                                        Orçamento
                                    </Button>
                                </motion.div>
                            </motion.nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}