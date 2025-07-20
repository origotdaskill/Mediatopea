interface GridProps {
  children: React.ReactNode;
  title: string;
  text: string;
}

export default function Grid({ children, title, text }: GridProps) {
  return (
    <div className="relative flex h-[300px] w-[350px] flex-col items-center justify-center gap-4">
      {/* Glow Effect */}
      <div className="absolute inset-x-0 top-[50px] z-0 flex justify-center">
        <div
          className="absolute h-[200px] w-[300px] rounded-[50%] bg-accent/30 opacity-80 blur-[80px]"
        />
        <div
          className="absolute h-[150px] w-[300px] rounded-[50%] bg-accent/40 opacity-80 blur-[100px]"
        />
      </div>

      {/* Gradient Borders */}
      <div className="absolute top-0 left-[5%] h-[1px] w-[90%] bg-gradient-to-r from-background via-primary to-background" />
      <div className="absolute bottom-0 left-[5%] h-[1px] w-[90%] bg-gradient-to-r from-background via-primary to-background" />
      <div className="absolute left-0 top-[5%] h-[90%] w-[1px] bg-gradient-to-b from-background via-primary to-background" />
      <div className="absolute right-0 top-[5%] h-[90%] w-[1px] bg-gradient-to-b from-background via-primary to-background" />

      {/* Center Ticks */}
      <div className="absolute top-0 left-1/2 h-[2px] w-[30px] -translate-x-1/2 bg-foreground" />
      <div className="absolute bottom-0 left-1/2 h-[2px] w-[30px] -translate-x-1/2 bg-foreground" />
      <div className="absolute left-0 top-1/2 h-[30px] w-[2px] -translate-y-1/2 bg-foreground" />
      <div className="absolute right-0 top-1/2 h-[30px] w-[2px] -translate-y-1/2 bg-foreground" />

      {/* Corner Pins */}
      <div className="absolute top-[-8px] left-[-8px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-accent">
        <div className="h-[5px] w-[5px] rounded-full bg-secondary" />
      </div>
      <div className="absolute top-[-8px] right-[-8px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-accent">
        <div className="h-[5px] w-[5px] rounded-full bg-secondary" />
      </div>
      <div className="absolute bottom-[-8px] left-[-8px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-accent">
        <div className="h-[5px] w-[5px] rounded-full bg-secondary" />
      </div>
      <div className="absolute bottom-[-8px] right-[-8px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-accent">
        <div className="h-[5px] w-[5px] rounded-full bg-secondary" />
      </div>

      {/* Icon and Text */}
      {children}
      <p className="font-light text-foreground text-[26px]">{title}</p>
      <p className="w-[90%] text-center text-sm font-light text-muted-foreground">{text}</p>
    </div>
  );
}