import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import WaitlistLink from "@/components/WaitlistLink";

export default function WaitlistSection() {
  return (
    <section className="flex flex-col bg-[#1d3561] md:flex-row">
      <div className="flex flex-col justify-center bg-[#f53c28] px-6 py-16 md:w-[527px] md:px-14 md:py-0">
        <h2 className="font-['Instrument_Serif'] text-[36px] leading-[1.13] tracking-[0.5px] text-white md:text-[50px]">
          JOIN THE
          <br />
          WAITLIST TO
          <br />
          SECURE <span className="text-[#e5f557]">YOUR SPOT.</span>
        </h2>
        <p className="mt-8 max-w-[386px] font-['Manrope'] text-[14px] leading-[1.75] text-white/90">
          Spots are limited to keep the group small and the build time real. Invitations open
          September 1 on a first-come, first-serve basis.
        </p>
        <div className="mt-10 flex max-w-[390px] flex-col items-start gap-3">
          <WaitlistLink className="flex h-[46px] w-full items-center justify-center rounded-full bg-[#1a1918] font-['DM_Sans'] text-[13px] font-medium uppercase tracking-[1.4px] text-[#faf6ea] transition-opacity hover:opacity-90">
            Join the Waitlist
          </WaitlistLink>
          <p className="font-['DM_Sans'] text-xs text-white/55">Invitations open September 1.</p>
        </div>
      </div>

      <div className="relative min-h-[300px] flex-1 overflow-hidden md:min-h-0">
        <PhotoPlaceholder className="h-full w-full" from="#2f3f26" to="#0f150c" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3d5230]/40 to-transparent" />
      </div>
    </section>
  );
}
