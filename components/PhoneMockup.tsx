import Image from "next/image";

interface PhoneMockupProps {
    className?: string;
}

export function PhoneMockup({ className = "" }: PhoneMockupProps) {
    return (
        <div className={`relative ${className}`}>
            <div className="relative animate-float">
                <Image
                    src="/phone-mockup.png"
                    alt="NIYYAH App Preview"
                    width={400}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl -z-10 rounded-[60px]" />
            </div>
        </div>
    );
}
