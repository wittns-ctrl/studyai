import { Check, X } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

type Cell = boolean | "partial";

const features: { name: string; student: Cell; teacher: Cell; admin: Cell }[] = [
  { name: "AI explanations & smart notes", student: true, teacher: false, admin: false },
  { name: "Homework help with hints", student: true, teacher: false, admin: false },
  { name: "Learning modes (exam, explore, revise)", student: true, teacher: false, admin: false },
  { name: "Personal progress & recommendations", student: true, teacher: "partial", admin: false },
  { name: "Class analytics & quiz creation", student: false, teacher: true, admin: false },
  { name: "Struggling student alerts", student: false, teacher: true, admin: false },
  { name: "User & curriculum management", student: false, teacher: false, admin: true },
  { name: "System logs & configuration", student: false, teacher: false, admin: true },
  { name: "Encrypted data & role-based access", student: true, teacher: true, admin: true },
];

function CellIcon({ value }: { value: Cell }) {
  if (value === true)
    return <Check className="h-5 w-5 text-violet-400 mx-auto" />;
  if (value === "partial")
    return <span className="text-xs text-zinc-500">View only</span>;
  return <X className="h-5 w-5 text-zinc-600 mx-auto" />;
}

export function RoleComparison() {
  return (
    <section className="py-20 lg:py-32">
      <div className="section-padding">
        <SectionHeading
          badge="Compare roles"
          title="The right tools for every user"
          subtitle="Students learn. Teachers guide. Administrators secure the platform."
        />

        <Reveal>
          <div className="overflow-x-auto rounded-2xl glass">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-5 font-medium text-zinc-600 dark:text-zinc-400">Capability</th>
                  <th className="p-5 font-semibold text-violet-300">Student</th>
                  <th className="p-5 font-semibold text-violet-300">Teacher</th>
                  <th className="p-5 font-semibold text-violet-300">Admin</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={row.name}
                    className={i % 2 === 0 ? "bg-white/[0.02]" : ""}
                  >
                    <td className="p-5 text-zinc-700 dark:text-zinc-300">{row.name}</td>
                    <td className="p-5 text-center">
                      <CellIcon value={row.student} />
                    </td>
                    <td className="p-5 text-center">
                      <CellIcon value={row.teacher} />
                    </td>
                    <td className="p-5 text-center">
                      <CellIcon value={row.admin} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
