
import { useState } from "react";
import {
    MapPin,
    Home,
    Search,
    ChevronDown,
} from "lucide-react";

import heroImage from "../../assets/hero-property.png";

import SearchField from "../molecules/SearchField";
import Reveal from "../molecules/Reveal";

function Hero() {
    const [location, setLocation] = useState("Bangalore");
    const [propertyType, setPropertyType] = useState("all");
    const [purpose, setPurpose] = useState("Buy");

    const handleSearch = () => {
        console.log({ location, propertyType, purpose });
    };

    return (
        <section
            id="home"
            className="relative flex min-h-[680px] items-center bg-cover bg-center pt-24"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/10" />

            <div className="relative z-10 mx-auto flex min-h-[580px] w-full max-w-7xl flex-col justify-center px-5 pb-8 pt-16 lg:px-10">

                {/* HERO TEXT */}
                <Reveal direction="left">
                    <div className="max-w-xl">

                        <p className="text-xs font-semibold uppercase tracking-[3px] text-emerald-300">
                            Real Estate For Sale
                        </p>

                        <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            Find Your
                            <span className="block text-emerald-300">
                                Next Dream Home
                            </span>
                        </h1>

                        <p className="mt-5 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                            Discover exceptional properties and find
                            the perfect place to build your future.
                        </p>

                    </div>
                </Reveal>

                {/* SEARCH PANEL */}
                <Reveal direction="up" delay={200}>
                    <div className="mt-14">

                        {/* SEARCH TABS */}
                        <div className="flex gap-1">
                            {["Buy", "Rent", "Sell"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setPurpose(item)}
                                    className={`px-6 py-3 text-xs font-semibold transition ${
                                        purpose === item
                                            ? "bg-slate-900 text-white"
                                            : "bg-white/90 text-slate-700 hover:bg-white"
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* SEARCH FIELDS */}
                        <div className="grid gap-2 bg-slate-950/85 p-3 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] lg:items-center lg:gap-0">

                            <SearchField
                                variant="hero"
                                label="Location"
                                icon={MapPin}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter location"
                            />

                            <SearchField
                                variant="hero"
                                label="Property Type"
                                icon={Home}
                                type="select"
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                                options={[
                                    { label: "All Types", value: "all" },
                                    { label: "Apartment", value: "apartment" },
                                    { label: "Villa", value: "villa" },
                                    { label: "House", value: "house" },
                                ]}
                            />

                            <SearchField
                                variant="hero"
                                label="Price Range"
                                type="select"
                                options={[
                                    { label: "Any Price", value: "any" },
                                    { label: "Under ₹50L", value: "under-50" },
                                    { label: "₹50L - ₹1Cr", value: "50-100" },
                                    { label: "₹1Cr - ₹2Cr", value: "100-200" },
                                    { label: "Above ₹2Cr", value: "above-200" },
                                ]}
                            />

                            <SearchField
                                variant="hero"
                                label="Property Status"
                                type="select"
                                options={[
                                    { label: "Any Status", value: "any" },
                                    { label: "Ready to Move", value: "ready" },
                                    { label: "Under Construction", value: "construction" },
                                ]}
                            />

                            <button
                                onClick={handleSearch}
                                className="flex h-full min-h-14 items-center justify-center gap-2 bg-emerald-600 px-6 text-xs font-bold text-white transition hover:bg-emerald-700"
                            >
                                <Search size={17} />
                                Search
                            </button>

                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}

export default Hero;
