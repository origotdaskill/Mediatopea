import { BorderBeam } from "../magicui/border-beam";

interface GridProps {
  text: string;
  name: string;
}

export default function Grid2({ text, name }: GridProps) {
  return (
    <div
      // Replaced inline style with theme-aware classes
      className="relative flex h-[200px] w-[350px] flex-col items-start justify-center gap-6 rounded-xl bg-card p-4 text-card-foreground"
    >
      {/* Updated BorderBeam to use the primary theme color */}
      <BorderBeam
        duration={6}
        delay={3}
        size={200}
        className="from-transparent via-primary to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={200}
        className="from-transparent via-primary to-transparent"
      />
      
      {/* Text now inherits its color from the main div */}
      <p className="text-sm font-light">{text}</p>
      <p className="text-start text-sm font-semibold">{name}</p>
    </div>
  );
}