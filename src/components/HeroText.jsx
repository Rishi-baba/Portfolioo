
const HeroText = ({ scrollProgress = 0 }) => {
  const crosshairClass = "absolute text-white/40 text-[10px] leading-none -translate-x-1/2 -translate-y-1/2 pointer-events-none";

  const opacity = Math.max(0, 1 - scrollProgress * 11);
  const blur = Math.min(15, scrollProgress * 11 * 15);
  const scale = 1 - Math.min(1, scrollProgress * 11) * 0.15;

  return (
    <div 
      className="absolute top-1/2 left-1/2 flex flex-col items-center text-center z-30 w-[90%] max-w-[500px]"
      style={{
        opacity,
        filter: `blur(${blur}px)`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        pointerEvents: 'none' // Keep transparent to pointer events so scroll wheel is never blocked
      }}
    >
      <div className="mb-[20px] opacity-90">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <rect x="2" y="8" width="4" height="8" rx="1" />
            <rect x="8" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="10" width="4" height="4" rx="1" />
            <rect x="20" y="6" width="4" height="12" rx="1" />
        </svg>
      </div>
      
      <h1 className="text-[1.85rem] font-medium tracking-[2px] leading-[1.25] m-0 mb-[16px] [text-shadow:0_2px_10px_rgba(0,0,0,0.5)] font-sans uppercase">
        CODE <span style={{ fontWeight: '300', opacity: 0.5, margin: '0 5px' }}>×</span> DESIGN FOR,<br/>PRODUCTS AND GROWTH
      </h1>
      

      <p className="text-[0.8rem] text-white/70 leading-[1.6] m-0 mb-[35px] tracking-[0.5px] max-w-[420px]">
        Creating scalable software, intelligent systems and <br/>
        user-focused experiences from concept to deployment.
         
      </p>
      
      <div className="relative inline-block px-[30px] py-[15px] pointer-events-auto">
        <div className={`${crosshairClass} top-0 left-0`}>+</div>
        <div className={`${crosshairClass} top-0 left-full`}>+</div>
        <div className={`${crosshairClass} top-full left-0`}>+</div>
        <div className={`${crosshairClass} top-full left-full`}>+</div>
        <button className="bg-transparent border-none text-white text-[0.75rem] font-bold tracking-[2px] cursor-pointer font-mono">
          WRITE TO MAIL
        </button>
      </div>
    </div>
  );
};

export default HeroText;
