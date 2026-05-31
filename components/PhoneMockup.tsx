import {
  SparkleIcon,
  StepsIcon,
  HeartIcon,
  MoonIcon,
  HomeIcon,
  TargetIcon,
  PlayIcon,
  UserIcon,
} from "./Icons";

/**
 * A CSS recreation of the Let's Crack It home screen, framed inside a phone
 * shell. Pure markup — no image assets — so it stays sharp on every display.
 */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] select-none">
      {/* Phone shell */}
      <div className="relative rounded-[2.8rem] border border-white/10 bg-navy-950 p-2.5 shadow-phone ring-1 ring-white/5">
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-navy-950" />
        <div className="relative h-[600px] overflow-hidden rounded-[2.2rem] bg-navy-900">
          <div className="no-scrollbar h-full overflow-y-auto px-4 pb-20 pt-9">
            {/* Greeting */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-400 to-coral" />
              <div>
                <p className="text-[11px] text-slate-400">Good Evening 👋</p>
                <p className="text-lg font-bold leading-tight text-white">
                  Aarav
                </p>
              </div>
            </div>

            {/* Today's focus */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/5 bg-navy-800">
              <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-green-400 to-coral" />
              <div className="p-3.5">
                <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-gold">
                  <SparkleIcon className="h-3 w-3" /> Today&apos;s Focus
                </span>
                <p className="mt-2 text-sm font-bold text-white">
                  Hello Aarav Sharma!
                </p>
                <p className="text-[11px] text-slate-400">
                  Welcome to Lets Crack it!!!
                </p>
              </div>
            </div>

            {/* BMI card */}
            <div className="mt-3 rounded-2xl border border-white/5 bg-navy-800 p-3.5">
              <div className="flex items-start justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                  Current BMI
                </p>
                <div className="space-y-0.5 text-right text-[10px] text-slate-300">
                  <p>↔ 71 kg</p>
                  <p>↕ 170 cm</p>
                </div>
              </div>
              <p className="mt-1 text-4xl font-extrabold text-gold">24.6</p>
              <div className="mt-1.5 flex items-center justify-between">
                <div>
                  <span className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[10px] font-medium text-gold">
                    Overweight
                  </span>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Body Fat <span className="text-gold">31.1%</span>
                  </p>
                </div>
                <span className="rounded-xl border border-gold/40 px-3 py-1.5 text-[10px] font-semibold text-gold">
                  Update
                </span>
              </div>
            </div>

            {/* AI health tips */}
            <div className="mt-3 rounded-2xl border border-white/5 bg-navy-800 p-3.5">
              <div className="flex items-center gap-1.5 text-gold">
                <SparkleIcon className="h-3.5 w-3.5" />
                <p className="text-[9px] font-semibold uppercase tracking-wider">
                  AI Health Tips
                </p>
              </div>
              <div className="mt-3 space-y-2.5">
                {[
                  "Swap liquid calories first — replace sugary drinks with water or unsweetened tea.",
                  "Add protein to breakfast — eggs or Greek yogurt to reduce hunger through the day.",
                  "Reframe weight loss as building habits — focus on consistency over the scale.",
                ].map((tip, i) => (
                  <div key={i} className="flex gap-2.5">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-navy-700 text-[9px] font-bold text-gold">
                      0{i + 1}
                    </span>
                    <p className="text-[10px] leading-snug text-slate-300">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's health */}
            <div className="mt-3 rounded-2xl border border-white/5 bg-navy-800 p-3.5">
              <div className="flex items-center gap-1.5">
                <HeartIcon className="h-3.5 w-3.5 text-coral" />
                <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-300">
                  Today&apos;s Health
                </p>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <Stat icon={<StepsIcon className="mx-auto h-4 w-4 text-slate-300" />} value="258" label="Steps" />
                <Stat icon={<HeartIcon className="mx-auto h-4 w-4 text-coral" />} value="—" label="Heart Rate" />
                <Stat icon={<MoonIcon className="mx-auto h-4 w-4 text-indigo-300" />} value="0h" label="Sleep" />
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/5 bg-navy-950/95 px-6 py-3 backdrop-blur">
            <HomeIcon className="h-5 w-5 text-gold" />
            <TargetIcon className="h-5 w-5 text-slate-500" />
            <PlayIcon className="h-5 w-5 text-slate-500" />
            <UserIcon className="h-5 w-5 text-slate-500" />
          </div>
        </div>
      </div>

      {/* Floating glow behind phone */}
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gold/10 blur-3xl" />
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      {icon}
      <p className="mt-1 text-base font-bold text-white">{value}</p>
      <p className="text-[8px] uppercase tracking-wide text-slate-500">
        {label}
      </p>
    </div>
  );
}
