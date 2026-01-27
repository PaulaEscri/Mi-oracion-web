import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Soporte — NIYYAH",
    description: "¿Necesitas ayuda? Contáctanos y te ayudaremos.",
};

export default function SoportePage() {
    return (
        <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors mb-8"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al inicio
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
                Soporte
            </h1>

            <div className="space-y-8">
                <section className="bg-card p-8 rounded-[var(--radius-card)] shadow-md">
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                        ¿Necesitas ayuda?
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-4">
                        Estamos aquí para ayudarte. Si tienes alguna pregunta, problema técnico,
                        o simplemente quieres compartir tu experiencia, no dudes en contactarnos.
                    </p>
                    <a
                        href={`mailto:${siteConfig.supportEmail}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-[var(--radius-button)] hover:bg-accent-hover transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {siteConfig.supportEmail}
                    </a>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-6">
                        Preguntas frecuentes
                    </h2>

                    <div className="space-y-4">
                        <details className="bg-card p-6 rounded-[var(--radius-card)] shadow-md group">
                            <summary className="font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between">
                                ¿NIYYAH es gratis?
                                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-text-secondary mt-4 leading-relaxed">
                                Sí, NIYYAH es completamente gratis para descargar y usar.
                                Algunas funciones especiales, como el Modo Ramadán, están disponibles
                                mediante un pago único (no es suscripción).
                            </p>
                        </details>

                        <details className="bg-card p-6 rounded-[var(--radius-card)] shadow-md group">
                            <summary className="font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between">
                                ¿Necesito crear una cuenta?
                                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-text-secondary mt-4 leading-relaxed">
                                No. NIYYAH no requiere cuentas ni registros. Todo funciona directamente
                                en tu dispositivo, sin necesidad de iniciar sesión.
                            </p>
                        </details>

                        <details className="bg-card p-6 rounded-[var(--radius-card)] shadow-md group">
                            <summary className="font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between">
                                ¿Mis datos están seguros?
                                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-text-secondary mt-4 leading-relaxed">
                                Absolutamente. Todo lo que escribes en NIYYAH se guarda exclusivamente
                                en tu dispositivo. No usamos servidores externos para almacenar tus datos personales.
                            </p>
                        </details>

                        <details className="bg-card p-6 rounded-[var(--radius-card)] shadow-md group">
                            <summary className="font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between">
                                ¿Está disponible en mi idioma?
                                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="text-text-secondary mt-4 leading-relaxed">
                                Actualmente NIYYAH está disponible en español. Estamos trabajando
                                para añadir más idiomas en el futuro.
                            </p>
                        </details>
                    </div>
                </section>
            </div>
        </main>
    );
}
