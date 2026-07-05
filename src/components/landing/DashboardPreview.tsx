import { ArrowUpRight, BarChart3, CircleDollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../Reveal";

const previewCards = [
  { label: "Active Learners", value: "48,750", Icon: Users },
  { label: "Net Progress", value: "11,337", Icon: BarChart3 },
  { label: "Revenue Impact", value: "$23,685", Icon: CircleDollarSign },
];

export function DashboardPreview() {
  return (
    <section id="dashboard-preview" className="py-20 lg:py-28">
      <div className="section-padding">
        <Reveal>
          <div className="rounded-3xl border border-studz-brand/25 bg-gradient-to-b from-zinc-950 to-black text-zinc-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <p className="text-studz-brand text-sm font-medium">Template-inspired dashboard</p>
                <h2 className="text-2xl md:text-3xl font-semibold mt-1">Built for studzAi insights</h2>
              </div>
              <Link to="/dashboard" className="btn-accent !rounded-xl !px-5 !py-2.5 text-sm">
                Open full dashboard
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {previewCards.map(({ label, value, Icon }) => (
                <article key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="inline-flex p-2 rounded-lg bg-studz-brand/20 text-studz-brand mb-3">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                  <p className="text-2xl font-bold mt-1">{value}</p>
                  <p className="mt-2 text-xs text-studz-brand inline-flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3" />
                    +12% from last month
                  </p>
                </article>
              ))}
            </div>

            <div className="h-44 rounded-2xl border border-studz-brand/20 bg-gradient-to-t from-studz-brand/20 to-transparent p-3 flex items-end gap-2">
              {[20, 32, 38, 48, 52, 60, 56, 64, 72, 78, 74, 84].map((height, i) => (
                <div key={i} className="flex-1 rounded-t bg-studz-brand/80" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
