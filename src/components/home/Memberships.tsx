import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Check, Star, Trophy, Crown } from "lucide-react";

export function Memberships() {
    const memberships = [
        {
            name: "Club",
            price: "$65",
            period: "/month",
            icon: Star,
            description: "Perfect for the casual golfer looking to improve their game.",
            features: [
                "League Access",
                "2 Credit Hours / month (Anytime)",
                "10% Discount on all purchases",
                "Priority Booking Window"
            ],
            highlight: false,
            color: "text-white"
        },
        {
            name: "Performance",
            price: "$165",
            period: "/month",
            icon: Trophy,
            description: "For the dedicated player who wants to train consistently.",
            features: [
                "League Access",
                "4 Credit Hours / month (Anytime)",
                "15% Discount on all purchases",
                "Priority Booking Window",
                "Quarterly Swing Analysis",
                "Access to AI Trainer"
            ],
            highlight: true,
            color: "text-primary"
        },
        {
            name: "Elite",
            price: "$265",
            period: "/month",
            icon: Crown,
            description: "The ultimate experience for serious golfers.",
            features: [
                "Free League Access",
                "6 Credit Hours / month (Anytime)",
                "1 Private Lesson / month",
                "20% Discount on all purchases",
                "Priority Booking Window",
                "Monthly Swing Analysis",
                "Exclusive Member Events",
                "Access to AI Trainer"
            ],
            highlight: false,
            badge: "Limited Availability",
            color: "text-amber-400"
        }
    ];

    return (
        <Section id="memberships" className="bg-black relative overflow-hidden">
            {/* Background elements */}


            <div className="container relative z-10 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading uppercase">
                        Choose Your <span className="text-primary">Membership</span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Unlock exclusive benefits, discounts, and priority access with our membership tiers.
                        Join the waitlist to secure your spot.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {memberships.map((tier, i) => (
                        <div
                            key={i}
                            className={`
                                relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2
                                ${tier.highlight
                                    ? "bg-surface-200 border-primary shadow-[0_0_30px_-10px_var(--color-primary)]"
                                    : "bg-surface-100 border-white/5 hover:border-white/20"}
                            `}
                        >
                            {tier.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                    {tier.badge}
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center ${tier.color}`}>
                                    <tier.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                                    <p className="text-sm text-white/50">{tier.description}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                                    <span className="text-white/50 ml-2">{tier.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                href="#waitlist"
                                variant={tier.highlight ? "primary" : "outline"}
                                className="w-full"
                            >
                                Join Waitlist
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
