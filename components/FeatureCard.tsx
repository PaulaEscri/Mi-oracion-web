interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="group bg-card p-6 sm:p-7 md:p-8 rounded-[var(--radius-card)] shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110">
                {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                {title}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {description}
            </p>
        </div>
    );
}
