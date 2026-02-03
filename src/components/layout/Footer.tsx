"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // TODO: Replace this with your actual Zapier Webhook URL
        // const WEBHOOK_URL = "YOUR_ZAPIER_WEBHOOK_URL";

        try {
            // Simulator network request
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log("Form submitted:", data);
            setIsSuccess(true);
            event.currentTarget.reset();
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <footer className="bg-surface-50 border-t border-border pt-20 pb-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Top Section: Header & Contact Grid */}
                <div className="mb-16">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                            GET IN TOUCH
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                            READY TO <span className="text-primary">PLAY?</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed">
                            Have questions about our technology, membership options, or booking a private event?
                            Drop us a line and we'll get back to you shortly.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-100 border border-white/5 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-surface-50 flex items-center justify-center mb-4 text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Visit Us</h3>
                            <p className="text-white/60">224 N. Main Street<br />Clovis, NM 88101</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-100 border border-white/5 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-surface-50 flex items-center justify-center mb-4 text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
                            <a href="mailto:info@swingspot.com" className="text-white/60 hover:text-white transition-colors">
                                info@swingspot.com
                            </a>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-100 border border-white/5 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-surface-50 flex items-center justify-center mb-4 text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
                            <a href="tel:+15755550123" className="text-white/60 hover:text-white transition-colors">
                                (575) 555-0123
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-20 items-stretch">
                    {/* Left Column: Map Embed */}
                    <div className="h-full min-h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-lg bg-surface-100 relative">
                        <iframe
                            src="https://maps.google.com/maps?q=224%20N.%20Main%20Street%2C%20Clovis%2C%20NM%2088101&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                            className="absolute inset-0"
                        />
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-surface-100 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-sm h-full">
                        {isSuccess ? (
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-white/60 mb-8">
                                    Thanks for reaching out. We'll get back to you as soon as possible.
                                </p>
                                <Button onClick={() => setIsSuccess(false)} variant="outline">
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-white/80">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            placeholder="John Doe"
                                            suppressHydrationWarning
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-white/80">
                                            Phone (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                            placeholder="(555) 123-4567"
                                            suppressHydrationWarning
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white/80">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                        placeholder="john@example.com"
                                        suppressHydrationWarning
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/80">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                        placeholder="How can we help you?"
                                        suppressHydrationWarning
                                    />
                                </div>

                                {error && (
                                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

                                <Button type="submit" size="lg" className="w-full" disabled={isLoading} suppressHydrationWarning>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Bottom Bar: Logo & Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase font-heading">
                            Swing<span className="text-primary">Spot</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-white/60">
                        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <p>© {currentYear} SwingSpot. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
