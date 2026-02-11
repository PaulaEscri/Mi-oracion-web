interface StatItemProps {
    value: string;
    label: string;
}

function StatItem({ value, label }: StatItemProps) {
    return (
        <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {value}
            </div>
            <div className="text-text-secondary text-sm md:text-base">
                {label}
            </div>
        </div>
    );
}

export function StatsSection() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-8 bg-gradient-hero">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12">
                    Únete a miles de musulmanes
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <StatItem value="10K+" label="Usuarios activos" />
                    <StatItem value="50K+" label="Oraciones registradas" />
                    <StatItem value="4.8★" label="Valoración App Store" />
                    <StatItem value="100%" label="Privacidad garantizada" />
                </div>
            </div>
        </section>
    );
}
