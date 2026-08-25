const links = [
  { label: "About", href: "#about" },
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-white/5 bg-[#f53c28] px-6 py-6 text-center md:flex-row md:justify-between md:px-14 md:text-left">
      <p className="font-['Manrope'] text-[16px] font-bold uppercase tracking-[1.5px] text-[#faf6ea]">
        IP Sprint Retreat
      </p>
      <p className="font-['DM_Sans'] text-[12px] text-white">
        © 2026 IP Sprint Retreat. All rights reserved.
      </p>
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-['DM_Sans'] text-[12px] text-white/80 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
