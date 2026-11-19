
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { properties } from "../../data/properties";
import PropertyCard from "../molecules/PropertyCard";

function FeaturedHomes() {
    const [activeCategory, setActiveCategory] = useState("Apartment");
    const [currentPage, setCurrentPage] = useState(0);

    const categories = ["All", "Apartment", "Villa", "Land"];

    const filteredProperties =
        activeCategory === "All"
            ? properties
            : properties.filter(
                (property) => property.category === activeCategory
            );

    const itemsPerPage = 4;
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

    const visibleProperties = filteredProperties.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(0);
    };

    const handleNext = () => {
        setCurrentPage((page) =>
            page < totalPages - 1 ? page + 1 : 0
        );
    };

    const handlePrevious = () => {
        setCurrentPage((page) =>
            page > 0 ? page - 1 : totalPages - 1
        );
    };

    return (
        <section id="properties" className="bg-white px-5 pt-12 pb-8 lg:px-10 lg:pt-14 lg:pb-10">
            <div className="mx-auto max-w-7xl">

                {/* CATEGORY NAVIGATION */}
                <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-b border-gray-200 sm:justify-between">

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`relative pb-4 text-sm font-semibold transition ${
                                activeCategory === category
                                    ? "text-emerald-600"
                                    : "text-gray-500 hover:text-emerald-600"
                            }`}
                        >
                            {category}

                            {activeCategory === category && (
                                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-emerald-600" />
                            )}
                        </button>
                    ))}

                    <h2 className="order-first w-full text-center text-2xl font-bold text-emerald-600 sm:order-none sm:w-auto sm:text-3xl">
                        Featured Homes
                    </h2>

                </div>

                {/* PROPERTY GRID */}
                {visibleProperties.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {visibleProperties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="py-12 text-center text-gray-500">
                        No properties found.
                    </p>
                )}

                {/* CAROUSEL CONTROLS */}
                {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-end gap-3">
                        <button
                            onClick={handlePrevious}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                            aria-label="Previous properties"
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <button
                            onClick={handleNext}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                            aria-label="Next properties"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default FeaturedHomes;
