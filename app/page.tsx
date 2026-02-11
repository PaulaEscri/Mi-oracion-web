import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  BookOpen,
  Compass,
  MoonStar,
  Shield,
  Sparkles,
  Globe,
} from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        mx-auto w-full
        max-w-[1120px]
        px-5 sm:px-8 lg:px-12
        xl:max-w-[1240px]
        2xl:max-w-[1320px]
      "
    >
      {children}
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-18 lg:py-22 xl:py-24 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/55 px-3 py-1 text-xs font-medium text-black/60 backdrop-blur">
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  href = "#descargar",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#5B8DEF] px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_28px_rgba(91,141,239,0.28)] transition-all duration-300 hover:bg-[#4A7CD8] hover:shadow-[0_14px_34px_rgba(91,141,239,0.34)]"
    >
      {children}
    </Link>
  );
}

function SecondaryLink({
  children,
  href = "#como-funciona",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-black/55 transition-colors hover:text-black/80"
    >
      {children}
      <span aria-hidden className="text-xs">
        ↓
      </span>
    </Link>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-3xl border border-black/[0.08] bg-white/65 p-6 shadow-[0_10px_28px_rgba(0,0,0,0.045)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.08] bg-gradient-to-br from-white to-gray-50/50 transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-5 w-5 text-black/60" strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-[15px] font-semibold leading-snug text-black/80">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-black/55">{desc}</p>
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-black/[0.08] bg-white/55 p-7 shadow-[0_10px_28px_rgba(0,0,0,0.045)] backdrop-blur-sm">
      <div className="mb-3 inline-flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.08] bg-gradient-to-br from-white to-gray-50/50 text-sm font-semibold text-black/60">
          {n}
        </span>
        <h3 className="text-[15px] font-semibold text-black/80">{title}</h3>
      </div>
      <p className="text-[13px] leading-relaxed text-black/55">{desc}</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F3EE]/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-black/10 bg-white/70 text-sm font-semibold text-black/70 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              N
            </span>
            <span className="text-sm font-semibold tracking-tight text-black/80">
              NIYYAH
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Idioma (placeholder, no hace nada por ahora) */}
            <div className="relative">
              <label className="sr-only" htmlFor="lang">
                Idioma
              </label>
              <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                <Globe className="h-4 w-4 text-black/45" />
              </div>
              <select
                id="lang"
                defaultValue="es"
                className="h-10 appearance-none rounded-full border border-black/10 bg-white/60 pl-9 pr-9 text-sm font-medium text-black/60 shadow-[0_8px_18px_rgba(0,0,0,0.03)] backdrop-blur transition hover:bg-white/75"
                onChange={() => {
                  // Placeholder: aún no hay i18n
                  // Cuando lo implementemos: router.push(`/en`), etc.
                }}
              >
                <option value="es">Español (pronto)</option>
                <option value="en">English (soon)</option>
                <option value="ar">العربية (قريبًا)</option>
                <option value="fr">Français (bientôt)</option>
              </select>
            </div>

            <PrimaryButton href="#descargar">Descargar</PrimaryButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F6F3EE] text-black">
      <Navbar />

      {/* HERO (más centrado + aire) */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-18">
        {/* Fondo suave premium */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />
          <div className="absolute -top-10 right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-100/35 blur-3xl" />
          <div className="absolute -bottom-28 left-[-140px] h-[520px] w-[520px] rounded-full bg-purple-100/25 blur-3xl" />
        </div>

        <Container>
          <div className="mx-auto max-w-[1180px]">
            <div className="grid items-center gap-12 lg:gap-16 xl:grid-cols-2 xl:gap-20">
              {/* Left - Content */}
              <div className="mx-auto max-w-[560px] text-center xl:mx-0 xl:text-left">
                <div className="mb-6 flex flex-wrap justify-center gap-2 xl:justify-start">
                  <Pill>Calma y minimalismo</Pill>
                  <Pill>Privacidad real</Pill>
                  <Pill>Sin presión</Pill>
                </div>

                <h1 className="mb-6 text-[40px] font-medium leading-[1.12] tracking-[-0.02em] text-black/85 sm:text-[46px] lg:text-[52px]">
                  Tu espiritualidad,
                  <br />
                  solo tuya
                </h1>

                <p className="mx-auto mb-8 max-w-[520px] text-[15px] leading-relaxed text-black/55 sm:text-base xl:mx-0">
                  Una app musulmana que respeta tu ritmo personal. Sin presión.
                  Sin culpa. Solo calma.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 xl:justify-start">
                  <PrimaryButton href="#descargar">Descargar gratis</PrimaryButton>
                  <SecondaryLink href="#como-funciona">Ver cómo funciona</SecondaryLink>
                </div>

                <p className="mt-5 text-xs text-black/40">
                  Disponible en iOS y Android
                </p>
              </div>

              {/* Right - iPhone Mockup */}
              <div className="flex justify-center xl:justify-end">
                <div className="relative">
                  <div className="absolute -inset-10 rounded-[64px] bg-gradient-to-br from-blue-100/35 via-transparent to-purple-100/25 opacity-70 blur-3xl" />

                  <div className="relative">
                    <div className="relative h-[520px] w-[270px] overflow-hidden rounded-[52px] border border-black/[0.12] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.16),0_0_0_1px_rgba(255,255,255,0.55)_inset] sm:h-[560px] sm:w-[290px]">
                      <div className="absolute left-1/2 top-3 z-10 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />

                      <div className="flex h-full w-full flex-col items-center justify-center bg-[#F6F3EE] px-8 pt-14 pb-8">
                        <div className="mb-9 opacity-30">
                          <MoonStar
                            className="h-8 w-8 text-black/40"
                            strokeWidth={1.5}
                          />
                        </div>

                        <div className="w-full rounded-3xl border border-black/[0.08] bg-white/75 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.06)] backdrop-blur">
                          <p className="mb-3 text-center text-xs font-medium text-black/50">
                            Prayer time
                          </p>
                          <div className="flex items-center justify-around">
                            <div className="text-center">
                              <div className="mb-1 text-xs text-black/40">
                                Fajr
                              </div>
                              <div className="text-sm font-semibold text-black/70">
                                06:30
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="mb-1 text-xs text-black/40">
                                Dhuhr
                              </div>
                              <div className="text-sm font-semibold text-black/70">
                                13:45
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="mb-1 text-xs text-black/40">
                                Asr
                              </div>
                              <div className="text-sm font-semibold text-black/70">
                                16:20
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto">
                          <p className="text-center text-lg font-medium tracking-wide text-black/30">
                            NIYYAH
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Cards debajo del hero */}
            <div className="mx-auto mt-16 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
              <FeatureCard
                icon={Heart}
                title="Espiritualidad personal"
                desc="Acompañamiento suave para tu práctica diaria, sin exigencias."
              />
              <FeatureCard
                icon={BookOpen}
                title="Diario privado"
                desc="Tus reflexiones se guardan de forma privada y se sincronizan entre dispositivos."
              />
              <FeatureCard
                icon={Shield}
                title="Privacidad real"
                desc="Sin seguimiento invasivo. Sin vender datos. Tu espiritualidad es solo tuya."
              />
            </div>
          </div>
        </Container>

        <div className="mt-16 border-t border-black/5" />
      </section>

      {/* QUÉ ES */}
      <Section>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="mb-4 text-[32px] font-medium leading-tight tracking-[-0.01em] text-black/85 sm:text-[36px]">
            Diseñada para tu práctica diaria
          </h2>
          <p className="text-[15px] leading-relaxed text-black/55 sm:text-base">
            Herramientas simples, con calma. Lo esencial para acompañarte sin presión.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1040px] gap-6 sm:grid-cols-2 lg:mt-14">
          <FeatureCard
            icon={BookOpen}
            title="Diario espiritual"
            desc="Un espacio íntimo para tus reflexiones, duas y pensamientos."
          />
          <FeatureCard
            icon={Compass}
            title="Oraciones y Qibla"
            desc="Encuentra la dirección correcta y mantén un registro tranquilo."
          />
          <FeatureCard
            icon={MoonStar}
            title="Modo Ramadán"
            desc="Acompaña tu mes sagrado con reflexiones y seguimiento suave."
          />
          <FeatureCard
            icon={Shield}
            title="Privacidad garantizada"
            desc="Tu diario es tuyo. No lo leemos. No lo vendemos. No lo compartimos."
          />
        </div>
      </Section>

      {/* CÓMO FUNCIONA */}
      <Section id="como-funciona" className="bg-white/30">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="mb-4 text-[32px] font-medium leading-tight tracking-[-0.01em] text-black/85 sm:text-[36px]">
            Tres pasos para empezar
          </h2>
          <p className="text-[15px] leading-relaxed text-black/55 sm:text-base">
            Simple, sin prisas. Empieza cuando quieras.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1040px] gap-6 lg:grid-cols-3">
          <Step
            n="1"
            title="Descarga gratis"
            desc="Disponible en App Store y Google Play. Registro sencillo con email."
          />
          <Step
            n="2"
            title="Explora a tu ritmo"
            desc="Prueba el diario, la Qibla y las funciones básicas sin presión."
          />
          <Step
            n="3"
            title="Crece cuando quieras"
            desc="Más adelante habrá opciones Premium opcionales. Si no, la versión gratuita es completa."
          />
        </div>
      </Section>

      {/* FILOSOFÍA */}
      <Section>
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="mb-4 text-[32px] font-medium leading-tight tracking-[-0.01em] text-black/85 sm:text-[36px]">
            Espiritualidad sin presión
          </h2>
          <p className="text-[15px] leading-relaxed text-black/55 sm:text-base">
            NIYYAH no te mide ni te juzga. Solo te acompaña.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1100px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Sparkles}
            title="Sin culpa"
            desc="No hay rachas obligatorias ni puntos que perder."
          />
          <FeatureCard
            icon={Heart}
            title="Sin presión"
            desc="Algunos días escribes, otros solo respiras. Está bien."
          />
          <FeatureCard
            icon={Shield}
            title="Privacidad real"
            desc="Tu diario es tuyo. No lo vendemos."
          />
          <FeatureCard
            icon={MoonStar}
            title="Ritmo personal"
            desc="Solo recordatorios suaves, si tú quieres."
          />
        </div>
      </Section>

      {/* GRATIS / PREMIUM */}
      <Section id="descargar" className="bg-white/30">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="mb-4 text-[32px] font-medium leading-tight tracking-[-0.01em] text-black/85 sm:text-[36px]">
            Gratis para empezar.{" "}
            <span className="whitespace-nowrap text-black/50">
              Premium cuando quieras.
            </span>
          </h2>
          <p className="text-[15px] leading-relaxed text-black/55 sm:text-base">
            Lo importante está en la versión gratuita. Premium es opcional.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1040px] gap-6 lg:grid-cols-2">
          {/* Gratis */}
          <div className="rounded-3xl border border-black/[0.08] bg-white/75 p-8 shadow-[0_16px_48px_rgba(0,0,0,0.06)] backdrop-blur">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/85 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-black/60">
              GRATIS
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-black/65">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Diario espiritual completo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Qibla y horarios de oración</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Duas básicas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Sincronización entre dispositivos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Modo Ramadán (incluido)</span>
              </li>
            </ul>
            <div className="mt-7">
              <PrimaryButton href="#descargar">Descargar gratis</PrimaryButton>
            </div>
          </div>

          {/* Premium */}
          <div className="rounded-3xl border border-black/[0.06] bg-white/45 p-8 shadow-[0_12px_36px_rgba(0,0,0,0.045)] backdrop-blur">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/65 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-black/45">
              PREMIUM{" "}
              <span className="font-normal lowercase text-black/30">
                (opcional)
              </span>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-black/55">
              Más adelante podremos añadir funciones opcionales: packs de reflexiones,
              personalización avanzada o contenido ampliado.
            </p>
            <div className="mt-7">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-black/[0.12] bg-white/65 px-7 py-3.5 text-sm font-medium text-black/60 transition-all hover:bg-white hover:text-black/75"
              >
                Más adelante
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-[720px] text-center text-xs text-black/40">
          No necesitas Premium para usar NIYYAH. La versión gratuita es completa y para siempre.
        </p>
      </Section>

      {/* CTA FINAL */}
      <Section className="pb-22">
        <div className="mx-auto max-w-[860px] rounded-[44px] border border-black/[0.08] bg-white/65 px-8 py-14 text-center shadow-[0_18px_60px_rgba(0,0,0,0.06)] backdrop-blur sm:px-12">
          <h2 className="mb-4 text-[32px] font-medium leading-tight tracking-[-0.01em] text-black/85 sm:text-[36px]">
            Empieza hoy. Sin presión.
          </h2>
          <p className="mx-auto mb-7 max-w-[520px] text-[15px] leading-relaxed text-black/55 sm:text-base">
            Descarga gratis y explora a tu ritmo.
          </p>
          <PrimaryButton href="#descargar">Descargar gratis</PrimaryButton>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#1A1A1A] py-12 text-white/70">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white/90">Legal</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link className="transition-colors hover:text-white" href="/privacidad">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-white" href="/terminos">
                    Términos de Uso
                  </Link>
                </li>
                <li>
                  <Link className="transition-colors hover:text-white" href="/soporte">
                    Soporte
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white/90">Soporte</h3>
              <p className="text-sm">support@niyyahprayer.com</p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white/90">Descarga</h3>
              <p className="text-sm">App Store · Google Play</p>
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-white/40">
            NIYYAH no está afiliada a ninguna institución religiosa.
          </p>
          <p className="mt-2 text-center text-xs text-white/30">
            © 2026 NIYYAH App
          </p>
        </Container>
      </footer>
    </main>
  );
}
