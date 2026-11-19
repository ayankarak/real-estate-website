
import { useEffect, useState } from "react";
import {
    MapPin,
    Home,
    Search,
} from "lucide-react";

import heroImage from "../../assets/hero-property.png";
import SearchField from "../molecules/SearchField";

const heroImages = [
    heroImage,
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000",
];

function Hero() {
    const [location, setLocation] = useState("Bangalore");
    const [propertyType, setPropertyType] = useState("all");
    const [purpose, setPurpose] = useState("Buy");
    const [activeSlide, setActiveSlide] = useState(0);

    // AUTOMATIC IMAGE SLIDER
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroImages.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const handleSearch = () => {
        console.log({ location, propertyType, purpose });
    };

    return (
        <section
            id="home"
            className="relative flex min-h-[680px] items-center overflow-hidden bg-slate-950 pt-24"
        >
            {/* BACKGROUND IMAGE SLIDER */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
                        activeSlide === index
                            ? "z-[1] opacity-100"
                            : "z-0 opacity-0"
                    }`}
                >
                    <img
                        src={image}
                        alt={`Property background ${index + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-linear ${
                            activeSlide === index
                                ? "scale-110"
                                : "scale-100"
                        }`}
                    />
                </div>
            ))}

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-slate-950/15" />

            <div className="relative z-10 mx-auto flex min-h-[580px] w-full max-w-7xl flex-col justify-center px-5 pb-8 pt-16 lg:px-10">

                {/* HERO TEXT */}
                <div className="max-w-xl">

                    <p className="animate-hero-fade-up text-xs font-semibold uppercase tracking-[3px] text-emerald-300">
                        Real Estate For Sale
                    </p>

                    <h1 className="mt-4 animate-hero-fade-up text-4xl font-bold leading-tight text-white [animation-delay:150ms] sm:text-5xl lg:text-6xl">
                        Find Your
                        <span className="block text-emerald-300">
                            Next Dream Home
                        </span>
                    </h1>

                    <p className="mt-5 max-w-md animate-hero-fade-up text-sm leading-7 text-white/80 [animation-delay:350ms] sm:text-base">
                        Discover exceptional properties and find
                        the perfect place to build your future.
                    </p>

                </div>

                {/* SEARCH PANEL */}
                <div className="mt-14 animate-hero-slide-up [animation-delay:500ms]">

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
                                { label: "Land", value: "land" },
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
                            className="flex h-full min-h-14 items-center justify-center gap-2 bg-emerald-600 px-6 text-xs font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-emerald-700 active:scale-95"
                        >
                            <Search size={17} />
                            Search
                        </button>

                    </div>
                </div>

                {/* SLIDER INDICATORS */}
                <div className="mt-7 flex items-center gap-2">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            aria-label={`Show background image ${index + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                activeSlide === index
                                    ? "w-8 bg-emerald-400"
                                    : "w-3 bg-white/60 hover:bg-white"
                            }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Hero;
