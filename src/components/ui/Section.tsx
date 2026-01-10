import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
    background?: "default" | "subtle" | "dark";
}

export function Section({
    children,
    className,
    containerClassName,
    background = "default",
    ...props
}: SectionProps) {
    const bgStyles = {
        default: "bg-background",
        subtle: "bg-surface-50 border-y border-border",
        dark: "bg-surface-100 border-y border-border",
    };

    return (
        <section
            className={cn("py-20 md:py-28 relative overflow-hidden", bgStyles[background], className)}
            {...props}
        >
            <div className={cn("container mx-auto px-4 sm:px-6 relative z-10", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
