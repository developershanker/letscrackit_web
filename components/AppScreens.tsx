import {
  HomeIcon,
  TargetIcon,
  PlayIcon,
  UserIcon,
  ScaleIcon,
  ClockIcon,
  ArrowRightIcon,
  ShieldIcon,
} from "./Icons";
import PhoneFrame from "./PhoneFrame";
import { DemoFullName, DemoEmail } from "./DemoPerson";

/* Shared bottom navigation, with the active tab highlighted in gold. */
function BottomNav({
  active,
}: {
  active: "home" | "explore" | "play" | "profile";
}) {
  const cls = (key: string) =>
    `h-5 w-5 ${active === key ? "text-gold" : "text-slate-500"}`;
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/5 bg-navy-950/95 px-6 py-3 backdrop-blur">
      <HomeIcon className={cls("home")} />
      <TargetIcon className={cls("explore")} />
      <PlayIcon className={cls("play")} />
      <UserIcon className={cls("profile")} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Profile screen — BMI summary + account actions                      */
/* ------------------------------------------------------------------ */
export function ProfileScreen() {
  return (
    <PhoneFrame glowClassName="bg-gold/10">
      <div className="no-scrollbar h-full overflow-y-auto px-5 pb-20 pt-10 text-center">
        <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-gold-400 to-coral ring-2 ring-gold/60" />
        <p className="mt-3 text-lg font-bold text-white">
          <DemoFullName />
        </p>
        <p className="text-[11px] text-slate-400">
          <DemoEmail />
        </p>

        {/* BMI card */}
        <div className="mt-5 rounded-2xl border border-white/5 bg-navy-800 p-4">
          <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
            Body Mass Index
          </p>
          <p className="mt-1 text-4xl font-extrabold text-gold">24.6</p>
          <span className="mt-1 inline-block rounded-full border border-gold/40 px-3 py-0.5 text-[10px] font-medium text-gold">
            Overweight
          </span>
          <p className="mt-2 text-[10px] text-slate-400">
            Body Fat <span className="font-semibold text-gold">31.1%</span>
          </p>
          <p className="text-[10px] text-slate-500">71 kg · 170 cm</p>
        </div>

        {/* Account actions */}
        <div className="mt-4 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/5 bg-navy-800 text-left">
          {[
            { icon: <ScaleIcon className="h-4 w-4 text-gold" />, label: "Update Details", danger: false },
            { icon: <ArrowRightIcon className="h-4 w-4 text-gold" />, label: "Sign Out", danger: false },
            { icon: <ShieldIcon className="h-4 w-4 text-coral" />, label: "Delete Account", danger: true },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-3 px-4 py-3.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-700">
                {row.icon}
              </span>
              <span
                className={`flex-1 text-xs font-medium ${
                  row.danger ? "text-coral" : "text-white"
                }`}
              >
                {row.label}
              </span>
              <span className="text-slate-500">›</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[10px] text-slate-500">v2.13 (15)</p>
        <p className="text-[11px] text-slate-400">Made for Healthy India ❤️</p>
      </div>
      <BottomNav active="profile" />
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Explore screen — categorised workout library                        */
/* ------------------------------------------------------------------ */
const exploreItems = [
  {
    tag: "YOGA",
    tagColor: "bg-violet-500",
    title: "Morning Yoga Flow for Flexibility",
    trainer: "Priya Sharma",
    time: "20:00",
    level: "Beginner",
    levelColor: "text-emerald-400 border-emerald-400/40",
    grad: "from-orange-400/40 to-pink-500/30",
  },
  {
    tag: "STRENGTH",
    tagColor: "bg-coral",
    title: "Full Body Strength — No Equipment",
    trainer: "Arjun Mehta",
    time: "35:00",
    level: "Intermediate",
    levelColor: "text-gold border-gold/40",
    grad: "from-sky-500/30 to-indigo-500/30",
  },
  {
    tag: "CARDIO",
    tagColor: "bg-sky-500",
    title: "HIIT Cardio Blast — 20 Minutes",
    trainer: "Vikram Singh",
    time: "20:00",
    level: "Intermediate",
    levelColor: "text-gold border-gold/40",
    grad: "from-teal-400/30 to-cyan-500/30",
  },
];

export function ExploreScreen() {
  const chips = ["All", "Yoga", "Strength", "Cardio", "Tutorial"];
  return (
    <PhoneFrame glowClassName="bg-violet-500/10">
      <div className="no-scrollbar h-full overflow-y-auto px-4 pb-20 pt-10">
        <p className="text-xl font-extrabold text-white">Explore</p>
        <p className="text-[11px] text-slate-400">
          Yoga, strength &amp; health tutorials
        </p>

        {/* Filter chips */}
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
          {chips.map((c, i) => (
            <span
              key={c}
              className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium ${
                i === 0
                  ? "bg-gold text-navy-950"
                  : "border border-white/10 text-slate-300"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-3 space-y-3">
          {exploreItems.map((it) => (
            <div
              key={it.title}
              className="overflow-hidden rounded-2xl border border-white/5 bg-navy-800"
            >
              <div
                className={`relative flex h-24 items-center justify-center bg-gradient-to-br ${it.grad}`}
              >
                <span
                  className={`absolute left-2 top-2 rounded px-1.5 py-0.5 text-[8px] font-bold text-white ${it.tagColor}`}
                >
                  {it.tag}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/90 text-navy-950">
                  <PlayIcon className="h-4 w-4" />
                </span>
                <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/40 px-1.5 py-0.5 text-[8px] text-white">
                  <ClockIcon className="h-2.5 w-2.5" /> {it.time}
                </span>
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold leading-tight text-white">
                  {it.title}
                </p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[9px] text-slate-400">
                    {it.trainer}
                  </span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[8px] font-medium ${it.levelColor}`}
                  >
                    {it.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="explore" />
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Workout detail screen — single session view                         */
/* ------------------------------------------------------------------ */
export function WorkoutScreen() {
  return (
    <PhoneFrame glowClassName="bg-coral/10">
      <div className="no-scrollbar h-full overflow-y-auto pb-20">
        {/* Hero image */}
        <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-slate-600/50 to-navy-950">
          <span className="absolute left-4 top-10 text-white">‹</span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/90 text-navy-950">
            <PlayIcon className="h-7 w-7" />
          </span>
        </div>

        <div className="px-5 pt-4">
          <div className="flex items-center gap-2">
            <span className="rounded bg-coral px-2 py-0.5 text-[9px] font-bold text-white">
              STRENGTH
            </span>
            <span className="rounded-full border border-coral/50 px-2 py-0.5 text-[9px] font-medium text-coral">
              Advanced
            </span>
            <span className="flex items-center gap-1 text-[10px] text-slate-300">
              <ClockIcon className="h-3 w-3" /> 28:00
            </span>
          </div>

          <h3 className="mt-3 text-xl font-extrabold leading-tight text-white">
            Power Strength Training
          </h3>
          <p className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
            <UserIcon className="h-3.5 w-3.5" /> Priya Sharma
          </p>

          <div className="my-4 h-px w-full bg-white/10" />

          <p className="text-[12px] leading-relaxed text-slate-300">
            Combine the mindfulness of strength with strength-building poses in
            this dynamic power strength session.
          </p>
        </div>
      </div>
      <BottomNav active="play" />
    </PhoneFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Discover screen — curated health reads                              */
/* ------------------------------------------------------------------ */
export function DiscoverScreen() {
  return (
    <PhoneFrame glowClassName="bg-emerald-500/10">
      <div className="no-scrollbar h-full overflow-y-auto px-4 pb-20 pt-10">
        <span className="text-white">‹</span>
        <p className="mt-2 text-xl font-extrabold text-white">Discover</p>
        <p className="text-[11px] text-slate-400">
          Health reads curated for you
        </p>

        {/* Featured article */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-white/5 bg-navy-800">
          <div className="h-28 bg-gradient-to-br from-slate-700/60 to-navy-950" />
          <div className="p-3.5">
            <p className="text-xs font-bold leading-snug text-white">
              How Obesity Affects Long-Term Heart Health
            </p>
            <p className="mt-1.5 text-[10px] leading-snug text-slate-400">
              The connection between obesity, cardiovascular disease and
              inflammation, plus lifestyle changes that reduce long-term risk.
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[9px] text-slate-500">
                American Heart Association
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-gold">
                Read more <ArrowRightIcon className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Second article */}
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/5 bg-navy-800">
          <div className="h-24 bg-gradient-to-br from-emerald-700/40 to-navy-950" />
          <div className="p-3.5">
            <p className="text-xs font-bold leading-snug text-white">
              Building a Balanced Plate for Everyday Energy
            </p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[9px] text-slate-500">
                Nutrition Weekly
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-gold">
                Read more <ArrowRightIcon className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="explore" />
    </PhoneFrame>
  );
}
