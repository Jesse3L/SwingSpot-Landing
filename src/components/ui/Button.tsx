import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, external, children, ...props }, ref) => {
        const variants = {
            primary:
                "bg-primary text-black font-bold hover:bg-primary-dark shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)]",
            secondary: "bg-surface-200 text-white hover:bg-surface-100 border border-border",
            outline: "bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary",
            ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const baseStyles =
            "inline-flex items-center justify-center rounded-sm transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-wide font-sans";

        const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            if (external) {
                return (
                    <a
                        href={href}
                        className={combinedClassName}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {children}
                    </a>
                );
            }
            return (
                <Link href={href} className={combinedClassName}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={combinedClassName} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";
