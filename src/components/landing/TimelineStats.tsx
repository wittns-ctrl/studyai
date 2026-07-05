
import { Reveal } from "../Reveal";

const timelines = [
  { year: "2014", label: "Year Founded", sub: "Starting our journey" },
  { year: "304", label: "Projects Delivered", sub: "Across industries" },
  { year: "189", label: "Clients Onboarded", sub: "Happy and satisfied" },
  { year: "12", label: "Projects in work", sub: "Currently active" },
];

export function TimelineStats() {
  return (
    <section className="py-20 lg:py-32 relative" id="about">
      <div className="section-padding relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {timelines.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="flex flex-col relative">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4">
                  {item.year}
                </h3>
                <p className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">{item.label}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">{item.sub}</p>
                
                {/* Horizontal line connecting them */}
                {i < timelines.length - 1 && (
                  <div className="hidden md:block absolute top-28 left-1/2 w-full h-[1px] bg-zinc-200 dark:bg-zinc-800" />
                )}
                
                {/* Image placeholder (avatar) */}
                <div className="flex -space-x-2 mt-2">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 object-cover" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-900 object-cover" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="btn-accent px-8 py-3 rounded-full flex items-center gap-2">
            Get Started <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
