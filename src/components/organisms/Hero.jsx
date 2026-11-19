
import { useEffect, useState } from "react";
import {
    MapPin,
    Search,
    ChevronDown,
} from "lucide-react";

import heroImage from "../../assets/hero-property.png";

const heroImages = [
    heroImage,
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000",
];

function Hero() {
    const [location, setLocation] = useState("Bangalore");
    const [neighborhood, setNeighborhood] = useState("Richmond Town");
    const [propertyType, setPropertyType] = useState("Duplex");
    const [minPrice, setMinPrice] = useState("$350,000");
    const [maxPrice, setMaxPrice] = useState("$520,000");

    const [activeSlide, setActiveSlide] = useState(0);

    // AUTOMATIC IMAGE SLIDER
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % heroImages.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const handleSearch = () => {
        console.log({
            location,
            neighborhood,
            propertyType,
            minPrice,
            maxPrice,
        });
    };

    return (
        <section
            id="home"
            className="relative flex min-h-[720px] items-center overflow-hidden bg-slate-950"
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

            {/* MAIN CONTENT */}
            <div className="relative z-10 mx-auto min-h-[720px] w-full max-w-7xl px-5 pb-44 pt-32 lg:px-10">

                {/* HERO TEXT */}
                <div className="max-w-xl pt-10">

                    <p className="animate-hero-fade-up text-xs font-semibold uppercase tracking-[3px] text-white">
                        Real Estate For Sale
                    </p>

                    <h1 className="mt-4 animate-hero-fade-up font-serif text-4xl font-bold leading-tight text-white [animation-delay:150ms] sm:text-5xl lg:text-6xl">
                        Find your
                        <span className="block">
                            next dream home
                        </span>
                    </h1>

                    <p className="mt-5 max-w-md animate-hero-fade-up text-sm leading-7 text-white/80 [animation-delay:350ms] sm:text-base">
                        Discover exceptional properties and find
                        the perfect place to build your future.
                    </p>

                </div>

                {/* FLOATING PROPERTY PREVIEW */}
                <div className="absolute right-5 top-[34%] hidden w-[230px] sm:block lg:right-12 lg:w-[260px]">

                    <div className="overflow-hidden rounded-lg bg-white shadow-2xl">

                        <img
                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=700"
                            alt="Featured luxury property"
                            className="h-[135px] w-full object-cover lg:h-[155px]"
                        />

                        <div className="p-3">
                            <p className="text-xs font-bold text-slate-900">
                                Featured Property
                            </p>

                            <p className="mt-1 text-[11px] text-slate-500">
                                Modern Luxury Residence
                            </p>

                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-xs font-bold text-emerald-600">
                                    $520,000
                                </span>

                                <span className="text-[10px] font-medium text-slate-500">
                                    View Property →
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SLIDER INDICATORS */}
                <div className="absolute bottom-[145px] left-5 flex items-center gap-2 lg:left-10">
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

                {/* BOTTOM SEARCH PANEL */}
                <div className="absolute bottom-5 left-5 right-5 animate-hero-slide-up bg-slate-950/75 p-4 backdrop-blur-md [animation-delay:500ms] lg:left-10 lg:right-10 lg:p-5">

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_1fr_1fr_1fr_auto] lg:items-end lg:gap-5">

                        {/* LOCATION */}
                        <div>
                            <label className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                                <MapPin size={12} />
                                Location
                            </label>

                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter location"
                                className="w-full border-0 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/50"
                            />
                        </div>

                        {/* NEIGHBORHOOD */}
                        <div>
                            <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                                Neighborhood
                            </label>

                            <input
                                type="text"
                                value={neighborhood}
                                onChange={(e) => setNeighborhood(e.target.value)}
                                placeholder="Neighborhood"
                                className="w-full border-0 bg-transparent text-sm font-semibold text-white outline-none placeholder:text-white/50"
                            />
                        </div>

                        {/* PROPERTY TYPE */}
                        <div>
                            <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                                Property Type
                            </label>

                            <div className="relative">
                                <select
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                    className="w-full cursor-pointer appearance-none border-0 bg-transparent pr-5 text-sm font-semibold text-white outline-none"
                                >
                                    <option className="text-slate-900">Duplex</option>
                                    <option className="text-slate-900">Apartment</option>
                                    <option className="text-slate-900">Villa</option>
                                    <option className="text-slate-900">House</option>
                                    <option className="text-slate-900">Land</option>
                                </select>

                                <ChevronDown
                                    size={13}
                                    className="pointer-events-none absolute right-0 top-1 text-white/70"
                                />
                            </div>
                        </div>

                        {/* MIN PRICE */}
                        <div>
                            <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                                Min Price
                            </label>

                            <input
                                type="text"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                className="w-full border-0 bg-transparent text-sm font-semibold text-white outline-none"
                            />
                        </div>

                        {/* MAX PRICE */}
                        <div>
                            <label className="mb-2 block text-[10px] font-semibold uppercase tracking-wider text-white/60">
                                Max Price
                            </label>

                            <input
                                type="text"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className="w-full border-0 bg-transparent text-sm font-semibold text-white outline-none"
                            />
                        </div>

                        {/* SEARCH BUTTON */}
                        <button
                            onClick={handleSearch}
                            className="flex min-h-12 items-center justify-center gap-2 bg-emerald-600 px-7 text-xs font-bold text-white transition duration-300 hover:scale-[1.03] hover:bg-emerald-700 active:scale-95"
                        >
                            <Search size={17} />
                            Search
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
