
import { House } from "lucide-react";

function Logo({ light = false }) {
    return (
        <a href="#home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <House size={22} />
            </div>

            <div>
                <h1 className={`text-xl font-bold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
                    ADD<span className="text-emerald-500">.</span>
                </h1>

                <p className={`text-[9px] font-semibold uppercase tracking-[2px] ${light ? "text-slate-300" : "text-slate-500"}`}>
                    Properties
                </p>
            </div>
        </a>
    );
}

export default Logo;
