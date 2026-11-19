
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaArrowRight,
} from "react-icons/fa";

import Logo from "../atoms/Logo";

function Footer() {
    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "Properties", href: "#properties" },
        { name: "About Us", href: "#about" },
        { name: "Agents", href: "#agents" },
        { name: "Contact", href: "#contact" },
    ];

    const propertyLinks = [
        "Apartments",
        "Villas",
        "Residential Land",
        "Commercial Properties",
        "Luxury Homes",
    ];

    const socialLinks = [
        { icon: FaFacebookF, href: "#", label: "Facebook" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
    ];

    return (
        <footer id="contact" className="bg-[#17264f] text-white">

            {/* MAIN FOOTER */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-20">

                {/* COMPANY INFO */}
                <div>
                    <Logo light />

                    <p className="mt-6 max-w-xs text-sm leading-7 text-gray-300">
                        Find your perfect property with confidence.
                        We help you discover beautiful homes and
                        make better real estate decisions.
                    </p>

                    {/* SOCIAL LINKS */}
                    <div className="mt-6 flex items-center gap-3">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-gray-300 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
                                >
                                    <Icon size={17} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="mb-6 text-lg font-bold">
                        Quick Links
                    </h3>

                    <ul className="space-y-4">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="flex items-center gap-2 text-sm text-gray-300 transition hover:translate-x-1 hover:text-emerald-400"
                                >
                                    <FaArrowRight size={12} />
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* PROPERTY CATEGORIES */}
                <div>
                    <h3 className="mb-6 text-lg font-bold">
                        Property Types
                    </h3>

                    <ul className="space-y-4">
                        {propertyLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href="#properties"
                                    className="flex items-center gap-2 text-sm text-gray-300 transition hover:translate-x-1 hover:text-emerald-400"
                                >
                                    <FaArrowRight size={12} />
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT INFO */}
                <div>
                    <h3 className="mb-6 text-lg font-bold">
                        Contact Us
                    </h3>

                    <div className="space-y-5">

                        <div className="flex items-start gap-3">
                            <FaMapMarkerAlt
                                size={17}
                                className="mt-1 shrink-0 text-emerald-400"
                            />
                            <p className="text-sm leading-6 text-gray-300">
                                Kolkata, West Bengal, India
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt
                                size={16}
                                className="shrink-0 text-emerald-400"
                            />
                            <a
                                href="tel:+919876543210"
                                className="text-sm text-gray-300 transition hover:text-emerald-400"
                            >
                                +91 98765 43210
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope
                                size={17}
                                className="shrink-0 text-emerald-400"
                            />
                            <a
                                href="mailto:info@example.com"
                                className="break-all text-sm text-gray-300 transition hover:text-emerald-400"
                            >
                                info@example.com
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:flex-row sm:px-10">

                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} ADD Properties.
                        All Rights Reserved.
                    </p>

                    <div className="flex gap-5 text-xs text-gray-400">
                        <a href="#" className="transition hover:text-emerald-400">
                            Privacy Policy
                        </a>

                        <a href="#" className="transition hover:text-emerald-400">
                            Terms & Conditions
                        </a>
                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;
