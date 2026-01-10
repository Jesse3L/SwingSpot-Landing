import { Section } from "@/components/ui/Section";
import { CalendarCheck, DoorOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TRACKMAN_BOOKING_URL } from "@/lib/constants";

export function HowItWorks() {
    const steps = [
        {
            icon: CalendarCheck,
            title: "Book Your Spot",
            description: "Book your bay online. Choose your time and duration instantly via our Trackman portal."
        },
        {
            icon: DoorOpen,
            title: "Arrive & Access",
            description: "Receive your access code and head into our climate-controlled facility."
        },
        {
            icon: Trophy,
            title: "Tee Off",
            description: "Select your course or practice mode and start swinging. No wait times, no marshals."
        }
    ];

    return (
        <Section id="how-it-works" background="subtle">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                    HOW IT <span className="text-primary">WORKS</span>
                </h2>
                <p className="text-white/60 text-lg">
                    Your private golf sanctuary is just a few clicks away.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent border-t border-dashed border-primary/30 z-0" />

                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center relative z-10">
                        <div className="w-24 h-24 rounded-full bg-surface-100 border border-border flex items-center justify-center mb-6 shadow-xl relative group">
                            <div className="absolute inset-0 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                            <step.icon className="w-10 h-10 text-primary" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm">
                                {i + 1}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-white/60 max-w-xs">{step.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button href={TRACKMAN_BOOKING_URL} external size="lg">
                    Start Your Round
                </Button>
            </div>
        </Section>
    );
}
