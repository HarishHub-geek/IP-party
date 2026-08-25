import { PersonSilhouetteIcon } from "@/components/icons/WhatYouGetIcons";

const speakers = [
  {
    bg: "bg-[#2a4570]",
    title: "SCOPE YOUR BETA. BUILD THE RIGHT THING FIRST.",
    body: "Leads a session on scoping your beta so it solves one problem well instead of ten problems partially, and on what to build first if you want to sell before the year ends.",
  },
  {
    bg: "bg-[#1a1918]",
    title: "VIBE CODING THAT ACTUALLY SHIPS.",
    body: "Leads the vibe coding workshops. Walks you through the AI tools that make this retreat possible, shows you how to structure prompts that produce usable code, and stays on hand throughout build blocks.",
  },
  {
    bg: "bg-[#3d5828]",
    title: "FROM FUNCTIONAL TO CLIENT-READY.",
    body: "Leads Sunday's UI improvement workshop. Shows you how to take a functional beta and make it look like something you would put in front of a paying client — covering layout, color, and trust-building design choices.",
  },
];

export default function SpeakersSection() {
  return (
    <section id="speakers" className="bg-[#1d3561] px-6 py-16 md:px-14 md:py-20">
      <h2 className="mx-auto max-w-[700px] text-center font-['Instrument_Serif'] text-[32px] leading-[1.15] tracking-[0.5px] text-white md:text-[50px]">
        EXPERT GUIDANCE ACROSS EVERY STAGE OF YOUR BUILD
      </h2>

      <div className="mx-auto mt-16 grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-3">
        {speakers.map((speaker) => (
          <div key={speaker.title} className="overflow-hidden rounded-2xl bg-[#faf6ea]">
            <div className={`flex h-[200px] items-end justify-center ${speaker.bg} relative`}>
              <PersonSilhouetteIcon className="h-[160px] w-[200px] text-white" />
              <span className="absolute bottom-6 rounded-full bg-white/[0.12] px-3 py-1 font-['Manrope'] text-[9px] font-bold uppercase tracking-[1.5px] text-white/50">
                Announcing soon
              </span>
            </div>
            <div className="p-6">
              <p className="font-['Instrument_Serif'] text-[20px] leading-[1.25] text-[#134624]">
                {speaker.title}
              </p>
              <p className="mt-4 font-['Manrope'] text-[13px] leading-[1.8] text-[#1a1918]">
                {speaker.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
