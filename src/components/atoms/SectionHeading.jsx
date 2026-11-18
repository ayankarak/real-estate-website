
function SectionHeading({
    eyebrow,
    title,
    highlight,
    description,
    align = "center",
    light = false,
}) {
    return (
        <div className={`max-w-2xl ${
            align === "center" ? "mx-auto text-center" : "text-left"
        }`}>
            {eyebrow && (
                <span className="text-xs font-bold uppercase tracking-[3px] text-emerald-600">
                    {eyebrow}
                </span>
            )}

            <h2 className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${
                light ? "text-white" : "text-slate-900"
            }`}>
                {title}{" "}
                {highlight && (
                    <span className="text-emerald-600">
                        {highlight}
                    </span>
                )}
            </h2>

            {description && (
                <p className={`mt-5 text-sm leading-7 sm:text-base ${
                    light ? "text-slate-300" : "text-slate-500"
                }`}>
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionHeading;
