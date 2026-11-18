
import Reveal from "../molecules/Reveal";

function Agents() {
    const agents = [
        {
            id: 1,
            name: "James Anderson",
            role: "Senior Property Agent",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
        },
        {
            id: 2,
            name: "Sophia Williams",
            role: "Real Estate Consultant",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600",
        },
        {
            id: 3,
            name: "Daniel Smith",
            role: "Property Advisor",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
        },
        {
            id: 4,
            name: "Emily Johnson",
            role: "Property Specialist",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#f5faff] px-5 py-20 lg:px-10 lg:py-24">

            {/* DECORATIVE CIRCLE */}
            <div className="absolute -right-16 -top-20 h-40 w-40 rounded-full bg-violet-600 sm:h-48 sm:w-48" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* SECTION HEADING */}
                <Reveal direction="up">
                    <div className="mb-12 text-center">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                            Agents
                        </p>

                        <h2 className="text-2xl font-bold text-emerald-600 sm:text-3xl">
                            Experts that take care of you
                        </h2>
                    </div>
                </Reveal>

                {/* AGENT CARDS */}
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
                    {agents.map((agent, index) => (
                        <Reveal
                            key={agent.id}
                            direction="up"
                            delay={index * 100}
                        >
                            <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                                {/* AGENT IMAGE */}
                                <div className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
                                    <img
                                        src={agent.image}
                                        alt={agent.name}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                    {/* IMAGE GRADIENT */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#17264f]/90 via-transparent to-transparent" />

                                    {/* AGENT DETAILS */}
                                    <div className="absolute bottom-0 left-0 w-full px-3 pb-5 text-center text-white sm:px-4">
                                        <h3 className="text-sm font-bold sm:text-base">
                                            {agent.name}
                                        </h3>

                                        <p className="mt-1 text-[10px] text-gray-200 sm:text-xs">
                                            {agent.role}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Agents;
