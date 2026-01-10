import { Section } from "@/components/ui/Section";
import { BarChart3, Globe2, Video, Smartphone, Users, Zap } from "lucide-react";

export function FeaturesGrid() {
    const features = [
        {
            icon: Globe2,
            title: "Virtual Golf",
            description: "Play over 300 iconic courses including St Andrews, Pebble Beach, and more in stunning 4K detail."
        },
        {
            icon: BarChart3,
            title: "Shot Analysis",
            description: "Get instant feedback on ball speed, launch angle, spin rate, and carry distance with pro-grade precision."
        },
        {
            icon: Video,
            title: "Video Swing Analysis",
            description: "Analyze your swing with integrated cameras and side-by-side comparison tools."
        },
        {
            icon: Smartphone,
            title: "Trackman App",
            description: "Save your session data, track your handicap, and participate in global tournaments from your phone."
        },
        {
            icon: Users,
            title: "Multiplayer Games",
            description: "Fun for everyone with games like Closest to the Pin, Long Drive, and Capture the Flag."
        },
        {
            icon: Zap,
            title: "Instant Booking",
            description: "Easy online scheduling. Book your hour, show up, and start swinging immediately."
        }
    ];

    return (
        <Section id="features" background="dark">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                    POWERED BY <span className="text-primary">TRACKMAN</span>
                </h2>
                <p className="text-white/60 text-lg">
                    We use the same technology trusted by 1000+ tour pros.
                    Whether you're fixing your slice or playing a round with friends, our sims deliver reality-grade feedback.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <div
                        key={i}
                        className="p-8 rounded-2xl bg-surface-200 border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_-15px_rgba(142,255,51,0.2)] group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-surface-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-white/60 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
