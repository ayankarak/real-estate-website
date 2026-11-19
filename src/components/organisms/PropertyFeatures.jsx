
import { ArrowRight } from "lucide-react";
import Reveal from "../molecules/Reveal";

function PropertyFeatures() {
    return (
        <section className="overflow-hidden bg-white px-5 py-12 lg:px-10 lg:py-14">
            <div className="mx-auto max-w-6xl">

                <Reveal direction="up">
                    <div className="relative mx-auto min-h-[650px] max-w-5xl sm:min-h-[460px]">

                        {/* LEFT IMAGE */}
                        <div className="relative z-10 w-[75%] sm:absolute sm:left-0 sm:top-0 sm:w-[40%]">
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000"
                                alt="Elegant dining and living space"
                                className="h-[280px] w-full rounded-md object-cover sm:h-[390px]"
                            />

                            {/* LEFT INFORMATION CARD */}
                            <div className="relative -mt-8 ml-5 w-[95%] bg-[#17264f] p-5 text-white shadow-xl sm:absolute sm:-bottom-10 sm:-right-5 sm:ml-0 sm:mt-0 sm:w-[300px] sm:p-6">
                                <p className="text-xs leading-6 text-gray-200 sm:text-sm">
                                    Discover beautiful homes designed to
                                    bring comfort, elegance and happiness
                                    to your everyday life.
                                </p>

                                <button
                                    type="button"
                                    className="mt-4 flex items-center gap-3 text-xs font-semibold text-emerald-400 transition hover:gap-5"
                                >
                                    Explore Properties
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                                        <ArrowRight size={15} />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative z-0 ml-auto mt-16 w-[85%] sm:absolute sm:right-0 sm:top-14 sm:mt-0 sm:w-[62%]">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                                alt="Modern luxury living room"
                                className="h-[250px] w-full rounded-md object-cover sm:h-[340px]"
                            />

                            {/* RIGHT INFORMATION CARD */}
                            <div className="absolute -top-12 right-0 w-[90%] bg-[#17264f] p-5 text-white shadow-xl sm:-top-10 sm:right-5 sm:w-[370px] sm:p-6">
                                <p className="text-xs leading-6 text-gray-200 sm:text-sm">
                                    Find the perfect property that matches
                                    your lifestyle. Explore exceptional
                                    spaces and make your dream home a reality.
                                </p>

                                <button
                                    type="button"
                                    className="mt-4 flex items-center gap-3 text-xs font-semibold text-emerald-400 transition hover:gap-5"
                                >
                                    Discover More
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                                        <ArrowRight size={15} />
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default PropertyFeatures;
