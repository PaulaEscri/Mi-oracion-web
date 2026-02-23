"use client";

import { useState } from "react";

export default function WaitlistSection() {
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [language, setLanguage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validation
        if (!email.trim()) {
            setError("Por favor, introduce tu email");
            return;
        }

        if (!country.trim()) {
            setError("Por favor, indica tu país");
            return;
        }

        if (!language) {
            setError("Por favor, selecciona tu preferencia de idioma");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Por favor, introduce un email válido");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, country, language }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Algo salió mal");
            }

            setSuccess(true);
            setEmail("");
            setCountry("");
            setLanguage("");
        } catch (err: any) {
            setError(err.message || "Error al unirse a la lista. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="waitlist" className="py-0">
            <div className="mx-auto w-full max-w-[700px] px-6 sm:px-10">
                <div className="rounded-[44px] border border-black/[0.08] bg-white/70 px-8 py-16 shadow-[0_18px_54px_rgba(0,0,0,0.06)] backdrop-blur sm:px-12 lg:px-14">
                    {/* Headline */}
                    <h2 className="mb-3 text-center text-[34px] font-semibold leading-tight tracking-[-0.01em] text-black/85 sm:text-[40px]">
                        Mantén la constancia después de Ramadán.
                    </h2>

                    {/* Subheadline */}
                    <p className="mb-8 text-center text-[15px] leading-relaxed text-black/55 sm:text-base">
                        Únete a la lista de espera y recibe:
                    </p>

                    {/* Benefits List */}
                    <ul className="mb-10 space-y-2.5 text-[14px] text-black/65">
                        <li className="flex items-start gap-3">
                            <span className="mt-[2px] text-[#1B1E4B]">✓</span>
                            <span>Acceso anticipado a NIYYAH</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-[2px] text-[#1B1E4B]">✓</span>
                            <span>Un PDF digital gratuito de reflexiones Dua</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-[2px] text-[#1B1E4B]">✓</span>
                            <span>Actualizaciones tranquilas del lanzamiento</span>
                        </li>
                    </ul>

                    {/* Success Message */}
                    {success && (
                        <div className="mb-6 rounded-2xl border border-green-200/50 bg-green-50/50 px-5 py-4 text-center text-[14px] text-green-800">
                            Estás en la lista. Te enviaremos un email pronto. ✨
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 rounded-2xl border border-red-200/50 bg-red-50/50 px-5 py-4 text-center text-[14px] text-red-800">
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading || success}
                            className="w-full rounded-2xl border border-black/10 bg-white/80 px-5 py-4 text-[15px] text-black/80 placeholder-black/40 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all focus:border-[#1B1E4B]/30 focus:outline-none focus:ring-2 focus:ring-[#1B1E4B]/20 disabled:opacity-50"
                        />

                        {/* Country Input */}
                        <input
                            type="text"
                            placeholder="País"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            disabled={loading || success}
                            className="w-full rounded-2xl border border-black/10 bg-white/80 px-5 py-4 text-[15px] text-black/80 placeholder-black/40 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all focus:border-[#1B1E4B]/30 focus:outline-none focus:ring-2 focus:ring-[#1B1E4B]/20 disabled:opacity-50"
                        />

                        {/* Language Preference */}
                        <div className="relative">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                disabled={loading || success}
                                className="w-full appearance-none rounded-2xl border border-black/10 bg-white/80 px-5 py-4 text-[15px] text-black/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all focus:border-[#1B1E4B]/30 focus:outline-none focus:ring-2 focus:ring-[#1B1E4B]/20 disabled:opacity-50"
                            >
                                <option value="" disabled>
                                    Preferencia de idioma para comunicaciones
                                </option>
                                <option value="english">English</option>
                                <option value="spanish">Español</option>
                            </select>
                            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-black/40">
                                ▼
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading || success}
                            className="group relative w-full overflow-hidden rounded-full bg-[#1B1E4B] px-7 py-4 text-[15px] font-medium text-[#F6E7C6] shadow-[0_10px_30px_rgba(27,30,75,0.22)] transition-all duration-300 hover:bg-[#15183E] hover:shadow-[0_14px_38px_rgba(27,30,75,0.28)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            <span className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative">
                                {loading ? "Uniéndote..." : success ? "Unido ✓" : "Únete a la lista"}
                            </span>
                        </button>
                    </form>

                    {/* Privacy Note */}
                    <p className="mt-6 text-center text-xs text-black/40">
                        Sin spam. Solo intención.
                    </p>
                </div>
            </div>
        </section>
    );
}
