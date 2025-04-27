import Link from "next/link";
import { Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
      <div className="flex items-center gap-2">
        <Hexagon className="h-8 w-8 text-emerald-500" />
        <span className="font-bold text-xl">Lulox</span>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link
          href="#projects"
          className="hover:text-emerald-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="hover:text-emerald-400 transition-colors"
        >
          Skills
        </Link>
        {/* <Link
          href="#about"
          className="hover:text-emerald-400 transition-colors"
        >
          About
        </Link> */}
        <Link
          href="#contact"
          className="hover:text-emerald-400 transition-colors"
        >
          Contact
        </Link>
      </nav>
      <div className="px-10"></div>
      {/* <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-950 hover:text-white">
        Connect Wallet
      </Button> */}
    </header>
  );
}
