import DownloadButton from "@/components/DownloadButton";
import PhoneMockup from "@/components/PhoneMockup";
import Reveal from "@/components/Reveal";
import {
  ProfileScreen,
  ExploreScreen,
  WorkoutScreen,
  DiscoverScreen,
} from "@/components/AppScreens";
import {
  ScaleIcon,
  SparkleIcon,
  PlayIcon,
  HeartIcon,
  BookIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import { APP_VERSION, APK_SIZE } from "@/lib/config";

/* Each entry pairs an app screen with the feature it showcases. */
const showcases = [
  {
    eyebrow: "Explore",
    title: "A workout for every mood and level",
    desc: "Browse a categorised library of yoga, strength, cardio and tutorials. Filter by goal, see each session's duration and difficulty at a glance, and tap in whenever you're ready to move.",
    bullets: [
      "4 categories with quick filter chips",
      "Real trainers, beginner to advanced",
      "Duration & difficulty on every card",
    ],
    screen: <ExploreScreen />,
    accent: "text-violet-300",
  },
  {
    eyebrow: "Guided sessions",
    title: "Press play and follow along",
    desc: "Each workout opens to a clean detail view with the trainer, focus area, duration and a clear description — so you know exactly what you're getting into before you start.",
    bullets: [
      "Full session detail at a glance",
      "Clear focus & difficulty tags",
      "Trainer-led, distraction-free player",
    ],
    screen: <WorkoutScreen />,
    accent: "text-coral",
  },
  {
    eyebrow: "Discover",
    title: "Health reads curated for you",
    desc: "A handpicked feed of trustworthy articles on nutrition, heart health and lifestyle — chosen to match your journey and keep you learning between workouts.",
    bullets: [
      "Curated, credible sources",
      "Bite-sized, easy to read",
      "Fresh topics that match your goals",
    ],
    screen: <DiscoverScreen />,
    accent: "text-emerald-300",
  },
  {
    eyebrow: "Your profile",
    title: "Your health story, all in one place",
    desc: "See your BMI, body fat and key stats at a glance, update your details any time, and stay fully in control of your account with simple, transparent settings.",
    bullets: [
      "BMI, body fat & body metrics",
      "Update details in a tap",
      "Private & secure account controls",
    ],
    screen: <ProfileScreen />,
    accent: "text-gold",
  },
];

const features = [
  {
    icon: ScaleIcon,
    title: "BMI & Body Composition",
    desc: "Log your weight and height to instantly see your BMI, body-fat percentage and category — tracked over time so you always know where you stand.",
  },
  {
    icon: SparkleIcon,
    title: "Personalised AI Health Tips",
    desc: "Smart, science-backed suggestions generated from your current stats — practical habits you can actually stick to, refreshed whenever you need them.",
  },
  {
    icon: PlayIcon,
    title: "Guided Workout Library",
    desc: "Yoga, strength, cardio and tutorials led by real trainers. Filter by goal and difficulty — from gentle morning flows to advanced power strength sessions.",
  },
  {
    icon: HeartIcon,
    title: "Daily Health Sync",
    desc: "Steps, heart rate and sleep pulled together via Health Connect, so your full day of activity lives in one clean dashboard.",
  },
  {
    icon: BookIcon,
    title: "Discover & Learn",
    desc: "A curated feed of health reads — nutrition, heart health and more — chosen to match your journey and keep you motivated.",
  },
  {
    icon: ShieldIcon,
    title: "Private & Secure",
    desc: "Your health data is yours. Manage your profile, update your details, and stay in control with simple, transparent account settings.",
  },
];

const steps = [
  {
    n: "01",
    title: "Download & set up",
    desc: "Install the APK, create your profile and enter your basic details in under a minute.",
  },
  {
    n: "02",
    title: "Get your insights",
    desc: "See your BMI, body fat and AI-personalised tips the moment you log in.",
  },
  {
    n: "03",
    title: "Move & track",
    desc: "Follow guided workouts and watch your steps, sleep and progress add up every day.",
  },
];

const stats = [
  { value: "4", label: "Workout categories" },
  { value: "100%", label: "Free to use" },
  { value: "24/7", label: "AI health tips" },
  { value: "❤️", label: "Made in India" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-navy-950 text-slate-100">
      {/* ---------- Nav ---------- */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-950/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-lg font-extrabold text-navy-950">
              L
            </span>
            <span className="text-lg font-bold tracking-tight">
              Let&apos;s Crack It
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-gold">
              Features
            </a>
            <a href="#screens" className="transition hover:text-gold">
              Screens
            </a>
            <a href="#how" className="transition hover:text-gold">
              How it works
            </a>
            <a href="#download" className="transition hover:text-gold">
              Download
            </a>
          </div>
          <DownloadButton
            label="Get the app"
            className="!px-4 !py-2.5 !text-sm"
          />
        </nav>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="top" className="bg-grid">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:gap-8">
          <div className="animate-fade-up text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <SparkleIcon className="h-3.5 w-3.5" />
              Made for Healthy India
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Your AI health &amp;
              <br className="hidden sm:block" /> fitness companion in{" "}
              <span className="text-gradient-gold">one app</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0 lg:text-lg">
              Track your BMI and body fat, get personalised AI tips, follow
              guided yoga, strength &amp; cardio workouts, and sync your daily
              steps, heart rate and sleep — all in one beautiful app.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <DownloadButton label="Download for Android" />
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-gold"
              >
                Explore features
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Android APK · {APK_SIZE} · Version {APP_VERSION}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats strip ---------- */}
      <section className="border-y border-white/5 bg-navy-900/60">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-gold sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to stay on track
          </h2>
          <p className="mt-4 text-slate-400">
            Powerful tools wrapped in a calm, focused interface — built to make
            healthy choices the easy choice.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className="group rounded-3xl border border-white/5 bg-navy-900/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-navy-800"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-navy-950">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {f.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section
        id="how"
        className="border-y border-white/5 bg-navy-900/40"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">
              How it works
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Up and running in three steps
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="relative">
                <div className="rounded-3xl border border-white/5 bg-navy-800/60 p-8">
                  <span className="text-5xl font-extrabold text-gold/20">
                    {s.n}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Screen showcases (alternating, floating phones) ---------- */}
      <section id="screens" className="border-t border-white/5">
        <div className="mx-auto max-w-2xl px-5 pt-20 text-center md:pt-28">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Take a look inside
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Beautifully simple, screen by screen
          </h2>
          <p className="mt-4 text-slate-400">
            A quick tour of the app — every screen built for clarity and calm.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-24 px-5 py-20 md:space-y-32 md:py-24">
          {showcases.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                {/* Copy */}
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <span
                    className={`text-sm font-semibold uppercase tracking-widest ${s.accent}`}
                  >
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-400">
                    {s.desc}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold/15 text-[11px] font-bold text-gold">
                          ✓
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                {/* Floating phone */}
                <Reveal
                  delay={120}
                  className={`flex justify-center ${
                    flip ? "lg:order-1 lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div className="animate-float" style={{ animationDelay: `${i * 0.8}s` }}>
                    {s.screen}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- Download CTA ---------- */}
      <section id="download" className="px-5 pb-24">
        <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-gold/20 bg-gradient-to-br from-navy-800 to-navy-900 px-8 py-16 text-center shadow-glow">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold text-2xl font-extrabold text-navy-950">
            L
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start your health journey today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Download Let&apos;s Crack It and take the first step toward a
            healthier, stronger you. Free, fast and made with ❤️ for India.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <DownloadButton label="Download APK" />
            <span className="text-xs text-slate-500">
              Android · {APK_SIZE} · v{APP_VERSION}
            </span>
          </div>
          <div className="mx-auto mt-8 flex max-w-md items-start gap-2 rounded-2xl border border-white/5 bg-navy-950/50 p-4 text-left">
            <ShieldIcon className="h-4 w-4 flex-none text-gold" />
            <p className="text-xs leading-relaxed text-slate-400">
              Installing an APK? You may need to allow installs from your
              browser in Android settings. The download is a direct, official
              build of Let&apos;s Crack It.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-white/5 bg-navy-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-sm font-extrabold text-navy-950">
              L
            </span>
            <span className="font-semibold">Let&apos;s Crack It</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            Made for Healthy India
            <HeartIcon className="h-4 w-4 text-coral" />
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Let&apos;s Crack It · v{APP_VERSION}
          </p>
        </div>
      </footer>
    </main>
  );
}
