import Link from "next/link";

export const metadata = {
    title: "Soporte — NIYYAH",
    description: "¿Necesitas ayuda? Contáctanos y te ayudaremos.",
};

export default function SoportePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all mb-8 sm:mb-12 group"
                >
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-medium">Volver al inicio</span>
                </Link>

                <div className="mb-12 sm:mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
                        Soporte
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
                </div>

                <div className="space-y-8 lg:space-y-10">
                    <section className="bg-card p-6 sm:p-8 rounded-[var(--radius-card)] shadow-md">
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            ¿Necesitas ayuda?
                        </h2>
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
                            Estamos aquí para ayudarte. Si tienes alguna pregunta, problema técnico,
                            o simplemente quieres compartir tu experiencia con NIYYAH, no dudes en contactarnos.
                        </p>
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 italic">
                            Respondemos a todas las consultas con calma y respeto. Normalmente tardamos entre 48-72 horas.
                        </p>
                        <a
                            href="mailto:support@niyyahprayer.com"
                            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-accent text-white rounded-[var(--radius-button)] hover:bg-accent-hover transition-colors text-sm sm:text-base"
                        >
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="truncate">support@niyyahprayer.com</span>
                        </a>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4 sm:mb-6">
                            Preguntas frecuentes
                        </h2>

                        <div className="space-y-3 sm:space-y-4">
                            <details className="bg-card p-5 sm:p-6 rounded-[var(--radius-card)] shadow-md group">
                                <summary className="font-semibold text-text-primary text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
                                    ¿NIYYAH es gratis?
                                    <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="text-text-secondary text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
                                    Sí, NIYYAH es completamente gratis para descargar y usar.
                                    La versión gratuita incluye todas las funciones esenciales: diario espiritual,
                                    brújula Qibla, retos suaves, y más.
                                </p>
                                <p className="text-text-secondary text-sm sm:text-base mt-2 leading-relaxed">
                                    También ofrecemos una <strong>versión Premium opcional</strong> con funciones adicionales
                                    como el Modo Ramadán y contenido exclusivo, mediante suscripción.
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
                                    Sí, necesitas crear una cuenta gratuita con tu correo electrónico.
                                    Esto te permite <strong>sincronizar tu diario espiritual entre dispositivos</strong>
                                    y mantener tus datos seguros.
                                </p>
                                <p className="text-text-secondary mt-2 leading-relaxed">
                                    No te pedimos más información de la necesaria, y puedes
                                    <strong> eliminar tu cuenta en cualquier momento</strong> desde la app.
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
                                    Absolutamente. Tu diario espiritual está <strong>cifrado y almacenado de forma segura</strong>.
                                    Solo tú tienes acceso a tu contenido personal.
                                </p>
                                <p className="text-text-secondary mt-2 leading-relaxed">
                                    No vendemos tus datos. Nunca. No compartimos tu información con terceros
                                    con fines publicitarios. Tu privacidad es sagrada.
                                </p>
                            </details>

                            <details className="bg-card p-6 rounded-[var(--radius-card)] shadow-md group">
                                <summary className="font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between">
                                    ¿Cómo cancelo mi suscripción Premium?
                                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="text-text-secondary mt-4 leading-relaxed">
                                    Las suscripciones se gestionan a través de Apple o Google:
                                </p>
                                <ul className="list-disc pl-5 text-text-secondary mt-2 space-y-1">
                                    <li>
                                        <strong>iPhone/iPad</strong>: Ajustes → Apple ID → Suscripciones → NIYYAH → Cancelar
                                    </li>
                                    <li>
                                        <strong>Android</strong>: Google Play Store → Menú → Suscripciones → NIYYAH → Cancelar
                                    </li>
                                </ul>
                                <p className="text-text-secondary mt-3 leading-relaxed italic">
                                    Al cancelar, seguirás teniendo acceso Premium hasta el final del período ya pagado.
                                </p>
                            </details>

                            <details className="bg-card p-6 rounded-[var(--radius-card)] shadow-md group">
                                <summary className="font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between">
                                    ¿Cómo elimino mi cuenta?
                                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="text-text-secondary mt-4 leading-relaxed">
                                    Puedes eliminar tu cuenta y todos tus datos en cualquier momento desde la app:
                                </p>
                                <ol className="list-decimal pl-5 text-text-secondary mt-2 space-y-1">
                                    <li>Abre NIYYAH</li>
                                    <li>Ve a <strong>Cuenta</strong> (en el menú principal)</li>
                                    <li>Toca <strong>"Eliminar cuenta"</strong></li>
                                    <li>Confirma la acción</li>
                                </ol>
                                <p className="text-text-secondary mt-3 leading-relaxed">
                                    Esto borrará <strong>permanentemente</strong> tu cuenta, tu diario espiritual,
                                    y toda tu información. Este proceso no se puede deshacer.
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
                                    para añadir más idiomas en el futuro, incluyendo árabe, inglés, y francés.
                                </p>
                            </details>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 sm:p-8 rounded-[var(--radius-card)] border border-accent/20">
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
                            ¿No encuentras lo que buscas?
                        </h2>
                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
                            Si tu pregunta no está aquí, escríbenos. Estaremos encantados de ayudarte.
                        </p>
                        <a
                            href="mailto:support@niyyahprayer.com"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover underline font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contactar con soporte
                        </a>
                    </section>
                </div>
            </div>
        </main>
    );
}

