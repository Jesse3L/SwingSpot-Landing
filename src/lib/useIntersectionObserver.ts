import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver({ threshold = 0, rootMargin = '0px' } = {}) {
    const elementRef = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const currentElement = elementRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                threshold,
                rootMargin,
            }
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, rootMargin]);

    return { elementRef, isIntersecting };
}
