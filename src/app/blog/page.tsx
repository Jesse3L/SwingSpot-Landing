import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "Blog | SwingSpot",
    description: "Latest news, tips, and updates from SwingSpot.",
};

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                <Section background="dark" className="min-h-[60vh] flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
                        THE SWINGSPOT <span className="text-primary">BLOG</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mb-10">
                        Expert tips, course reviews, and community updates coming soon.
                    </p>
                    <Button href="/" variant="outline">
                        Return Home
                    </Button>
                </Section>
            </main>
            <Footer />
        </>
    );
}
