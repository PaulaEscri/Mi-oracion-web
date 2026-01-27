import { DownloadButtons } from "@/components/DownloadButtons";
import { FeatureCard } from "@/components/FeatureCard";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32 max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-4 tracking-tight">
          NIYYAH
        </h1>

        <p className="text-2xl md:text-3xl text-text-secondary mb-6 font-medium">
          Mi Oración
        </p>

        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Una app musulmana para tu práctica espiritual, sin presión ni culpa.
        </p>

        {/* Micro bullets */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 text-text-secondary stagger-children">
          <div className="flex items-center gap-2 justify-center">
            <span className="text-accent">✓</span>
            <span>Calma y minimalismo</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-accent">✓</span>
            <span>Diario y retos suaves</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-accent">✓</span>
            <span>Privacidad total (todo offline)</span>
          </div>
        </div>

        <DownloadButtons className="justify-center" />
      </section>

      {/* 2. DIFFERENTIATION BLOCK */}
      <section className="px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 bg-card/50 animate-slide-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            No todas las apps espirituales se sienten igual.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-4">
            NIYYAH no te mide ni te juzga.
          </p>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Si hoy no puedes, está bien. Vuelves cuando quieras.
          </p>
        </div>
      </section>

      {/* 3. FEATURES (4 CARDS) */}
      <section className="px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 stagger-children">
          <FeatureCard
            icon="🧭"
            title="Qibla y horarios de oración"
            description="Encuentra la dirección correcta y conoce los horarios adaptados a tu ubicación."
          />
          <FeatureCard
            icon="📓"
            title="Diario espiritual privado"
            description="Reflexiona y escribe sin que nadie más lo vea. Todo queda en tu dispositivo."
          />
          <FeatureCard
            icon="🌙"
            title="Retos suaves, sin penalización"
            description="Pequeños desafíos que te acompañan, sin presión ni racha que perder."
          />
          <FeatureCard
            icon="🤲"
            title="Duas y recordatorios respetuosos"
            description="Recordatorios gentiles que te invitan, nunca te exigen."
          />
        </div>
      </section>

      {/* 4. PRIVACY BLOCK */}
      <section className="px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Tu espiritualidad es solo tuya.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left stagger-children">
            <div className="bg-card p-6 rounded-[var(--radius-card)] shadow-md">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-semibold text-text-primary mb-2">Sin cuentas</h3>
              <p className="text-text-secondary text-sm">No necesitas registrarte ni iniciar sesión.</p>
            </div>

            <div className="bg-card p-6 rounded-[var(--radius-card)] shadow-md">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="font-semibold text-text-primary mb-2">Sin servidores</h3>
              <p className="text-text-secondary text-sm">Tus datos nunca salen de tu teléfono.</p>
            </div>

            <div className="bg-card p-6 rounded-[var(--radius-card)] shadow-md">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-text-primary mb-2">Todo local</h3>
              <p className="text-text-secondary text-sm">Se guarda en tu dispositivo, bajo tu control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RAMADAN SECTION (conditional) */}
      {siteConfig.showRamadanSection && (
        <section className="px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-accent/5 to-accent/10 p-8 md:p-12 rounded-[var(--radius-card)] border border-accent/20">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Este Ramadán, con más calma.
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Activa el Modo Ramadán para una experiencia sin distracciones.
            </p>
            <p className="text-sm text-text-secondary mb-8">
              Pago único · No es suscripción
            </p>
            <DownloadButtons className="justify-center" />
          </div>
        </section>
      )}

      {/* 6. FINAL CTA */}
      <section className="px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 bg-card/50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Descarga NIYYAH gratis
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            y acompaña tu práctica espiritual con calma.
          </p>
          <DownloadButtons className="justify-center" />
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="px-8 sm:px-12 md:px-16 lg:px-24 py-12 border-t border-text-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex gap-6 text-sm text-text-secondary">
              <Link
                href="/privacidad"
                className="hover:text-accent transition-colors"
              >
                Política de privacidad
              </Link>
              <Link
                href="/soporte"
                className="hover:text-accent transition-colors"
              >
                Soporte
              </Link>
            </div>
          </div>

          <div className="text-center text-sm text-text-secondary/70 pt-6 border-t border-text-secondary/10">
            <p className="mb-2">{siteConfig.legalDisclaimer}</p>
            <p>© {new Date().getFullYear()} NIYYAH. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
