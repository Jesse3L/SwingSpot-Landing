"use client";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { TRACKMAN_BOOKING_URL } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

export function Hero() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isVideoReady, setIsVideoReady] = useState(false);

    useEffect(() => {
        if (!iframeRef.current) return;

        const player = new Player(iframeRef.current);

        // Start video at 5 seconds
        player.ready().then(() => {
            player.setCurrentTime(5);
            setIsVideoReady(true);
        });

        const onTimeUpdate = (data: { seconds: number }) => {
            if (data.seconds >= 40) {
                player.setCurrentTime(5);
            }
        };

        player.on("timeupdate", onTimeUpdate);

        return () => {
            player.off("timeupdate", onTimeUpdate);
            player.destroy();
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
            {/* Background Images (Posters) */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Image (Vertical) */}
                <div className="absolute inset-0 md:hidden">
                    <Image
                        src="/images/1080x1920_neverlookedbetter_1.jpg"
                        alt="SwingSpot Simulator"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Desktop Image (Fallback/Poster) */}
                <div className="hidden md:block absolute inset-0 bg-black" />
            </div>

            {/* Vimeo Background Video */}
            <div className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-1000 hidden md:block ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}>
                <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/864314153?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                    className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none opacity-60"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Overlay gradient for readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/60 to-black/40 md:via-black/50 md:to-black/30" />

            {/* Additional mobile-only darkening for better text contrast */}
            <div className="absolute inset-0 z-0 bg-black/30 md:hidden" />

            <div className="container relative z-10 px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary tracking-wide">COMING SOON EARLY 2026</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 font-heading drop-shadow-2xl">
                    ELEVATE YOUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                        GOLF GAME
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-sans drop-shadow-lg font-medium">
                    Experience the ultimate indoor golf simulation with Trackman technology.
                    Train like a pro, play 300+ world-class courses, or just have fun—rain or shine.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" href="#waitlist" className="w-full sm:w-auto min-w-[180px] shadow-primary/25">
                        Join Waitlist
                    </Button>
                    <Button variant="outline" size="lg" href="#how-it-works" className="w-full sm:w-auto min-w-[180px] backdrop-blur-sm bg-black/20 border-white/30 hover:bg-white/10">
                        How It Works
                    </Button>
                </div>

                <div className="mt-16 text-sm text-white/60 flex items-center justify-center gap-8 backdrop-blur-sm py-4 rounded-2xl bg-black/20 inline-flex px-8 border border-white/5">
                    <div className="flex flex-col items-center">
                        <span className="text-white font-bold text-lg">300+</span>
                        <span>Courses</span>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="flex flex-col items-center">
                        <span className="text-white font-bold text-lg">4K</span>
                        <span>Simulators</span>
                    </div>
                    <div className="w-px h-8 bg-white/20" />
                    <div className="flex flex-col items-center">
                        <span className="text-white font-bold text-lg">24/7</span>
                        <span>Access</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
