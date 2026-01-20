export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background overflow-hidden transition-colors duration-500">
      {/* 1. Primary Light Source (Top Right) */}
      {/* Light Mode: Very subtle cool gray (clean depth) */}
      {/* Dark Mode: Primary color glow (atmospheric light) */}
      <div className="absolute -top-[150px] -right-[100px] w-[700px] h-[700px] rounded-full blur-[140px] 
        bg-slate-900/5 dark:bg-primary/15 
        pointer-events-none transition-colors duration-500" 
      />

      {/* 2. Secondary Ambient Fill (Bottom Left) */}
      {/* Light Mode: Barely visible warm gray */}
      {/* Dark Mode: Secondary color glow */}
      <div className="absolute top-[20%] -left-[200px] w-[600px] h-[600px] rounded-full blur-[140px] 
        bg-slate-500/5 dark:bg-secondary/20 
        opacity-30 pointer-events-none transition-colors duration-500" 
      />

      {/* 3. Vertical Lines */}
      {/* We use a hardcoded color that works for both, or switch opacity */}
      <div className="absolute inset-0 bg-[size:100px_100%] pointer-events-none 
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)]"
      ></div>

      {/* 4. The Horizon Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none"></div>
    </div>
  )
}