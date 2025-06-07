import { gsap } from "gsap";
import { useEffect } from "react";
export const useIntersecting = (element, threshold = 0.2, delay = 0) => {

    useEffect(() => {
            const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const tl = gsap.timeline({ delay, ease: "power2.out" });
                    tl.fromTo(
                        element.current,
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5 }
                    );
                    observer.unobserve(element.current);
                }
            },
            { threshold }
        );
        if (element.current) {
            observer.observe(element.current);
        }

        return () => observer.disconnect();
    }, [element, delay, threshold]);
}
