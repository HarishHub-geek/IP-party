import WaitlistLink from "@/components/WaitlistLink";

const links = [
  { label: "About", href: "#about" },
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-[69px] items-center justify-between border-b border-white/[0.08] bg-[#f53c28] px-6 md:px-12">
      <p className="font-['Manrope'] text-[18px] font-bold uppercase tracking-[2px] text-[#faf6ea]">
        IP Sprint
      </p>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-['Manrope'] text-[12px] uppercase tracking-[1.2px] text-white transition-opacity hover:opacity-80"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <WaitlistLink className="rounded-full bg-[#1a1918] px-5 py-[10px] font-['Manrope'] text-[12px] font-medium uppercase tracking-[1.2px] text-[#faf6ea] transition-opacity hover:opacity-90">
        Join Waitlist
      </WaitlistLink>
    </header>
  );
}
