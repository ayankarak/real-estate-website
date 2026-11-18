
import {
    House,
    Users,
    MapPin,
    Award,
} from "lucide-react";

import Reveal from "../molecules/Reveal";

const highlights = [
    {
        id: 1,
        value: "40,000+",
        label: "Properties Listed",
        icon: House,
    },
    {
        id: 2,
        value: "1M+",
        label: "Happy Customers",
        icon: Users,
    },
    {
        id: 3,
        value: "187.50",
        label: "Average Rating",
        icon: MapPin,
    },
    {
        id: 4,
        value: "#1",
        label: "Trusted Platform",
        icon: Award,
    },
];

function Highlights() {
    return (
        <section className="relative z-10 bg-white px-5 py-7 lg:px-10">
            <div className="mx-auto max-w-7xl">

                <Reveal direction="up">
                    <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 border-y border-slate-200 sm:grid-cols-4 sm:divide-y-0">

                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-center gap-3 px-3 py-5 sm:py-4"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-800">
                                        <Icon size={20} strokeWidth={1.8} />
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                            {item.value}
                                        </h3>

                                        <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                                            {item.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </Reveal>

            </div>
        </section>
    );
}

export default Highlights;
