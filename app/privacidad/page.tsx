import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Política de Privacidad — NIYYAH",
    description: "Política de privacidad de NIYYAH. Tu privacidad es nuestra prioridad.",
};

export default function PrivacidadPage() {
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
                        Política de Privacidad
                    </h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
                </div>

                <div className="prose prose-base lg:prose-lg xl:prose-xl max-w-none text-text-secondary space-y-10 lg:space-y-12">
                    <section>
                        <p className="leading-relaxed text-sm sm:text-base text-text-primary/90">
                            En NIYYAH, tu privacidad es sagrada. Esta política explica de forma clara y honesta
                            qué datos recogemos, cómo los usamos, y qué derechos tienes sobre ellos.
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base italic">
                            Nuestro principio fundamental: <strong>tu espiritualidad es solo tuya</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            1. Responsable del tratamiento
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            <strong>NIYYAH App</strong><br />
                            Correo de contacto: <a href="mailto:support@niyyahprayer.com" className="text-accent hover:text-accent-hover underline">support@niyyahprayer.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            2. Qué datos recogemos
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            NIYYAH recoge únicamente la información necesaria para que la app funcione correctamente y puedas sincronizar tus datos entre dispositivos:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li><strong>Correo electrónico</strong>: Para crear tu cuenta y autenticarte.</li>
                            <li><strong>Nombre</strong> (opcional): Solo si decides añadirlo a tu perfil.</li>
                            <li><strong>Contenido del diario espiritual</strong>: Las entradas que escribes en tu diario personal.</li>
                            <li><strong>Datos técnicos básicos</strong>: Información sobre tu dispositivo y versión de la app para resolver errores y mejorar el servicio.</li>
                            <li><strong>Datos de suscripción</strong>: Si adquieres la versión Premium, Apple o Google gestionan el pago. Nosotros solo recibimos confirmación de que tienes acceso Premium.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            3. Cómo usamos tus datos
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            Usamos tu información exclusivamente para:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li><strong>Autenticarte</strong> en tu cuenta de forma segura.</li>
                            <li><strong>Sincronizar tu diario y configuraciones</strong> entre tus dispositivos.</li>
                            <li><strong>Guardar tu contenido espiritual</strong> de forma privada y segura.</li>
                            <li><strong>Mejorar la app</strong>: Detectar errores técnicos y entender cómo podemos hacer NIYYAH más útil.</li>
                            <li><strong>Gestionar tu suscripción Premium</strong>, si decides adquirirla.</li>
                        </ul>
                        <p className="leading-relaxed text-sm sm:text-base mt-4">
                            <strong>No vendemos tus datos. Nunca.</strong> No compartimos tu información personal con terceros con fines publicitarios ni comerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            4. Servicios de terceros
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            Para que NIYYAH funcione, colaboramos con algunos servicios de confianza:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li>
                                <strong>Supabase</strong>: Para la autenticación segura de tu cuenta y el almacenamiento de tu diario.
                                Supabase cumple con GDPR y otras normativas de privacidad europeas.
                            </li>
                            <li>
                                <strong>RevenueCat</strong>: Para gestionar las suscripciones Premium de forma segura.
                            </li>
                            <li>
                                <strong>Apple App Store / Google Play</strong>: Procesan los pagos de suscripciones.
                                Nosotros no recibimos tus datos bancarios ni de pago.
                            </li>
                            <li>
                                <strong>Publicidad ética (futuro opcional)</strong>: En el futuro, podríamos mostrar anuncios opcionales
                                (rewarded ads) que solo verás si tú decides verlos para desbloquear alguna función.
                                Estos anuncios respetarán tu privacidad.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            5. Cuánto tiempo guardamos tus datos
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Conservamos tu información mientras tu cuenta esté activa. Cuando eliminas tu cuenta,
                            <strong> todos tus datos se borran de forma permanente e irreversible</strong>.
                        </p>
                    </section>

                    <section className="bg-accent/5 p-4 sm:p-6 rounded-lg border-l-4 border-accent">
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            6. Cómo eliminar tu cuenta y tus datos
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            Tienes el control total sobre tu información. <strong>Puedes eliminar tu cuenta y todos tus datos
                                en cualquier momento</strong>, directamente desde la app:
                        </p>
                        <ol className="list-decimal pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li>Abre NIYYAH</li>
                            <li>Ve a <strong>Cuenta</strong> (en el menú principal)</li>
                            <li>Toca <strong>"Eliminar cuenta"</strong></li>
                            <li>Confirma la acción</li>
                        </ol>
                        <p className="leading-relaxed text-sm sm:text-base mt-3">
                            Cuando elimines tu cuenta, borraremos permanentemente:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li>Tu correo electrónico</li>
                            <li>Tu diario espiritual completo</li>
                            <li>Tus configuraciones personales</li>
                            <li>Cualquier otro dato asociado a tu cuenta</li>
                        </ul>
                        <p className="leading-relaxed text-sm sm:text-base mt-3 italic">
                            Este proceso es irreversible. Una vez eliminada, no podremos recuperar tu cuenta ni tus datos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            7. Tus derechos (GDPR / RGPD)
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base mb-3">
                            Como usuario en la Unión Europea, tienes estos derechos sobre tus datos personales:
                        </p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li><strong>Acceso</strong>: Puedes solicitar una copia de toda la información que tenemos sobre ti.</li>
                            <li><strong>Rectificación</strong>: Puedes corregir datos incorrectos desde tu perfil en la app.</li>
                            <li><strong>Eliminación</strong>: Puedes borrar tu cuenta y todos tus datos desde la app.</li>
                            <li><strong>Oposición</strong>: Puedes oponerte al procesamiento de tus datos para ciertos fines.</li>
                            <li><strong>Portabilidad</strong>: Puedes exportar tus datos en un formato estándar.</li>
                        </ul>
                        <p className="leading-relaxed text-sm sm:text-base mt-4">
                            Para ejercer cualquiera de estos derechos, escríbenos a{" "}
                            <a href="mailto:support@niyyahprayer.com" className="text-accent hover:text-accent-hover underline">
                                support@niyyahprayer.com
                            </a>
                            . Intentaremos responder lo antes posible.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            8. Seguridad
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Tomamos medidas técnicas y organizativas para proteger tu información.
                            Tu diario y tus datos están cifrados y almacenados de forma segura.
                            Sin embargo, ningún sistema es 100% seguro, y no podemos garantizar la seguridad absoluta.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            9. Menores de edad
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            NIYYAH está diseñada para usuarios mayores de 13 años.
                            Si descubrimos que hemos recogido datos de un menor sin el consentimiento de sus padres,
                            eliminaremos esa información inmediatamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            10. Cambios a esta política
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Podemos actualizar esta política de vez en cuando. Si hacemos cambios importantes,
                            te lo notificaremos a través de la app o por correo electrónico.
                        </p>
                        <p className="leading-relaxed text-sm sm:text-base mt-3">
                            El uso continuado de NIYYAH después de cualquier cambio significa que aceptas la nueva política.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            11. Legislación aplicable
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Esta política se rige por la legislación española y europea (GDPR / RGPD).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4">
                            12. Contacto
                        </h2>
                        <p className="leading-relaxed text-sm sm:text-base">
                            Si tienes cualquier pregunta sobre esta política de privacidad o sobre cómo tratamos tus datos,
                            no dudes en escribirnos:
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
                        <p className="mt-2"><strong>Versión</strong>: 2.0</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
