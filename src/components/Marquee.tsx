const tags = [
  "4-day residency",
  "vibe coding",
  "sprint planning",
  "all meals included",
  "group childcare",
  "small group",
  "build your beta",
  "The Poconos",
];

export default function Marquee() {
  const track = [...tags, ...tags];

  return (
    <div className="overflow-hidden bg-[#1d3561] py-3">
      <div className="animate-marquee flex w-max items-center gap-8">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
            {track.map((tag, i) => (
              <div key={`${copy}-${i}`} className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="font-['DM_Sans'] text-[12px] tracking-[2.16px] text-[#f53c28]">
                  ✦
                </span>
                <span className="font-['DM_Sans'] text-[12px] uppercase tracking-[2.16px] text-[#faf6ea]">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
