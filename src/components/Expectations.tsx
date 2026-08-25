const notFor = [
  "You want to be told what to do, step by step, before you start",
  "You are not willing to use AI tools in your build process",
  "You do not have a method or process with proven client results",
  "You are looking for a networking event rather than a build sprint",
];

const goodFit = [
  "You have a signature method or framework built through client work",
  "You have thought about what software version of that method would look like",
  "You are willing to work with AI tools intensively for four days",
  "You are ready to stop planning and start building",
];

export default function Expectations() {
  return (
    <section className="bg-[#4a5322] px-6 py-16 md:px-14 md:py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <h2 className="font-['Instrument_Serif'] text-[36px] leading-[1.1] tracking-[0.5px] text-[#e5f557] md:text-[60px]">
          MOST PEOPLE WAIT.
          <br />
          <span className="italic">YOU BUILD.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[600px] font-['Manrope'] text-[14px] leading-[1.85] text-white/80">
          This vibe coding residency requires heavy use of AI throughout the weekend. If that does
          not align with how you want to work, this is not the right fit. You do not need to know
          how to code. You need a method worth building and four days to build it.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[980px] grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-[#1a1918]/30 p-8">
          <ul className="flex flex-col gap-4">
            {notFor.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-0.5 text-[#f53c28]">✦</span>
                <span className="font-['Manrope'] text-[14px] leading-[1.75] text-white/70">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-[#e5f557]/[0.12] p-8">
          <ul className="flex flex-col gap-4">
            {goodFit.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-0.5 text-[#e5f557]">✦</span>
                <span className="font-['Manrope'] text-[14px] leading-[1.75] text-white/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
