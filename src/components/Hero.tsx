import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import WaitlistLink from "@/components/WaitlistLink";

export default function Hero() {
  return (
    <section className="flex flex-col bg-[#ede4cc] md:flex-row">
      <div className="flex h-[300px] flex-col md:h-[537px] md:w-[527px]">
        <PhotoPlaceholder className="h-1/2 w-full" from="#7a8a72" to="#3c4a3a" />
        <PhotoPlaceholder className="h-1/2 w-full" from="#4a3f33" to="#1c1712" />
      </div>

      <div className="flex flex-1 flex-col justify-center px-6 py-12 md:px-14 md:py-0">
        <h1 className="font-['Instrument_Serif'] text-[42px] leading-[1.05] tracking-[0.5px] text-[#134624] md:text-[55px]">
          THE IP SPRINT
          <br />
          RETREAT <span className="text-[#f53c28]">IS FOR YOU</span>
        </h1>

        <p className="mt-6 max-w-[375px] font-['Manrope'] text-[14px] leading-[1.85] text-[#1a1918]">
          A vibe coding residency for coaches and service providers ready to turn their signature
          method into software. Four days. October 9–12, 2026. The Poconos.
        </p>

        <div className="mt-8 flex flex-col items-start gap-3">
          <WaitlistLink className="flex h-[44px] w-[266px] items-center justify-center rounded-full bg-[#4a5322] font-['DM_Sans'] text-[14px] font-medium uppercase tracking-[1.4px] text-[#faf6ea] transition-opacity hover:opacity-90">
            Join the Waitlist
          </WaitlistLink>
          <a
            href="#what-you-get"
            className="flex h-[46px] w-[266px] items-center justify-center rounded-full border border-[#4a5322] font-['DM_Sans'] text-[14px] tracking-[1.4px] text-[#4a5322] uppercase transition-colors hover:bg-[#4a5322]/5"
          >
            See What&apos;s Included
          </a>
        </div>

        <p className="mt-8 font-['Instrument_Serif'] text-[15px] italic text-[#1a1918]">
          No logistics. No meal planning. No childcare coordination.
        </p>
      </div>
    </section>
  );
}
