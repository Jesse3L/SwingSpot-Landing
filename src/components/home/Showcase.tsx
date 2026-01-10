"use client";

import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { Check } from "lucide-react";

export function Showcase() {
    const { elementRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "50px"
    });
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        if (isIntersecting) {
            setShouldLoad(true);
        }
    }, [isIntersecting]);

    return (
        <Section background="dark" className="overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div ref={elementRef} className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-black">
                        {shouldLoad ? (
                            <iframe
                                src="https://player.vimeo.com/video/1012388994?h=d0f5e8cded&title=0&byline=0&portrait=0&loop=1&autopause=0&background=1"
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-surface-200">
                                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
                        UNREAL REALISM
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                        PLAY THE WORLD'S <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                            BEST COURSES
                        </span>
                    </h3>
                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                        Step into a hyper-realistic world where every tree, bunker, and fairway is rendered in stunning 4K.
                        Our Trackman simulators use drone mapping to recreate legendary courses like Pebble Beach,
                        St Andrews, and Valderrama down to the inch.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-white/80">
                            <Check className="w-5 h-5 text-primary" />
                            <span>Doppler Radar tracking for perfect ball flight</span>
                        </li>
                        <li className="flex items-center gap-3 text-white/80">
                            <Check className="w-5 h-5 text-primary" />
                            <span>Adjustable weather and course conditions</span>
                        </li>
                        <li className="flex items-center gap-3 text-white/80">
                            <Check className="w-5 h-5 text-primary" />
                            <span>Putting that actually feels real</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
