
import { useState } from "react";
import {
    MapPin,
    BedDouble,
    Bath,
    Maximize2,
    Heart,
} from "lucide-react";

function PropertyCard({ property }) {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* PROPERTY IMAGE */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* PROPERTY TYPE */}
                <span className="absolute left-4 top-4 rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
                    {property.type}
                </span>

                {/* FAVORITE BUTTON */}
                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
                    aria-label="Toggle favorite"
                >
                    <Heart
                        size={18}
                        className={
                            isFavorite
                                ? "fill-red-500 text-red-500"
                                : "text-gray-600"
                        }
                    />
                </button>
            </div>

            {/* PROPERTY DETAILS */}
            <div className="p-5">

                {/* PRICE */}
                <p className="mb-2 text-lg font-bold text-emerald-600">
                    {property.price}
                </p>

                {/* TITLE */}
                <h3 className="mb-2 text-lg font-bold text-slate-800 transition group-hover:text-emerald-600">
                    {property.title}
                </h3>

                {/* LOCATION */}
                <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} className="shrink-0" />
                    <span>{property.location}</span>
                </div>

                {/* PROPERTY FEATURES */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm text-gray-500">

                    {/* BEDS AND BATHS - HIDDEN FOR LAND */}
                    {property.category !== "Land" && (
                        <>
                            <div className="flex items-center gap-1.5">
                                <BedDouble size={17} />
                                <span>{property.bedrooms} Beds</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Bath size={17} />
                                <span>{property.bathrooms} Baths</span>
                            </div>
                        </>
                    )}

                    {/* AREA - SHOWN FOR ALL */}
                    <div className="flex items-center gap-1.5">
                        <Maximize2 size={17} />
                        <span>{property.area}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
