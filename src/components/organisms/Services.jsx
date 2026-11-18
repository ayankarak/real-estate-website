
import {
    House,
    KeyRound,
    Handshake,
    ArrowRight,
} from "lucide-react";

import Reveal from "../molecules/Reveal";

function Services() {
    const services = [
        {
            icon: House,
            title: "Buy a Property",
            description:
                "Find your dream home from our collection of verified properties.",
        },
        {
            icon: KeyRound,
            title: "Rent a Property",
            description:
                "Explore comfortable rental homes that match your lifestyle and budget.",
        },
        {
            icon: Handshake,
            title: "Sell a Property",
            description:
                "Get professional assistance to sell your property with confidence.",
        },
    ];

    return (
        <section className="bg-[#f0faff] px-5 py-20 lg:px-10 lg:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

                {/* LEFT IMAGE */}
                <Reveal direction="left">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                            alt="Modern luxury property"
                            className="h-[350px] w-full rounded-2xl object-cover shadow-lg sm:h-[450px]"
                        />

                        <div className="absolute -bottom-6 -right-3 rounded-xl bg-emerald-600 p-6 text-white shadow-xl sm:-right-6">
                            <p className="text-3xl font-bold">10K+</p>
                            <p className="mt-1 text-sm">
                                Properties Listed
                            </p>
                        </div>
                    </div>
                </Reveal>

                {/* RIGHT CONTENT */}
                <Reveal direction="right">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[2px] text-emerald-600">
                            What We Do
                        </p>

                        <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                            Our Services for Your
                            <span className="text-emerald-600">
                                {" "}Perfect Property
                            </span>
                        </h2>

                        <p className="mb-9 max-w-lg text-sm leading-7 text-slate-500">
                            We provide complete real estate solutions to
                            make your property journey simple, convenient,
                            and stress-free.
                        </p>

                        <div className="space-y-7">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-5"
                                    >
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                                            <Icon size={26} />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="mb-2 text-lg font-bold text-slate-800">
                                                {service.title}
                                            </h3>

                                            <p className="mb-2 text-sm leading-6 text-slate-500">
                                                {service.description}
                                            </p>

                                            <button className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:gap-3">
                                                Learn More
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Services;
