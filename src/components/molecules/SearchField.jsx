
function SearchField({
    label,
    icon: Icon,
    type = "text",
    placeholder,
    options = [],
    value,
    onChange,
    variant = "default",
}) {
    const isHero = variant === "hero";

    return (
        <div className={`min-w-0 px-3 py-2 ${
            isHero
                ? "border-r border-white/20"
                : "rounded-xl border border-slate-200 p-4"
        }`}>
            <label className={`mb-2 block text-[10px] font-semibold uppercase tracking-wider ${
                isHero ? "text-white/60" : "text-slate-400"
            }`}>
                {label}
            </label>

            <div className="flex items-center gap-2">
                {Icon && (
                    <Icon
                        size={16}
                        className={isHero ? "shrink-0 text-emerald-300" : "shrink-0 text-emerald-600"}
                    />
                )}

                {type === "select" ? (
                    <select
                        value={value}
                        onChange={onChange}
                        className={`w-full min-w-0 bg-transparent text-xs font-semibold outline-none ${
                            isHero ? "text-white [color-scheme:dark]" : "text-slate-800"
                        }`}
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        className={`w-full min-w-0 bg-transparent text-xs font-semibold outline-none ${
                            isHero
                                ? "text-white placeholder:text-white/60"
                                : "text-slate-800 placeholder:font-normal"
                        }`}
                    />
                )}
            </div>
        </div>
    );
}

export default SearchField;
