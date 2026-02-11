import Image from "next/image";

interface GradientCardProps {
    icon: string;
    title: string;
    description: string;
    iconAlt: string;
}

export function GradientCard({ icon, title, description, iconAlt }: GradientCardProps) {
    return (
        <div className="group relative bg-card rounded-[var(--radius-xl)] p-8 hover-lift glass border border-gray-100 overflow-hidden">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 relative w-16 h-16">
                    <Image
                        src={icon}
                        alt={iconAlt}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Decorative gradient blob */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
        </div>
    );
}
