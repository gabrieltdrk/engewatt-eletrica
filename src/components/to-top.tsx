import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ToTopButton() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 50)
                setIsVisible(true);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-energy-gradient p-5 rounded-full z-100 cursor-pointer">
                    <ArrowUp />
                </button>
            )
            }
        </>
    )
}