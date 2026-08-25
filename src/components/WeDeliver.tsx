import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function WeDeliver() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-[#1d3561] px-6 py-20 md:py-28">
      <div className="max-w-[655px] text-center">
        <h2 className="font-['Instrument_Serif'] text-[36px] leading-[1.15] tracking-[0.7px] md:text-[60px]">
          <span className="text-[#e5f557]">YOU LEAVE WITH A BETA,</span>
          <br />
          <span className="text-white">WHILE OTHERS LEAVE</span>
          <br />
          <span className="text-white">WITH GOOD INTENTIONS.</span>
        </h2>
      </div>

      <PhotoPlaceholder
        className="absolute right-10 top-6 hidden h-[150px] w-[150px] rotate-12 rounded-2xl md:block"
        from="#c98b3f"
        to="#3a6a86"
      />
    </section>
  );
}
