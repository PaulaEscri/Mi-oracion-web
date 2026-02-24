import Navbar from "@/components/Navbar";
import WaitlistSection from "@/components/WaitlistSection";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Compass,
  MoonStar,
  Shield,
  Sparkles,
} from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10 lg:px-16">
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
    <section id={id} className={`py-0 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-[#F9F2E6]/70 px-3 py-1 text-xs font-medium text-black/60 backdrop-blur transition-all duration-300 hover:bg-[#F9F2E6]/90 hover:scale-105 hover:shadow-sm">
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  href = "#waitlist",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#1B1E4B] px-7 py-3.5 text-sm font-medium text-[#F6E7C6] shadow-[0_10px_30px_rgba(27,30,75,0.22)] transition-all duration-300 hover:bg-[#15183E] hover:shadow-[0_14px_38px_rgba(27,30,75,0.28)] hover:scale-[1.02] active:scale-[0.98]"
    >
      <span className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative">{children}</span>
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
      className="inline-flex items-center gap-1.5 text-sm font-medium text-black/60 transition-colors hover:text-black/80"
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
    <div className="group rounded-3xl border border-black/[0.08] bg-white/65 p-7 shadow-[0_10px_26px_rgba(0,0,0,0.045)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_14px_34px_rgba(0,0,0,0.065)] hover:-translate-y-1">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.08] bg-gradient-to-br from-white to-gray-50/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-5 w-5 text-black/55 transition-colors group-hover:text-[#1B1E4B]" strokeWidth={1.5} />
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
    <div className="rounded-3xl border border-black/[0.08] bg-white/55 p-7 shadow-[0_8px_22px_rgba(0,0,0,0.04)] backdrop-blur-sm">
      <div className="mb-3 inline-flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.08] bg-gradient-to-br from-white to-gray-50/60 text-sm font-semibold text-black/55">
          {n}
        </span>
        <h3 className="text-[15px] font-semibold text-black/80">{title}</h3>
      </div>
      <p className="text-[13px] leading-relaxed text-black/55">{desc}</p>
    </div>
  );
}



export default function Page() {
  return (
    <main className="min-h-screen bg-[#F6F3EE] text-black overflow-x-clip">
      <Navbar />

      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-10%] h-[520px] w-[520px] rounded-full bg-blue-200/25 blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute right-[-12%] top-[6%] h-[560px] w-[560px] rounded-full bg-purple-200/18 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute left-[20%] bottom-[-18%] h-[520px] w-[520px] rounded-full bg-amber-200/12 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden pt-10 pb-[81px] sm:pt-14 lg:pt-18">
        <Container>
          <div className="mx-auto max-w-[1100px]">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              {/* Left */}
              <div className="text-center lg:text-left">
                <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                  <Pill>Calma y minimalismo</Pill>
                  <Pill>Privacidad real</Pill>
                  <Pill>Sin presión</Pill>
                </div>

                <h1 className="mb-6 text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-black/85 sm:text-[52px] lg:text-[60px]">
                  Tu espiritualidad,
                  <br />
                  solo tuya
                </h1>

                <p className="mx-auto mb-9 max-w-[520px] text-[15px] leading-relaxed text-black/55 sm:text-base lg:mx-0">
                  Una app musulmana que respeta tu ritmo personal. Sin presión.
                  Sin culpa. Solo calma.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
                  <PrimaryButton href="#waitlist">Apuntarme</PrimaryButton>
                  <SecondaryLink href="#como-funciona">Ver cómo funciona</SecondaryLink>
                </div>

                <p className="mt-5 text-xs text-black/40">
                  Disponible para iOS y Android en Abril
                </p>

                {/* Mini etiquetas de la app  */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-black/40 lg:justify-start lg:gap-6">
                  <span className="rounded-full border border-black/10 bg-white/45 px-3 py-1 transition-all duration-300 hover:bg-white/70 hover:scale-105 hover:text-black/60">
                    Sin anuncios intrusivos
                  </span>
                  <span className="rounded-full border border-black/10 bg-white/45 px-3 py-1 transition-all duration-300 hover:bg-white/70 hover:scale-105 hover:text-black/60">
                    Diario privado
                  </span>
                  <span className="rounded-full border border-black/10 bg-white/45 px-3 py-1 transition-all duration-300 hover:bg-white/70 hover:scale-105 hover:text-black/60">
                    A tu ritmo
                  </span>
                </div>
              </div>

              {/* Right - iPhone */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="absolute -inset-10 rounded-[70px] bg-white/30 opacity-70 blur-2xl animate-float" />
                  <div className="relative h-[520px] w-[270px] overflow-hidden rounded-[54px] border border-black/[0.12] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.16),0_0_0_1px_rgba(255,255,255,0.55)_inset] sm:h-[580px] sm:w-[300px] hover:shadow-[0_30px_85px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02]">
                    <div className="absolute left-1/2 top-3 z-10 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />
                    <div className="flex h-full w-full flex-col items-center justify-center bg-[#F6F3EE] px-8 pt-14 pb-8">
                      <div className="mb-8 opacity-30">
                        <MoonStar className="h-8 w-8 text-black/40" strokeWidth={1.5} />
                      </div>

                      <div className="w-full rounded-3xl border border-black/[0.08] bg-white/72 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.065)] backdrop-blur">
                        <p className="mb-3 text-center text-xs font-medium text-black/50">
                          Prayer time
                        </p>
                        <div className="flex items-center justify-around">
                          <div className="text-center">
                            <div className="mb-1 text-xs text-black/40">Fajr</div>
                            <div className="text-sm font-semibold text-black/70">06:30</div>
                          </div>
                          <div className="text-center">
                            <div className="mb-1 text-xs text-black/40">Dhuhr</div>
                            <div className="text-sm font-semibold text-black/70">13:45</div>
                          </div>
                          <div className="text-center">
                            <div className="mb-1 text-xs text-black/40">Asr</div>
                            <div className="text-sm font-semibold text-black/70">16:20</div>
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

            {/* 3 cards */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
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
      </section>

      {/* QUÉ ES */}
      <Section className="mt-[81px] pb-[81px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="mb-4 text-[34px] font-semibold leading-tight tracking-[-0.01em] text-black/85 sm:text-[40px]">
            Diseñada para tu práctica diaria
          </h2>
          <p className="text-[15px] leading-relaxed text-black/55 sm:text-base">
            Herramientas simples, con calma. Lo esencial para acompañarte sin presión.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[980px] gap-6 sm:grid-cols-2">
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
            title="Modo Ramadán (simple)"
            desc="Incluido en la versión gratuita: enfoque suave, sin sobrecarga."
          />
          <FeatureCard
            icon={Shield}
            title="Privacidad garantizada"
            desc="Tu diario es tuyo. No lo leemos. No lo vendemos. No lo compartimos."
          />
        </div>
      </Section>

      {/* CÓMO FUNCIONA */}
      <Section id="como-funciona" className="pt-[81px] pb-[81px] bg-white/25">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="mb-4 text-[34px] font-semibold leading-tight tracking-[-0.01em] text-black/85 sm:text-[40px]">
            Tres pasos para empezar
          </h2>
          <p className="text-[15px] leading-relaxed text-black/55 sm:text-base">
            Simple, sin prisas. Empieza cuando quieras.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[980px] gap-6 lg:grid-cols-3">
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
            desc="Más adelante habrá opciones Premium opcionales. Si no, la gratuita es completa."
          />
        </div>
      </Section>

      {/* WAITLIST */}
      <div className="pt-[81px] mt-0">
        <WaitlistSection />
      </div>

      {/* FILOSOFÍA */}
      <Section className="mt-[162px] pb-[81px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="mb-4 text-[34px] font-semibold leading-tight tracking-[-0.01em] text-black/85 sm:text-[40px]">
            Espiritualidad sin presión
          </h2>
          <p className="text-[15px] leading-relaxed text-black/55 sm:text-base">
            NIYYAH no te mide ni te juzga. Solo te acompaña.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[980px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* GRATIS / PREMIUM cards */}
      <Section id="descargar" className="pt-[81px] pb-[81px] bg-white/25">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="mb-4 text-[34px] font-semibold leading-tight tracking-[-0.01em] text-black/85 sm:text-[40px]">
            Gratis para empezar.{" "}
            <span className="whitespace-nowrap text-black/45">
              Premium cuando quieras.
            </span>
          </h2>
          <p className="text-[15px] leading-relaxed text-black/55 sm:text-base">
            Lo importante está en la versión gratuita. Premium es opcional.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[980px] gap-7 lg:grid-cols-2">
          {/* Gratis */}
          <div className="rounded-[34px] border border-black/[0.08] bg-white/75 p-10 shadow-[0_16px_46px_rgba(0,0,0,0.06)] backdrop-blur">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/85 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-black/55">
              GRATIS
            </div>

            <ul className="mt-6 space-y-4 text-[14px] text-black/65">
              {[
                "Diario espiritual completo",
                "Qibla y horarios de oración",
                "Duas básicas",
                "Sincronización entre dispositivos",
                "Modo Ramadán (simple)",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-[2px] text-green-600">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <PrimaryButton href="#waitlist">Apuntarme a la lista</PrimaryButton>
            </div>
          </div>

          {/* Premium */}
          <div className="rounded-[34px] border border-black/[0.06] bg-white/50 p-10 shadow-[0_12px_34px_rgba(0,0,0,0.045)] backdrop-blur">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-black/45">
              PREMIUM{" "}
              <span className="font-normal lowercase text-black/30">
                (opcional)
              </span>
            </div>

            <p className="mt-6 text-[14px] leading-relaxed text-black/55">
              Más adelante: packs de reflexiones, contenido ampliado o personalización.
              Sin presión. Siempre opcional.
            </p>

            <div className="mt-10">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-black/[0.14] bg-white/70 px-7 py-3.5 text-sm font-medium text-black/60 transition-all hover:bg-white hover:text-black/75"
              >
                Más adelante
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-[760px] text-center text-xs text-black/40">
          No necesitas Premium para usar NIYYAH. La versión gratuita es completa y para siempre.
        </p>
      </Section>

      {/* CTA FINAL */}
      <Section className="pt-[81px] pb-24">
        <div className="mx-auto max-w-[860px] rounded-[44px] border border-black/[0.08] bg-white/70 px-10 py-16 text-center shadow-[0_18px_54px_rgba(0,0,0,0.06)] backdrop-blur sm:px-14">
          <h2 className="mb-4 text-[34px] font-semibold leading-tight tracking-[-0.01em] text-black/85 sm:text-[40px]">
            Empieza hoy. Sin presión.
          </h2>
          <p className="mx-auto mb-9 max-w-[520px] text-[15px] leading-relaxed text-black/55 sm:text-base">
            Descarga gratis y explora a tu ritmo.
          </p>
          <PrimaryButton href="#waitlist">Apuntarme a la lista</PrimaryButton>
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
          <p className="mt-2 text-center text-xs text-white/30">© 2026 NIYYAH App</p>
        </Container>
      </footer>
    </main>
  );
}
