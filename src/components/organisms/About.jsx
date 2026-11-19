
import {
    BadgeDollarSign,
    HandCoins,
    MessagesSquare,
    Play,
} from "lucide-react";

import Reveal from "../molecules/Reveal";

function About() {
    const advantages = [
        {
            icon: BadgeDollarSign,
            title: "Best Advantage",
            description:
                "Discover the best property options with excellent value and reliable service.",
        },
        {
            icon: HandCoins,
            title: "Property Investment",
            description:
                "Make smarter property investments with guidance from our experienced team.",
        },
        {
            icon: MessagesSquare,
            title: "Licensed Consultants",
            description:
                "Get professional assistance and clear guidance throughout your property journey.",
        },
    ];

    return (
        <section id="about" className="overflow-hidden bg-white px-5 pt-10 pb-16 lg:px-10 lg:pt-12 lg:pb-20">
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* LEFT SIDE - INTERIOR IMAGE */}
                <Reveal direction="left">
                    <div className="relative mx-auto w-full max-w-xl pb-12 pl-0 sm:pl-8">

                        {/* NAVY BACKGROUND */}
                        <div className="absolute bottom-0 left-0 h-[78%] w-[75%] rounded-tr-2xl bg-[#17264f] sm:w-[78%]" />

                        {/* SMALL TOP DECORATION */}
                        <div className="absolute left-10 top-7 z-10 flex items-center gap-3 text-white sm:left-16">
                            <span className="text-xs font-medium tracking-wider">
                                Explore
                            </span>
                            <span className="h-[2px] w-10 bg-emerald-400" />
                        </div>

                        {/* INTERIOR IMAGE */}
                        <div className="relative z-10 ml-5 mt-10 overflow-hidden shadow-xl sm:ml-12">
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200"
                                alt="Beautiful modern living room interior"
                                className="h-[280px] w-full object-cover sm:h-[350px]"
                            />

                            {/* PLAY ICON */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg sm:h-20 sm:w-20">
                                    <Play size={30} fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM TEXT ON NAVY BACKGROUND */}
                        <div className="relative z-10 ml-5 mt-5 max-w-[75%] text-white sm:ml-12">
                            <p className="mb-2 text-xs font-medium text-emerald-300">
                                Discover Your Dream Home
                            </p>

                            <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                                Different Home Styles, Beautiful Living
                            </h3>
                        </div>
                    </div>
                </Reveal>

                {/* RIGHT SIDE - WHY CHOOSE US */}
                <Reveal direction="right">
                    <div className="lg:pl-4">

                        <p className="mb-3 text-sm font-semibold text-slate-500">
                            About Our Service
                        </p>

                        <h2 className="mb-10 text-3xl font-bold leading-tight text-emerald-600 sm:text-4xl">
                            Why Choose Our Service
                        </h2>

                        {/* ADVANTAGES */}
                        <div className="space-y-8">
                            {advantages.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-5"
                                    >
                                        {/* ICON */}
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                            <Icon size={29} strokeWidth={1.7} />
                                        </div>

                                        {/* TEXT */}
                                        <div>
                                            <h3 className="mb-2 text-lg font-bold text-slate-800">
                                                {item.title}
                                            </h3>

                                            <p className="max-w-md text-sm leading-7 text-slate-500">
                                                {item.description}
                                            </p>
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

export default About;
