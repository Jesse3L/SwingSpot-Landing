import { Section } from "@/components/ui/Section";
import { Check } from "lucide-react";

export function UseCases() {
    const cases = [
        {
            title: "Practice",
            subtitle: "Dial in your numbers",
            features: ["Carry Distance", "Spin Rate", "Club Path", "Shot Shape Analysis"],
            bg: "bg-surface-200"
        },
        {
            title: "Play",
            subtitle: "Virtual Golf",
            features: ["Pebble Beach", "St Andrews", "Valderrama", "Local Multiplayer"],
            bg: "bg-surface-100 border-primary/20"
        },
        {
            title: "Train",
            subtitle: "Improve Faster",
            features: ["Video Analysis", "Performance Testing", "Combine Tests", "Data Export"],
            bg: "bg-surface-200"
        }
    ];

    return (
        <Section background="default">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                    TRAIN. PLAY. <span className="text-primary">IMPROVE.</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {cases.map((useCase, i) => (
                    <div key={i} className={`p-8 rounded-2xl border border-white/5 flex flex-col ${useCase.bg}`}>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                            <p className="text-primary font-medium">{useCase.subtitle}</p>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {useCase.features.map((feat, j) => (
                                <li key={j} className="flex items-center gap-3 text-white/70">
                                    <Check className="w-5 h-5 text-primary shrink-0" />
                                    <span>{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
