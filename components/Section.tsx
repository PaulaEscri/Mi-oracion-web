import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    background?: "default" | "white" | "gradient";
    id?: string;
}

export default function Section({ children, className = "", background = "default", id }: SectionProps) {
    const bgClass =
        background === "white" ? "bg-white" :
            background === "gradient" ? "bg-gradient-to-b from-[#F6F3EE] to-[#E7E1D8]" :
                "";

    return (
        <section id={id} className={`w-full py-20 sm:py-28 lg:py-36 ${bgClass} ${className}`}>
            <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-24">
                {children}
            </div>
        </section>
    );
}
