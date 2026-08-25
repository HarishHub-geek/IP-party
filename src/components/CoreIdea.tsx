import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function CoreIdea() {
  return (
    <section id="about" className="flex flex-col items-center bg-[#e5f557] px-6 py-16 md:py-[74px]">
      <h2 className="max-w-[596px] text-center font-['Instrument_Serif'] text-[36px] leading-[1.1] tracking-[0.5px] text-[#134624] md:text-[57px]">
        A SPRINT BUILT FOR FOCUSED BUILDING
      </h2>
      <p className="mt-6 max-w-[593px] text-center font-['Manrope'] text-[14px] leading-[1.85] text-[#1a1918]">
        Most retreats end with notes, a plan, and good intentions. This one ends with a working
        beta of the software your clients have been asking for. You built a process that works.
        This retreat gives you four days to build it into software.
      </p>
      <div className="relative mt-10 h-[220px] w-full max-w-[954px] overflow-hidden rounded-2xl md:h-[280px]">
        <PhotoPlaceholder className="h-full w-full" from="#e8d9a6" to="#8a6a3d" />
        <div className="absolute inset-0 bg-[#e5f557]/35" />
      </div>
    </section>
  );
}
