import React, { useEffect, useRef, useState } from "react";

type CountUpProps = {
    end: number;
    duration?: number;
    suffix?: string;
};

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const elRef = useRef<HTMLSpanElement | null>(null);
    const startedRef = useRef(false);

    useEffect(() => {
        const startAnimation = () => {
            const startTime = performance.now();
            const from = 0;

            const step = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const value = Math.floor(from + (end - from) * progress);
                setCount(value);
                if (progress < 1) requestAnimationFrame(step);
                else setCount(end);
            };

            requestAnimationFrame(step);
        };

        const el = elRef.current;
        if (!el) return;

        // If IntersectionObserver not available, just start immediately
        if (typeof IntersectionObserver === "undefined") {
            if (!startedRef.current) {
                startedRef.current = true;
                startAnimation();
            }
            return;
        }

        const obs = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !startedRef.current) {
                        startedRef.current = true;
                        startAnimation();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        obs.observe(el);

        return () => obs.disconnect();
    }, [end, duration]);

    return (
        <span ref={elRef}>
            {count}
            {suffix}
        </span>
    );
};

export default CountUp;