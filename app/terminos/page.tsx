import Link from "next/link";

export const metadata = {
    title: "Términos de Uso — NIYYAH",
    description: "Términos y condiciones de uso de NIYYAH.",
};

export default function TerminosPage() {
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
                        Términos de Uso
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
                </div>

                <div className="prose prose-base lg:prose-lg xl:prose-xl max-w-none text-text-secondary space-y-10 lg:space-y-12">
                    <section>
                        <p className="leading-relaxed text-sm sm:text-base text-text-primary/90">
                            Estos términos de uso definen las reglas para utilizar NIYYAH.
                            Al descargar y usar la app, aceptas estos términos de forma completa.
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base italic">
                            Hemos intentado redactarlos de la forma más clara y humana posible.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            1. Qué es NIYYAH
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            NIYYAH es una <strong>herramienta de apoyo espiritual</strong> diseñada para ayudarte
                            en tu práctica musulmana diaria, de forma personal, respetuosa y sin presión.
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base mt-3">
                            La app incluye:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li>Diario espiritual personal</li>
                            <li>Brújula Qibla</li>
                            <li>Retos espirituales suaves</li>
                            <li>Recursos de aprendizaje (duas, azkar, etc.)</li>
                            <li>Modo Ramadán (Premium)</li>
                        </ul>
                    </section>

                    <section className="bg-amber-50/30 dark:bg-amber-900/10 p-4 sm:p-6 rounded-lg border-l-4 border-amber-500/50">
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            2. Importante: NIYYAH es una herramienta, no un sustituto
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-2">
                            NIYYAH <strong>no sustituye</strong>:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li>Asesoramiento religioso profesional</li>
                            <li>Consejo médico o psicológico</li>
                            <li>Acompañamiento terapéutico</li>
                        </ul>
                        <p className="leading-relaxed text-sm sm:text-base mt-4">
                            Si necesitas ayuda profesional, consulta con especialistas cualificados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            3. Uso personal y no comercial
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            NIYYAH está diseñada para <strong>uso personal</strong>. No está permitido:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li>Revender o redistribuir la app o su contenido</li>
                            <li>Extraer o copiar masivamente el contenido de la app</li>
                            <li>Usarla con fines comerciales sin nuestro permiso explícito</li>
                            <li>Intentar acceder a áreas restringidas o hackear la app</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            4. Tu cuenta y responsabilidad
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            Al crear una cuenta en NIYYAH:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li>
                                <strong>Eres responsable de mantener tu contraseña segura</strong>.
                                No la compartas con nadie.
                            </li>
                            <li>
                                <strong>Tú eres responsable de toda la actividad</strong> que ocurra en tu cuenta.
                            </li>
                            <li>
                                Si crees que alguien ha accedido a tu cuenta sin permiso,
                                cámbiala inmediatamente y contáctanos.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            5. Tu contenido (diario espiritual)
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            Todo lo que escribes en tu diario espiritual <strong>es tuyo y solo tuyo</strong>:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li>
                                <strong>Tú eres el propietario</strong> de tu contenido.
                                NIYYAH no reclama ningún derecho sobre lo que escribes.
                            </li>
                            <li>
                                <strong>Tu contenido es privado</strong>. No lo compartimos con nadie ni lo usamos
                                para entrenar inteligencias artificiales ni ningún otro propósito.
                            </li>
                            <li>
                                <strong>Puedes eliminarlo cuando quieras</strong>, borrando tu cuenta desde la app.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            6. Suscripción Premium
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            NIYYAH ofrece una versión gratuita completa y una versión Premium opcional con funciones adicionales.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 mt-4">
                            6.1. Pagos y gestión
                        </h3>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li>
                                Las suscripciones se <strong>gestionan a través de Apple App Store o Google Play</strong>,
                                dependiendo de tu dispositivo.
                            </li>
                            <li>
                                <strong>Los cobros y renovaciones</strong> los gestiona Apple o Google, no NIYYAH directamente.
                            </li>
                            <li>
                                Los precios pueden variar según tu país y la tienda de aplicaciones.
                            </li>
                        </ul>

                        <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 mt-4">
                            6.2. Cancelación
                        </h3>
                        <p className="leading-relaxed text-sm sm:text-base mb-2">
                            Para cancelar tu suscripción Premium:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li>
                                <strong>Si usas iPhone/iPad</strong>: Ve a Ajustes → Apple ID → Suscripciones → NIYYAH → Cancelar
                            </li>
                            <li>
                                <strong>Si usas Android</strong>: Ve a Google Play Store → Menú → Suscripciones → NIYYAH → Cancelar
                            </li>
                        </ul>
                        <p className="leading-relaxed text-sm sm:text-base mt-3 italic">
                            Al cancelar, seguirás teniendo acceso Premium hasta el final del período ya pagado.
                        </p>

                        <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 mt-4">
                            6.3. Reembolsos
                        </h3>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Las solicitudes de reembolso se gestionan a través de Apple o Google, según su política.
                            NIYYAH no procesa reembolsos directamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            7. Publicidad ética (futuro)
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            En el futuro, podríamos incorporar <strong>publicidad ética opcional</strong> (rewarded ads):
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li>Solo verás anuncios <strong>si tú eliges verlos</strong> a cambio de desbloquear alguna función</li>
                            <li>Nunca serán intrusivos ni obligatorios</li>
                            <li>Respetarán tu privacidad</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            8. Contenido de terceros
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            NIYYAH incluye contenido religioso (duas, azkar, etc.) recopilado de fuentes islámicas fiables.
                            Aunque hacemos nuestro mejor esfuerzo para verificar la precisión del contenido,
                            <strong> no podemos garantizar su exactitud absoluta</strong>.
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base mt-3">
                            Si detectas algún error, por favor contáctanos para corregirlo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            9. Limitación de responsabilidad
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            NIYYAH se proporciona "tal cual", en la medida permitida por la legislación aplicable:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li>
                                No garantizamos que la app esté completamente libre de errores o funcione sin interrupciones.
                            </li>
                            <li>
                                En la medida permitida por la ley, no nos hacemos responsables de pérdidas de datos, aunque hacemos todo lo posible para evitarlo.
                            </li>
                            <li>
                                No somos responsables del uso que hagas de la información proporcionada en la app.
                            </li>
                        </ul>
                        <p className="leading-relaxed text-sm sm:text-base mt-4">
                            Dicho esto, hacemos todo lo posible para ofrecerte la mejor experiencia y resolver
                            cualquier problema rápidamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            10. Cambios en la app y en estos términos
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Podemos actualizar la app y estos términos de vez en cuando.
                            Si hacemos cambios importantes, te lo notificaremos a través de la app o por correo electrónico.
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base mt-3">
                            El uso continuado de NIYYAH después de cualquier cambio significa que aceptas los nuevos términos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            11. Suspensión o cancelación
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Nos reservamos el derecho de suspender o cancelar tu acceso a NIYYAH si:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li>Violas estos términos</li>
                            <li>Usas la app de forma fraudulenta o perjudicial</li>
                            <li>Intentas dañar la app o a otros usuarios</li>
                        </ul>
                        <p className="leading-relaxed text-sm sm:text-base mt-3 italic">
                            Siempre que sea posible, intentaremos avisarte previamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            12. Legislación aplicable
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Estos términos se rigen por la <strong>legislación española y europea</strong>.
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base mt-3">
                            Cualquier disputa se resolverá en los tribunales españoles competentes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            13. Contacto
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Si tienes preguntas sobre estos términos, escríbenos:
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base mt-3">
                            <strong>Email</strong>:{" "}
                            <a
                                href="mailto:support@niyyahprayer.com"
                                className="text-accent hover:text-accent-hover underline"
                            >
                                support@niyyahprayer.com
                            </a>
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base mt-3 italic">
                            Intentamos responder a todas las consultas lo antes posible, normalmente en 48-72 horas.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-text-secondary/10 text-sm text-text-secondary/70">
                        <p><strong>Última actualización</strong>: 10 de febrero de 2026</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
