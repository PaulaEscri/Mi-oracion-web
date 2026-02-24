// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F3EE]/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/brand/Logo-Niyyah.jpg"
                            alt="NIYYAH"
                            fill
                            className="object-cover scale-[1.45] transition-transform duration-300 group-hover:scale-[1.55]"
                            priority
                        />
                    </div>
                    <span className="text-sm font-semibold tracking-[0.18em] text-black/70">
                        NIYYAH
                    </span>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Link
                        href="#waitlist"
                        className="hidden rounded-full border border-black/10 bg-white/50 px-4 py-2 text-sm font-medium text-black/70 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur transition hover:bg-white/70 sm:inline-flex"
                    >
                        Descargar
                    </Link>

                    {/* Placeholder idioma (sin interactividad todavía) */}
                    <div className="rounded-full border border-black/10 bg-white/50 px-3 py-2 text-sm text-black/60 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur">
                        <select
                            aria-label="Idioma"
                            defaultValue="es"
                            disabled
                            className="bg-transparent text-sm text-black/60 outline-none"
                        >
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                            <option value="fr">FR</option>
                            <option value="ar">AR</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}
