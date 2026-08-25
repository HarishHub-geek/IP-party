import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import WaitlistLink from "@/components/WaitlistLink";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#e5f557] px-6 py-16 md:py-20">
      <PhotoPlaceholder
        className="absolute inset-0 opacity-20"
        from="#8a6a3d"
        to="#2f3f26"
      />
      <div className="relative mx-auto flex max-w-[841px] flex-col items-center rounded-2xl bg-white px-6 py-16 text-center md:px-12">
        <h2 className="max-w-[634px] font-['Instrument_Serif'] text-[32px] leading-[1.15] tracking-[0.5px] text-[#1a1918] md:text-[55px]">
          YOUR SOFTWARE SHOULD <span className="italic">NOT LIVE IN YOUR HEAD.</span>
        </h2>
        <p className="mt-6 font-['Manrope'] text-[14px] text-[#1a1918]/60">
          Show up with your idea. Leave with a beta you can promote.
        </p>
        <WaitlistLink className="mt-8 flex h-[51px] w-[260px] items-center justify-center rounded-full bg-[#4a5322] font-['DM_Sans'] text-[14px] font-medium uppercase tracking-[1.4px] text-white transition-opacity hover:opacity-90">
          Join the Waitlist
        </WaitlistLink>
      </div>
    </section>
  );
}
