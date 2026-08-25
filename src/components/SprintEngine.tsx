import WaitlistLink from "@/components/WaitlistLink";

const steps = [
  {
    number: "01",
    title: "Arrive & Brainstorm",
    badge: "Starts here",
    body: "Check in Friday afternoon. Welcome dinner and guided brainstorming to define exactly what you are building.",
    active: true,
  },
  {
    number: "02",
    title: "Sprint Planning",
    body: "Saturday morning workshop. You leave with a scoped, buildable plan for your beta.",
  },
  {
    number: "03",
    title: "Vibe Coding Blocks",
    body: "Structured build blocks all day, aligned to token limits. Meals and breaks built in — no idle time.",
  },
  {
    number: "04",
    title: "UI Improvement",
    body: "Sunday workshop: turn your functional beta into something you'd put in front of a paying client.",
  },
  {
    number: "05",
    title: "Beta Launch & Departure",
    body: "Monday walkthroughs, promotion planning, and departure with a working beta ready to promote.",
  },
];

const checklist = [
  { label: "Beta scoped & planned", status: "Done", done: true },
  { label: "Core flow built", status: "Done", done: true },
  { label: "UI polish", status: "In review", done: false },
  { label: "Promotion plan", status: "Queued", done: false },
];

export default function SprintEngine() {
  return (
    <section id="agenda" className="grid grid-cols-1 bg-[#4a5322] lg:grid-cols-2">
      <div className="px-6 py-16 md:px-10 md:py-24">
        <h2 className="max-w-[433px] font-['Instrument_Serif'] text-[36px] leading-[1.1] tracking-[0.5px] text-[#faf6ea] md:text-[50px]">
          AN ONGOING SPRINT ENGINE
        </h2>

        <div className="mt-11 flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex gap-4 py-5 ${
                i < steps.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] font-['DM_Sans'] text-[12px] font-semibold ${
                  step.active
                    ? "border-[#f53c28] bg-[#f53c28] text-white"
                    : "border-[rgba(26,25,24,0.09)] bg-[#faf6ea] text-[#8a8478]"
                }`}
              >
                {step.number}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-['Manrope'] text-[20px] font-bold text-white">
                    {step.title}
                  </p>
                  {step.badge && (
                    <span className="rounded-full bg-[#e5f557] px-2.5 py-0.5 font-['Manrope'] text-[10px] font-bold uppercase tracking-[1.2px] text-[#1a1918]">
                      {step.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 max-w-[450px] font-['Manrope'] text-[14px] leading-[1.5] text-[#afafaf]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-16 md:px-10 lg:pb-24 lg:pt-24">
        <div className="overflow-hidden rounded-2xl bg-[#1a1918] p-8 md:p-10">
          <h3 className="font-['Instrument_Serif'] text-[32px] leading-tight tracking-[1px] text-[#e5f557]">
            NO CALLS.
            <br />
            JUST BUILDING.
          </h3>
          <p className="mt-6 max-w-[349px] font-['Manrope'] text-[14px] leading-[1.8] text-white">
            The entire weekend is structured around your tools&apos; token limits. When your
            session hits a natural reset point, you step away for a meal, a workshop, or time
            outside. When your tools are ready, you are back at your desk.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl bg-[#faf6ea]">
            <div className="flex h-[47px] items-center gap-1.5 border-b border-black/[0.03] pl-[18px]">
              <span className="h-[11px] w-[11px] rounded-full bg-[#ff6467]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#fdc700]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#05df72]" />
              <span className="ml-4 font-['DM_Sans'] text-[13px] text-[#1a1918]/25">
                This week&apos;s sprint
              </span>
            </div>

            {checklist.map((item) => (
              <div
                key={item.label}
                className="flex h-14 items-center justify-between border-b border-black/[0.02] px-[18px]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-[18px] w-[18px] items-center justify-center rounded-[5px] text-[11px] text-white ${
                      item.done ? "bg-[#5e7a4f]" : "bg-[#e5e5e5]"
                    }`}
                  >
                    {item.done ? "✓" : ""}
                  </span>
                  <span className="font-['DM_Sans'] text-[13.7px] text-[#1a1918]">
                    {item.label}
                  </span>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 font-['DM_Sans'] text-[12px] ${
                    item.status === "Done"
                      ? "bg-[#e2f0dc] text-[#134624]"
                      : item.status === "In review"
                        ? "bg-[#fde8d4] text-[#f53c28]"
                        : "bg-[#ebebeb] text-[#888]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}

            <div className="p-[18px]">
              <WaitlistLink className="flex h-[46px] w-full items-center justify-center rounded-[14px] bg-[#f53c28] font-['DM_Sans'] text-[16px] text-white transition-opacity hover:opacity-90">
                Join the waitlist
              </WaitlistLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
