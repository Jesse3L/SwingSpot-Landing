import { Section } from "@/components/ui/Section";

export function FeatureVideo() {
    return (
        <Section background="dark" className="border-t border-white/5">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                    WATCH THE EXPERIENCE
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                    UNRIVALED <span className="text-primary">GRAPHICS</span>
                </h2>
                <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                    See why Trackman is the industry leader. From the dew on the grass to the movement of the clouds,
                    every detail is rendered in breathtaking 4K resolution.
                </p>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(142,255,51,0.15)] bg-black">
                    <iframe
                        src="https://player.vimeo.com/video/1012388994?h=d0f5e8cded&title=0&byline=0&portrait=0"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </Section>
    );
}
