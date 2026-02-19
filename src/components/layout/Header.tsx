import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TRACKMAN_BOOKING_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 h-20">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase font-heading">
                    Swing<span className="text-primary">Spot</span>
                </Link>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
                        <Link href="#how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
                        <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
                        <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
                    </nav>
                    <Button href="#waitlist" size="sm">
                        Join Waitlist
                    </Button>
                </div>
            </div>
        </header>
    );
}
