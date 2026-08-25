import { useState } from "react";

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. You need a signature method worth building — the vibe coding workshops walk you through the AI tools and prompt structure that do the heavy lifting.",
  },
  {
    q: "What is vibe coding?",
    a: "Building software by directing AI tools with clear, structured prompts instead of writing code line by line. Our workshops teach you how to structure those prompts so they produce usable, working software.",
  },
  {
    q: "What kind of software will I build?",
    a: "A working beta of the software version of your signature method — the specific process or framework you already use with clients.",
  },
  {
    q: "What does 'working beta' mean?",
    a: "A functional version of your software you can actually put in front of a client or user — not a mockup, something real that works.",
  },
  {
    q: "Is childcare really included?",
    a: "Yes. Group childcare is covered for the full retreat so you can focus on building.",
  },
  {
    q: "When do invitations open?",
    a: "September 1, on a first-come, first-serve basis. Join the waitlist to be notified the moment they go out.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white px-6 py-16 md:px-14 md:py-20">
      <div className="mx-auto max-w-[942px]">
        <h2 className="text-center font-['Instrument_Serif'] text-[36px] tracking-[0.5px] text-[#134624] md:text-[50px]">
          FREQUENTLY ASKED
        </h2>

        <div className="mt-16 border-t border-black/[0.12]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className="border-b border-black/[0.12]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="font-['Manrope'] text-[16px] font-bold text-[#1a1918] md:text-[18px]">
                    {faq.q}
                  </span>
                  <span
                    className={`ml-4 shrink-0 font-['DM_Sans'] text-[22px] font-semibold text-[#f53c28] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-[720px] pb-6 font-['Manrope'] text-[14px] leading-[1.8] text-[#1a1918]/70">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
