import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface-50 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                    {/* Brand & Info */}
                    <div className="space-y-6">
                        <div>
                            <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase font-heading">
                                Swing<span className="text-primary">Spot</span>
                            </Link>
                            <p className="mt-4 text-white/60 max-w-sm leading-relaxed">
                                Premier Indoor Golf Simulator in Clovis, NM. Powered by Trackman iO technology.
                                Open 24/7 for members.
                            </p>
                        </div>

                        <div className="space-y-2 text-white/80">
                            <p className="font-bold text-white">📍 Visit Us</p>
                            <p>224 N. Main Street, Clovis, NM 88101</p>
                            <p className="text-sm text-white/50">Serving Clovis, Portales, and Muleshoe</p>
                        </div>

                        <div className="flex gap-4">
                            <Link href="/blog" className="text-sm text-white/60 hover:text-primary transition-colors">Blog</Link>
                            {/* <Link href="#" className="text-sm text-white/60 hover:text-primary transition-colors">Privacy</Link> */}
                        </div>
                    </div>

                    {/* Map Embed - Moved to Footer */}
                    <div className="h-[250px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-surface-100 relative">
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

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 text-center text-sm text-white/30">
                    <p>© {currentYear} SwingSpot. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
