
import { useEffect, useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

import Reveal from "../molecules/Reveal";

const testimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "Home Buyer",
        review: "Finding my dream home was an amazing experience. The team understood exactly what I was looking for and helped me find a beautiful property within my budget. Their support throughout the process was excellent.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    },
    {
        id: 2,
        name: "Sophia Williams",
        role: "Property Investor",
        review: "I had a wonderful experience with their property services. Their recommendations were professional, transparent and perfectly suited to my investment requirements. I would definitely recommend them.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    },
    {
        id: 3,
        name: "Rahul Mehta",
        role: "Villa Owner",
        review: "The entire process of purchasing my villa was smooth and stress-free. Their team was always available to answer my questions and made sure every detail was taken care of.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
    },
    {
        id: 4,
        name: "Emily Johnson",
        role: "Apartment Buyer",
        review: "I was searching for a modern apartment for months. Their team helped me discover several excellent options and finally find the perfect place for my family.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
    },
    {
        id: 5,
        name: "Daniel Brown",
        role: "Property Seller",
        review: "Selling my property was much easier than I expected. The team provided proper guidance, handled everything professionally and helped me find the right buyer.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    },
    {
        id: 6,
        name: "Olivia Martin",
        role: "Home Buyer",
        review: "Excellent service from beginning to end. I really appreciated their patience, honest suggestions and attention to detail while helping me choose my new home.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150",
    },
    {
        id: 7,
        name: "Arjun Kapoor",
        role: "Land Investor",
        review: "Their knowledge of the real estate market helped me make a confident investment decision. I received clear information about the available properties and great assistance.",
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=150",
    },
    {
        id: 8,
        name: "Isabella Taylor",
        role: "Apartment Owner",
        review: "The experience was genuinely impressive. I found a lovely apartment in my preferred location, and the team made the whole journey comfortable and convenient.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150",
    },
    {
        id: 9,
        name: "Rohan Das",
        role: "Villa Buyer",
        review: "From the first consultation to the final paperwork, everything was handled professionally. I am extremely happy with my new villa and the overall experience.",
        image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=150",
    },
    {
        id: 10,
        name: "Mia Anderson",
        role: "Property Investor",
        review: "A reliable team with excellent property options. Their guidance helped me understand the market better and choose an investment that suited my long-term goals.",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150",
    },
];

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeTestimonial = testimonials[activeIndex];

    // AUTOMATIC REVIEW SLIDER
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) =>
                (prev + 1) % testimonials.length
            );
        }, 7000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    // PREVIOUS REVIEW
    const handlePrevious = () => {
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    // NEXT REVIEW
    const handleNext = () => {
        setActiveIndex((prev) =>
            (prev + 1) % testimonials.length
        );
    };

    return (
        <section className="bg-white px-5 py-20 lg:px-10 lg:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* LEFT SIDE - CUSTOMER REVIEW */}
                <Reveal direction="left">
                    <div>

                        <p className="mb-2 text-sm font-semibold text-slate-500">
                            Testimonials
                        </p>

                        <h2 className="mb-10 text-3xl font-bold text-emerald-600 sm:text-4xl">
                            People say about us
                        </h2>

                        {/* QUOTE ICON */}
                        <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-xl bg-[#f0faff] text-[#17264f]">
                            <Quote size={38} fill="currentColor" />
                        </div>

                        {/* CUSTOMER REVIEW */}
                        <div
                            key={activeTestimonial.id}
                            className="min-h-[150px] animate-hero-fade-up"
                        >
                            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                                {activeTestimonial.review}
                            </p>
                        </div>

                        {/* CUSTOMER PROFILE */}
                        <div
                            key={`profile-${activeTestimonial.id}`}
                            className="mt-8 flex items-center gap-4 animate-hero-fade-up"
                        >
                            <img
                                src={activeTestimonial.image}
                                alt={activeTestimonial.name}
                                className="h-14 w-14 rounded-full border-2 border-emerald-100 object-cover"
                            />

                            <div>
                                <h3 className="font-bold text-slate-900">
                                    {activeTestimonial.name}
                                </h3>

                                <p className="mt-1 text-sm text-slate-500">
                                    {activeTestimonial.role}
                                </p>
                            </div>
                        </div>

                        {/* NAVIGATION */}
                        <div className="mt-9 flex items-center gap-3">

                            <button
                                onClick={handlePrevious}
                                aria-label="Previous review"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-slate-600 transition duration-300 hover:-translate-x-1 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                            >
                                <ArrowLeft size={18} />
                            </button>

                            <button
                                onClick={handleNext}
                                aria-label="Next review"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-slate-600 transition duration-300 hover:translate-x-1 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                            >
                                <ArrowRight size={18} />
                            </button>

                            <span className="ml-3 text-xs font-medium text-slate-400">
                                {activeIndex + 1} / {testimonials.length}
                            </span>
                        </div>

                    </div>
                </Reveal>

                {/* RIGHT SIDE - PROPERTY IMAGE */}
                <Reveal direction="right">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                            alt="Beautiful luxury home interior"
                            className="h-[380px] w-full rounded-xl object-cover shadow-sm sm:h-[480px] lg:h-[520px]"
                        />
                    </div>
                </Reveal>

            </div>
        </section>
    );
}

export default Testimonials;
