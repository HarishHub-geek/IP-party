import type { AnchorHTMLAttributes } from "react";
import { WAITLIST_FORM_URL } from "@/lib/waitlist";

type WaitlistLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target" | "rel">;

export default function WaitlistLink({ children, ...props }: WaitlistLinkProps) {
  return (
    <a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
