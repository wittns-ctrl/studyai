import {
  Activity,
  ArrowUpRight,
  Bell,
  BookOpen,
  CircleDollarSign,
  LayoutDashboard,
  LineChart,
  LogOut,
  MessageSquareText,
  Settings,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const summaryCards = [
  { label: "Total Learners", value: "48,750", trend: "+12.5%", icon: Users },
  { label: "Lessons Completed", value: "23,685", trend: "+8.4%", icon: BookOpen },
  { label: "Avg. Study Time", value: "12,347 hrs", trend: "+4.7%", icon: Activity },
  { label: "Learning Impact", value: "11,337", trend: "+15.3%", icon: Target },
];

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BookOpen, label: "Courses" },
  { icon: Users, label: "Students" },
  { icon: MessageSquareText, label: "Messages" },
  { icon: LineChart, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      <aside className="hidden lg:flex w-72 border-r border-white/10 bg-black/70 backdrop-blur-xl p-6 flex-col">
        <Link to="/" className="inline-flex items-center gap-3 mb-10">
          <img src="/studz-logo.svg" alt="studzAi logo" className="w-9 h-9" />
          <span className="text-xl font-bold tracking-tight">
            studz<span className="text-studz-brand">Ai</span>
          </span>
        </Link>

        <nav className="space-y-2">
          {sidebarLinks.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${
                item.active
                  ? "bg-studz-brand text-white"
                  : "text-zinc-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-2xl border border-studz-brand/30 bg-studz-brand/10 p-4 text-sm text-zinc-200">
          Keep your learners engaged with weekly progress check-ins.
          <button
            type="button"
            className="mt-3 w-full rounded-lg bg-studz-brand px-3 py-2 font-medium text-white hover:bg-studz-brandDark"
          >
            View report
          </button>
        </div>
      </aside>

      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
        <header className="rounded-2xl border border-white/10 bg-black/60 p-4 sm:p-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-400">Welcome back</p>
            <h1 className="text-2xl font-semibold">
              studz<span className="text-studz-brand">Ai</span> Command Center
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
            </button>
            <Link to="/login" className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {summaryCards.map((card) => (
            <article
              key={card.label}
              className="rounded-2xl border border-white/10 bg-black/70 p-5 relative overflow-hidden"
            >
              <div className="absolute right-3 top-3 p-2 rounded-full bg-studz-brand/20 text-studz-brand">
                <card.icon className="h-4 w-4" />
              </div>
              <p className="text-sm text-zinc-400">{card.label}</p>
              <p className="mt-2 text-3xl font-bold">{card.value}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-sm text-studz-brand">
                <ArrowUpRight className="h-4 w-4" />
                {card.trend} this month
              </p>
            </article>
          ))}
        </section>

        <section className="grid xl:grid-cols-3 gap-4">
          <article className="xl:col-span-2 rounded-2xl border border-white/10 bg-black/70 p-5">
            <h2 className="font-semibold mb-3">Learning Progress</h2>
            <div className="h-56 rounded-xl bg-gradient-to-t from-studz-brand/20 to-transparent border border-studz-brand/20 flex items-end gap-2 p-3">
              {[32, 40, 38, 48, 58, 55, 67, 73, 78, 70, 82, 88].map((v, i) => (
                <div key={i} className="flex-1 rounded-t bg-studz-brand/70" style={{ height: `${v}%` }} />
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-black/70 p-5">
            <h2 className="font-semibold mb-4">Spending by Category</h2>
            <div className="space-y-3 text-sm">
              {[
                ["Content creation", "$3,200", "25.9%"],
                ["Platform improvements", "$2,850", "23.1%"],
                ["Operations", "$2,450", "19.6%"],
                ["Team", "$2,100", "17.0%"],
              ].map(([label, value, ratio]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-zinc-300">{label}</span>
                  <span className="text-zinc-400">
                    {value} · {ratio}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/70 p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Goals Progress</h2>
            <CircleDollarSign className="h-4 w-4 text-studz-brand" />
          </div>
          <div className="mt-4 space-y-4">
            {[
              ["Monthly Revenue Target", 86],
              ["Learning Adoption", 82],
              ["Completion Goal", 57],
            ].map(([label, progress]) => (
              <div key={label as string}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-zinc-300">{label}</span>
                  <span className="text-zinc-400">{progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-studz-brand to-studz-brandLight"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
