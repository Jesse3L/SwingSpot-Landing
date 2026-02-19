import { Button } from "@/components/ui/Button";
import { TRACKMAN_BOOKING_URL } from "@/lib/constants";

export function CTABand() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Texture/Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-multiply" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-black mb-8 font-heading uppercase tracking-tight">
                    Ready to Swing?
                </h2>
                <p className="text-black/80 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join the waitlist today and be the first to know when we open.
                </p>
                <Button
                    href="#waitlist"
                    size="lg"
                    className="bg-black text-white hover:bg-black/80 hover:scale-105 shadow-2xl"
                >
                    Join Waitlist
                </Button>
            </div>
        </section>
    );
}
