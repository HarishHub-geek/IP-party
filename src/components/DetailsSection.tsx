const facts = [
  { label: "When", value: "Oct 9–12, 2026", sub: "Friday through Monday" },
  { label: "Where", value: "The Poconos", sub: "Pennsylvania — short drive from the Northeast" },
  {
    label: "Who",
    value: "Coaches & founders",
    sub: "With a signature method ready to become software",
  },
];

const readyIf = [
  "A coaching or service business built on a specific process",
  "A method worth building into software",
  "Four days of protected focus time",
  "Willingness to use AI throughout the weekend",
  "No coding knowledge required",
];

export default function DetailsSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-14 md:py-20">
      <div className="mx-auto max-w-[980px]">
        <h2 className="text-center font-['Instrument_Serif'] text-[36px] leading-[1.1] tracking-[0.5px] text-[#1d3561] md:text-[60px]">
          DETAILS THAT KEEP
          <br />
          YOUR FOCUS HIGH
        </h2>
        <p className="mx-auto mt-4 max-w-[524px] text-center font-['Manrope'] text-[14px] leading-[1.8] text-[#8a8478]">
          The Poconos sit within a short drive from most of the Northeast, so your travel time
          stays low and your build time stays high.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[#1a1918] p-8 md:p-10">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`py-7 ${i < facts.length - 1 ? "border-b border-white/[0.08]" : ""}`}
              >
                <p className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[2px] text-[#f53c28]">
                  {fact.label}
                </p>
                <p className="mt-3 font-['Instrument_Serif'] text-[28px] text-[#faf6ea] md:text-[30px]">
                  {fact.value}
                </p>
                <p className="mt-1 font-['Manrope'] text-[13px] text-[#faf6ea]/45">{fact.sub}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#4a5322] p-8 md:p-10">
            <p className="font-['Instrument_Serif'] text-[28px] leading-[1.25] text-[#e5f557] md:text-[35px]">
              You&apos;re ready if you have a method worth building.
            </p>
            <ul className="mt-9 flex flex-col gap-5">
              {readyIf.map((item) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-0.5 text-[#e5f557]">✦</span>
                  <span className="font-['Manrope'] text-[14px] leading-[1.7] text-[#faf6ea]/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
