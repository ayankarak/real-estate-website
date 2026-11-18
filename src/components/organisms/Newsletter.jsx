
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import Reveal from "../molecules/Reveal";

function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email.trim()) return;

        alert("Thank you for subscribing!");
        setEmail("");
    };

    return (
        <section className="bg-[#f3f8fc] px-5 py-16 sm:py-20 lg:px-10">
            <div className="mx-auto max-w-4xl">

                <Reveal direction="up">
                    <div className="text-center">

                        {/* HEADING */}
                        <h2 className="text-2xl font-bold text-emerald-600 sm:text-3xl">
                            Subscribe to get latest news updates
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500">
                            Stay updated with the latest properties, real estate
                            news and exclusive offers. Subscribe to our newsletter
                            and never miss an update.
                        </p>

                        {/* SUBSCRIPTION FORM */}
                        <form
                            onSubmit={handleSubscribe}
                            className="mx-auto mt-9 flex max-w-2xl flex-col gap-3 rounded-lg bg-white p-3 shadow-sm sm:flex-row sm:items-center"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                className="h-12 min-w-0 flex-1 bg-transparent px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            />

                            <button
                                type="submit"
                                className="flex h-12 items-center justify-center gap-2 rounded-md bg-[#17264f] px-7 text-sm font-semibold text-white transition hover:bg-emerald-600"
                            >
                                Subscribe
                                <ArrowRight size={17} />
                            </button>
                        </form>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Newsletter;
