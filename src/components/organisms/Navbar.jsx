
import { useState } from "react";
import { Menu, X, Search, UserRound } from "lucide-react";

import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50 animate-navbar-in">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">

                <Logo light />

                <div className="hidden lg:ml-auto lg:mr-12 lg:block [&_a]:text-white [&_a]:text-xs [&_a]:hover:text-emerald-300">
                    <NavLinks />
                </div>

                <div className="hidden items-center gap-4 lg:flex">
                    <button
                        aria-label="Search"
                        className="text-white transition hover:scale-110 hover:text-emerald-300"
                    >
                        <Search size={17} />
                    </button>

                    <button className="flex items-center gap-2 rounded-md border border-white/60 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white hover:text-slate-900">
                        <UserRound size={14} />
                        Sign In
                    </button>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white lg:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={25} /> : <Menu size={25} />}
                </button>
            </nav>

            {menuOpen && (
                <div className="mx-5 animate-hero-fade-up rounded-xl bg-white p-5 shadow-xl lg:hidden">
                    <NavLinks
                        mobile
                        onLinkClick={() => setMenuOpen(false)}
                    />
                </div>
            )}
        </header>
    );
}

export default Navbar;
