import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-surface-50 flex flex-col items-center justify-center text-center px-4">
            <div className="space-y-6 max-w-md">
                <h1 className="text-9xl font-bold text-white/5 font-heading">404</h1>
                <h2 className="text-3xl font-bold text-white">Out of Bounds!</h2>
                <p className="text-lg text-white/60">
                    Looks like you've sliced this one into the woods. The page you're looking for doesn't exist.
                </p>
                <div className="pt-4">
                    <Link href="/">
                        <Button variant="primary">Return to Fairway</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
