"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Check, ChevronDown, Loader2 } from "lucide-react";

export function Waitlist() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        membership: "",
        leagues: false,
    });

    const memberships = [
        {
            name: "Club",
            price: "$65/mo",
            details: "League access, 2 credit hours/mo, 10% discount"
        },
        {
            name: "Performance",
            price: "$165/mo",
            details: "League access, 4 credit hours/mo, 15% discount"
        },
        {
            name: "Elite",
            price: "$265/mo",
            details: "Limited availability, 6 hours/mo, 1 private lesson/mo, Free League, 20% discount"
        }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            await fetch("https://hooks.zapier.com/hooks/catch/15198467/ucsw0by/", {
                method: "POST",
                body: JSON.stringify(formData),
                mode: "no-cors", // Zapier webhooks often require no-cors for simple submissions from browser
            });

            // Since mode is no-cors, we can't check response.ok, so we assume success if no network error.
            setIsSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                membership: "",
                leagues: false,
            });
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Section id="waitlist" className="bg-surface-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay" />

            <div className="container relative z-10 max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading uppercase">
                        Join the <span className="text-primary">Waitlist</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Be the first to experience SwingSpot when we open in Early 2026. Secure your spot in line for memberships and exclusive updates.
                    </p>
                </div>

                <div className="bg-surface-200 border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
                    {isSuccess ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">You're on the list!</h3>
                            <p className="text-white/60">
                                Thanks for joining. We'll be in touch with updates as we get closer to launch.
                            </p>
                            <Button
                                variant="outline"
                                className="mt-8"
                                onClick={() => setIsSuccess(false)}
                            >
                                Submit Another
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full h-12 px-4 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full h-12 px-4 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="w-full h-12 px-4 rounded-lg bg-black/20 border border-white/10 text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="(555) 123-4567"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="membership" className="text-sm font-medium text-white/80">Interested Membership</label>
                                <div className="relative">
                                    <select
                                        id="membership"
                                        required
                                        className="w-full h-12 px-4 rounded-lg bg-black/20 border border-white/10 text-white appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                                        value={formData.membership}
                                        onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                                    >
                                        <option value="" disabled className="bg-surface-200">Select a membership tier...</option>
                                        <option value="visiting" className="bg-surface-200 text-white">Visiting / Non-Member</option>
                                        {memberships.map((m) => (
                                            <option key={m.name} value={m.name} className="bg-surface-200 text-white">
                                                {m.name} - {m.price}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                                </div>
                                {formData.membership && formData.membership !== "visiting" && (
                                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-2">
                                        <p className="text-sm text-primary/90">
                                            <span className="font-bold">{formData.membership}: </span>
                                            {memberships.find(m => m.name === formData.membership)?.details}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center space-x-3 pt-2">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        id="leagues"
                                        className="peer w-5 h-5 rounded border-white/20 bg-black/20 text-primary focus:ring-primary focus:ring-offset-black/20"
                                        checked={formData.leagues}
                                        onChange={(e) => setFormData({ ...formData, leagues: e.target.checked })}
                                    />
                                </div>
                                <label htmlFor="leagues" className="text-sm text-white/80 select-none cursor-pointer">
                                    I'm interested in joining Leagues & Tournaments
                                </label>
                            </div>

                            {error && (
                                <p className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded border border-red-400/20">
                                    {error}
                                </p>
                            )}

                            <Button
                                type="submit"
                                className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Adding to Waitlist...
                                    </>
                                ) : (
                                    "Join Waitlist"
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </Section>
    );
}
