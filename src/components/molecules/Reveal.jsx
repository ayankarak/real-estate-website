
import { useEffect, useRef, useState } from "react";

function Reveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const directions = {
        up: "translate-y-10",
        down: "-translate-y-10",
        left: "translate-x-10",
        right: "-translate-x-10",
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${
                isVisible
                    ? "translate-x-0 translate-y-0 opacity-100"
                    : `${directions[direction] || directions.up} opacity-0`
            } ${className}`}
        >
            {children}
        </div>
    );
}

export default Reveal;
