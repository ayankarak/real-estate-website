
const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "Agents", href: "#agents" },
    { name: "Contact", href: "#contact" },
];

function NavLinks({
    mobile = false,
    onLinkClick,
}) {
    return (
        <div
            className={`${
                mobile
                    ? "flex flex-col gap-5"
                    : "hidden items-center gap-8 lg:flex"
            }`}
        >
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={onLinkClick}
                    className="text-sm font-medium text-slate-700 transition hover:text-emerald-600"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
}

export default NavLinks;
