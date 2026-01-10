"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { cn } from "@/lib/utils";

const GAMES = [
    {
        title: "Cannon Bowl",
        desc: "Swing to hit pins, spares and strikes in this thrilling fusion of golf and bowling.",
        image: "/images/games_cannon_bowl_trackman_golf.webp",
    },
    {
        title: "Capture the Flag",
        desc: "Strategy meets skill. Capture territories by landing nearest to the pin.",
        image: "/images/games_capture_the_flag_virtual_trackman_golf.webp",
    },
    {
        title: "Bullseye",
        desc: "A classic target game. Aim for the center to rack up high scores.",
        image: "/images/games_bullseye_virtual_trackman_golf.webp",
    },
    {
        title: "Streets of Neon",
        desc: "Putt your way through a vibrant, glowing cityscape.",
        image: "/images/games_streets_of_neon_virtual_trackman_golf.webp",
    },
    {
        title: "Magic Pond",
        desc: "A whimsical game perfect for kids and families.",
        image: "/images/games_magic_pond_virtual_trackman_golf.webp",
    },
    {
        title: "Hit It!",
        desc: "Long drive competition with explosive visuals.",
        image: "/images/games_hitit_virtual_trackman_golf.webp",
    },
    {
        title: "Party Putt",
        desc: "Fast-paced putting fun for groups.",
        image: "/images/games_party_putt_trackman_golf.webp",
    },
    {
        title: "Scrapyard",
        desc: "Smash targets in this destruction-themed range game.",
        image: "/images/games_scrapyard_virtual_trackman_golf.webp",
    },
    {
        title: "Mystic Sands",
        desc: "Adventure through ancient deserts in this fantasy course.",
        image: "/images/games_mystic_sands_virtual_trackman_golf.webp",
    },
    {
        title: "Closest to the Pin",
        desc: "Challenge your friends to see who can stick it close.",
        image: "/images/games_closest_to_the_pin_trackman_golf.webp",
    },
];

export function FunForEveryone() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    React.useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <Section background="dark" className="overflow-hidden py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:items-center">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/3 text-left">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-heading uppercase tracking-tight leading-[0.9]">
                            FUN FOR <br />
                            <span className="text-white">EVERYONE</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            Unlock the joy of golf with our selection of games for players of all ages and skill levels.
                            From serious practice to magical minigames, there's always a new way to play.
                        </p>
                    </div>

                    {/* Right Carousel */}
                    <div className="w-full lg:w-2/3 min-w-0">
                        <div className="relative">
                            <div className="overflow-hidden" ref={emblaRef}>
                                <div className="flex -ml-4">
                                    {GAMES.map((game, index) => (
                                        <div key={index} className="pl-4 min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] relative">
                                            <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] border border-white/10 bg-surface-100 transition-transform duration-300 hover:scale-[1.02]">
                                                <Image
                                                    src={game.image}
                                                    alt={game.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                                {/* Text Content */}
                                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                                                    <p className="text-white/70 text-sm leading-relaxed line-clamp-3 group-hover:text-white transition-colors">
                                                        {game.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Buttons (Desktop + Mobile) */}
                            <div className="flex items-center justify-center gap-6 mt-8">
                                <button
                                    onClick={scrollPrev}
                                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-primary hover:bg-primary/10 transition-all bg-surface-100"
                                    aria-label="Previous game"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-2">
                                    {scrollSnaps.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => scrollTo(index)}
                                            className={cn(
                                                "h-1.5 rounded-full transition-all duration-300",
                                                index === selectedIndex ? "bg-primary w-8" : "bg-white/20 w-1.5"
                                            )}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={scrollNext}
                                    className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-primary hover:bg-primary/10 transition-all bg-surface-100"
                                    aria-label="Next game"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
