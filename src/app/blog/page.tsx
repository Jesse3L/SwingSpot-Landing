import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "SwingSpot Blog | Indoor Golf Simulator News & Updates in Clovis, NM",
    description: "Expert tips, course reviews, and community updates from SwingSpot, the premier indoor golf simulator in Clovis, NM powered by Trackman technology.",
};

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                <Section background="dark" className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
                        THE SWINGSPOT <span className="text-primary">BLOG</span>
                    </h1>
                    <div className="max-w-3xl text-left space-y-6 text-white/80 mb-10">
                        <p className="text-xl text-center">
                            Expert tips, course reviews, and community updates coming soon.
                        </p>
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Elevate Your Game at SwingSpot</h2>
                        <p>
                            At SwingSpot in Clovis, NM, we believe that golf is a year-round sport. Our state-of-the-art Trackman simulators offer the most realistic indoor golf experience available, whether you are a seasoned pro trying to dial in your yardages or a beginner picking up a club for the first time.
                        </p>
                        <p>
                            Our upcoming blog will feature regular insights from local pros, deep dives into the stunning courses you can play in our bays, and updates on the latest hardware and software from Trackman. From swing tips to club fitting advice, we want this blog to be a resource for the local golf community.
                        </p>
                        <p>
                            Looking for something interactive and fun? Trackman isn&apos;t just for practice. We offer a variety of interactive games, including digital mini golf, target practice, and more. It&apos;s the perfect activity for a night out, a corporate event, or a fun afternoon with the family. Keep an eye on this space for updates on leagues, tournaments, and exclusive membership offers.
                        </p>
                    </div>
                    <Button href="/" variant="outline">
                        Return Home
                    </Button>
                </Section>
            </main>
            <Footer />
        </>
    );
}
