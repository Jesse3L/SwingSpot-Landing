import { Section } from "@/components/ui/Section";
import { MapPin } from "lucide-react";

export function LocalArea() {
    return (
        <Section background="dark" className="text-center">
            <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                {/* Info */}
                <div className="bg-surface-100 p-8 rounded-3xl border border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
                    <p className="text-white/60 mb-6 leading-relaxed">
                        Conveniently located in downtown Clovis. Whether you're visiting from Portales, Muleshoe, or right here in town, we're your local home for indoor golf.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <div>
                                <div className="text-white font-bold">SwingSpot</div>
                                <div className="text-white/60">224 N. Main Street</div>
                                <div className="text-white/60">Clovis, NM 88101</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="h-[300px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-surface-200 relative">
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
            </div>
        </Section>
    );
}
