import { useState, useEffect } from 'react';

const Footer = ({ scrollProgress = 0, scrollTop = 0 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTime(((Date.now() - startTime) / 1000).toFixed(1));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const boxBaseClass = "flex flex-col justify-center h-full border-r border-white/15 box-border";
  const titleClass = "text-[0.65rem] font-bold tracking-[1.5px] mb-[6px]";
  const valueClass = "text-[0.85rem] font-mono font-bold";

  return (
    <footer className="absolute bottom-0 left-[40px] right-[40px] h-[60px] flex items-center justify-between z-10 pointer-events-none">
      {/* Matches the left vertical line (480px minus 40px offset = 440px) */}
      <div 
        className="flex items-center h-full w-[440px] transition-opacity duration-75"
        style={{ 
          opacity: Math.max(0, 1 - scrollProgress * 11),
          pointerEvents: scrollProgress > 0.09 ? 'none' : 'auto'
        }}
      >
        <div className={`${boxBaseClass} w-[120px] pl-[20px]`}>
          <span className={titleClass}>PROJECTS</span>
          <span className={valueClass}>12</span>
        </div>
        <div className={`${boxBaseClass} w-[140px] pl-[20px]`}>
          <span className={titleClass}>HACKATHONS</span>
          <span className={valueClass}>5</span>
        </div>
        <div className={`${boxBaseClass} w-[180px] pl-[20px]`}>
          <span className={titleClass}>TECH STACK</span>
          <span className={`${valueClass} text-[#ff4d4d]`}>React • TS • Node</span>
        </div>
      </div>

      <div 
        className="flex items-center gap-[10px] text-[0.75rem] font-bold tracking-[1px] transition-opacity duration-75"
        style={{ 
          opacity: Math.max(0, 1 - scrollProgress * 11),
          pointerEvents: scrollProgress > 0.09 ? 'none' : 'auto'
        }}
      >
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="white" strokeWidth="1.5" className="opacity-90">
          <rect x="1" y="1" width="12" height="18" rx="6" />
          <line x1="7" y1="4" x2="7" y2="8" />
        </svg>
        <span>SCROLL DOWN</span>
      </div>

      {/* Matches the right vertical line (340px minus 40px offset = 300px) */}
      <div className="w-[300px] pl-[20px] h-full flex items-center border-l border-white/15 box-border pointer-events-auto">
        <div className="flex flex-col gap-[6px] w-full">
          <div className="grid grid-cols-[70px_60px_60px_70px] text-[0.65rem] font-mono text-white/60">
            <span>CURSOR X:</span>
            <span className="text-white font-bold">{mousePos.x}</span>
            <span>SCROLL:</span>
            <span className="text-white font-bold">{(scrollTop / 1000).toFixed(3)}</span>
          </div>
          <div className="grid grid-cols-[70px_60px_60px_70px] text-[0.65rem] font-mono text-white/60">
            <span>CURSOR Y:</span>
            <span className="text-white font-bold">{mousePos.y}</span>
            <span>TIME:</span>
            <span className="text-white font-bold">{time}S</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
