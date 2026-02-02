import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Cpu, Wifi, Zap } from "lucide-react";

export function Equipment() {
    return (
        <Section background="default" className="relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                {/* Hardware Image */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_-20px_rgba(255,255,255,0.1)] bg-surface-50 p-8 flex items-center justify-center">
                        <Image
                            src="/images/trackman_io_inside_view_v2.png"
                            alt="Trackman iO OERT Technology - Inside View"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                        />
                    </div>
                    {/* Tech Specs Overlay */}
                    <div className="absolute -bottom-6 -left-6 z-20 bg-surface-100 border border-white/5 p-4 rounded-xl shadow-xl flex gap-4 backdrop-blur-md">
                        <div className="text-center">
                            <div className="text-primary font-bold text-xl">3,000+</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider">Frames/Sec</div>
                        </div>
                        <div className="w-px bg-white/10" />
                        <div className="text-center">
                            <div className="text-primary font-bold text-xl">OERT</div>
                            <div className="text-xs text-white/40 uppercase tracking-wider">Tracking</div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                        <Zap className="w-4 h-4" />
                        <span>POWERED BY TRACKMAN iO</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                        UNRIVALED TECHNOLOGY <br />
                        <span className="text-white">REALISM REIMAGINED</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-8 leading-relaxed">
                        We don't just simulate golf; we replicate it. Using Trackman's groundbreaking <strong>OERT (Optically Enhanced Radar Tracking)</strong>,
                        SwingSpot captures every nuance of your game. By combining radar precision with high-speed imaging, you get the
                        most realistic ball flight and impact data ever seen in an indoor environment.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-surface-100 flex items-center justify-center shrink-0">
                                <Wifi className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Dual-Tracking Engine</h4>
                                <p className="text-sm text-white/50">Radar and Camera work in unison for zero-doubt accuracy.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-surface-100 flex items-center justify-center shrink-0">
                                <Cpu className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">True Ball Flight</h4>
                                <p className="text-sm text-white/50">See your actual shot shape, spin, and trajectory instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
