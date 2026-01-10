import { Section } from "@/components/ui/Section";
import { ShieldCheck, Target, Trophy, Clock } from "lucide-react";

export function TrustStrip() {
    const features = [
        {
            icon: Target,
            label: "Precision Data",
            desc: "Powered by Trackman 4"
        },
        {
            icon: Trophy,
            label: "Pro Level",
            desc: "Top Tier Equipment"
        },
        {
            icon: ShieldCheck,
            label: "Private Bay",
            desc: "Your Own Space"
        },
        {
            icon: Clock,
            label: "Play Anytime",
            desc: "Climate Controlled"
        }
    ];

    return (
        <div className="border-y border-white/5 bg-surface-50/50 backdrop-blur-sm relative z-20">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="flex flex-col items-center justify-center text-center group">
                            <f.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-white font-bold text-base mb-1">{f.label}</h3>
                            <p className="text-white/40 text-xs uppercase tracking-wider">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
