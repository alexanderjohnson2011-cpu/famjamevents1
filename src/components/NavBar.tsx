"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PHONE = "312-414-9698";
const TEL = "sms:+13124149698";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/vibe-lab", label: "Vibe Lab" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book", label: "Book" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="neon-nav">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/fam-jam-events-logo-transparent.webp" alt="Fam Jam Events" width={540} height={180} className="h-24 w-auto" priority />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return <Link key={item.href} href={item.href} className={`neon-link font-body text-sm ${active ? "neon-link-active" : ""}`}>{item.label}</Link>;
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/book" className="glow-plate glow-plate-gold px-5 py-2 rounded-xl text-sm font-semibold">Book Now</Link>
            <a href={TEL} className="glow-plate glow-plate-pink px-4 py-2 rounded-xl text-sm font-semibold">Text {PHONE}</a>
          </div>

          <button className="md:hidden glow-plate glow-plate-purple px-4 py-2 rounded-xl text-sm font-semibold" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
        </div>
      </header>

      {open && (
        <>
          <div className="drawer-backdrop" onClick={() => setOpen(false)} />
          <div className="drawer-panel p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <Image src="/fam-jam-events-logo-transparent.webp" alt="Fam Jam Events" width={480} height={162} className="h-20 w-auto" />
              <button className="glow-plate glow-plate-pink px-3 py-2 rounded-xl text-sm font-semibold" onClick={() => setOpen(false)}>Close</button>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`neon-card-dark neon-hover px-4 py-3 rounded-xl text-white ${pathname === item.href ? "ring-1 ring-white/20" : ""}`}>{item.label}</Link>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="md:hidden mobile-cta-bar">
        <div className="mx-auto max-w-6xl px-2 flex gap-3">
          <Link href="/book" className="glow-plate glow-plate-gold flex-1 py-3 rounded-xl text-center font-semibold">Book Now</Link>
          <a href={TEL} className="glow-plate glow-plate-pink flex-1 py-3 rounded-xl text-center font-semibold">Text</a>
        </div>
      </div>
    </>
  );
}
