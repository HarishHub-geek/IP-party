import {
  LodgingIcon,
  MealsIcon,
  ChildcareIcon,
  WorkshopIcon,
  PlanningIcon,
  TimerIcon,
  GroupIcon,
  DemoIcon,
} from "@/components/icons/WhatYouGetIcons";

const items = [
  {
    icon: LodgingIcon,
    title: "Lodging",
    body: "Three nights at the retreat house in the Poconos",
  },
  { icon: MealsIcon, title: "All Meals", body: "Friday dinner through Monday lunch, handled" },
  {
    icon: ChildcareIcon,
    title: "Group Childcare",
    body: "Full retreat coverage so you can focus",
  },
  {
    icon: WorkshopIcon,
    title: "Vibe Coding Workshops",
    body: "Guided sessions on AI tools and prompt structure",
  },
  {
    icon: PlanningIcon,
    title: "Sprint Planning",
    body: "Leave day one with a scoped, buildable beta plan",
  },
  {
    icon: TimerIcon,
    title: "Protected Build Time",
    body: "Long uninterrupted blocks structured around token limits",
  },
  {
    icon: GroupIcon,
    title: "Small Group Access",
    body: "Founders building alongside you all weekend",
  },
  {
    icon: DemoIcon,
    title: "Demo Night",
    body: "Sunday peer feedback session before your final build day",
  },
];

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="bg-[#ede4cc] px-6 py-16 md:px-14 md:py-28">
      <h2 className="text-center font-['Instrument_Serif'] text-[36px] leading-[1.1] tracking-[0.5px] text-[#4a5322] md:text-[60px]">
        ALL-INCLUSIVE RETREAT
        <br />
        EXECUTION
      </h2>
      <p className="mx-auto mt-6 max-w-[448px] text-center font-['Manrope'] text-[14px] leading-[1.8] text-[#8a8478]">
        This is not a conference. It is continuous, protected build time with every logistic
        handled.
      </p>

      <div className="mx-auto mt-16 grid max-w-[1054px] grid-cols-1 gap-4 md:grid-cols-2">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex gap-6 rounded-2xl bg-[#faf6ea] p-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#ede4cc] text-[#134624]">
              <Icon />
            </div>
            <div>
              <p className="font-['Instrument_Serif'] text-[24px] text-[#134624]">{title}</p>
              <p className="mt-1 font-['Manrope'] text-[13px] leading-[1.75] text-[#8a8478]">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
