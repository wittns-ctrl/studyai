import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const team = [
  {
    name: "Mugisha Witness Bienvenue",
    role: "Lead Developer & Author",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Education Team",
    role: "Curriculum & Pedagogy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  },
  {
    name: "AI Research",
    role: "Prompt Engineering & Safety",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
  {
    name: "Community",
    role: "School Partners & Beta Testers",
    image: "https://images.unsplash.com/photo-1522075460831-450bc94885c2?w=200&q=80",
  },
];

export function Team() {
  return (
    <section className="py-20 lg:py-32">
      <div className="section-padding">
        <SectionHeading
          badge="Our team"
          title="Built for education, by educators & engineers"
          subtitle="Designed for real classrooms—especially where personalized support is hard to find."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="text-center group">
                <div className="relative mx-auto w-28 h-28 rounded-2xl overflow-hidden glass glass-hover mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-violet-400/90 mt-1">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
