"use client";

import { Section } from "@/components/ui/Section";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: "Do I need to bring my own clubs?",
            a: "You can! We encourage using your own clubs for the most realistic experience. However, we also have premium rental sets available if you're traveling light or just starting out."
        },
        {
            q: "How many people can play in one bay?",
            a: "Our bays comfortably accommodate up to 4 players. For larger groups, we recommend booking multiple side-by-side bays."
        },
        {
            q: "Is it accurate?",
            a: "Extremely. We use Trackman 4 technology, the same system used by PGA Tour pros. It tracks ball speed, spin, launch angle, and carry with industry-leading precision."
        },
        {
            q: "Do I need to be a good golfer?",
            a: "Not at all! SwingSpot is for everyone. We have fun games like Capture the Flag and Monster City strictly for entertainment, as well as difficulty settings for course play."
        },
        {
            q: "Can I bring food or drinks?",
            a: "Yes, you are welcome to bring your own food and non-alcoholic beverages. We also have vending machines on site."
        },
        {
            q: "How do I book?",
            a: "All bookings will be handled online through our portal. Simply click 'Join Waitlist' to get notified when we open."
        },
        {
            q: "What if I need to cancel?",
            a: "You can cancel up to 24 hours in advance for a full refund through the booking portal."
        },
        {
            q: "Are you open 24/7?",
            a: "Our members have 24/7 access. Public booking hours are 8am - 10pm daily."
        }
    ];

    return (
        <Section id="faq" background="subtle">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                    FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
                </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border border-white/5 rounded-lg bg-surface-100 overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(prev => prev === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-200 transition-colors"
                            suppressHydrationWarning
                        >
                            <span className="font-medium text-white text-lg pr-4">{faq.q}</span>
                            {openIndex === i ? (
                                <Minus className="w-5 h-5 text-primary shrink-0" />
                            ) : (
                                <Plus className="w-5 h-5 text-primary/50 shrink-0" />
                            )}
                        </button>
                        <div className={cn("grid transition-all duration-300", openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                            <div className="overflow-hidden">
                                <div className="p-6 pt-0 text-white/60 leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
