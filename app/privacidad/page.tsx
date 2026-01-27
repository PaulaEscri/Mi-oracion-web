import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: "Política de Privacidad — NIYYAH",
    description: "Política de privacidad de NIYYAH. Tu privacidad es nuestra prioridad.",
};

export default function PrivacidadPage() {
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
                Política de Privacidad
            </h1>

            <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                        Tu privacidad es nuestra prioridad
                    </h2>
                    <p className="leading-relaxed">
                        NIYYAH está diseñada con un principio fundamental: <strong>tu espiritualidad es solo tuya</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                        No recopilamos datos personales
                    </h2>
                    <p className="leading-relaxed">
                        NIYYAH no requiere cuentas, no usa servidores externos para almacenar tus datos personales,
                        y no recopila información identificable.
                    </p>
                    <p className="leading-relaxed">
                        Todo lo que escribes en tu diario, tus retos, y tus configuraciones se guardan
                        <strong> exclusivamente en tu dispositivo</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                        Datos de ubicación
                    </h2>
                    <p className="leading-relaxed">
                        Para calcular la dirección de la Qibla y los horarios de oración, la app puede solicitar
                        acceso a tu ubicación. Esta información se procesa localmente en tu dispositivo y
                        <strong> nunca se envía a servidores externos</strong>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                        Análisis y métricas
                    </h2>
                    <p className="leading-relaxed">
                        Podemos usar herramientas de análisis anónimas para entender cómo se usa la app
                        (como número de descargas o errores técnicos), pero estos datos son completamente
                        anónimos y no están vinculados a ti personalmente.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                        Cambios a esta política
                    </h2>
                    <p className="leading-relaxed">
                        Si actualizamos esta política, lo notificaremos a través de la app.
                        El uso continuado de NIYYAH implica la aceptación de cualquier cambio.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                        Contacto
                    </h2>
                    <p className="leading-relaxed">
                        Si tienes preguntas sobre esta política, escríbenos a:{" "}
                        <a
                            href={`mailto:${siteConfig.supportEmail}`}
                            className="text-accent hover:text-accent-hover underline"
                        >
                            {siteConfig.supportEmail}
                        </a>
                    </p>
                </section>

                <div className="pt-8 border-t border-text-secondary/10 text-sm text-text-secondary/70">
                    <p>Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</p>
                </div>
            </div>
        </main>
    );
}
