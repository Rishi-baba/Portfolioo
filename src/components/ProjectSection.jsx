import { useState, useEffect } from 'react';

const ProjectSection = ({ 
  pageIndex, 
  scrollTop, 
  align = 'left', 
  category, 
  title, 
  description, 
  image,
  link,
  credentials
}) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate local scroll offset from when this section enters the viewport
  const localScroll = scrollTop - (pageIndex * viewportHeight);
  
  // Parallax translation: only on desktop
  const yOffset = isDesktop ? localScroll * 0.12 : 0;
  const parallaxStyle = {
    transform: `translateY(${yOffset}px)`,
    transition: 'transform 0.1s ease-out'
  };

  const handleMouseMove = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY });
  };

  const crosshairClass = "absolute text-white/30 text-[12px] leading-none -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-[4]";

  return (
    <div className="w-full h-screen snap-start shrink-0 relative flex items-center justify-center pointer-events-auto bg-transparent">
      <div className={`max-w-[1150px] w-full flex flex-col md:flex-row items-center justify-between gap-[30px] md:gap-[45px] px-[40px] ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Visual UI Screenshot Card with Corner Crosshairs (Anchor link for redirect) */}
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="w-full md:w-[62%] aspect-[16/9] relative border border-white/10 bg-white/[0.01] backdrop-blur-[4px] rounded-[6px] p-[20px] select-none overflow-hidden group shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] cursor-none z-10 block no-underline"
        >
          {/* Corner Crosshairs */}
          <div className={`${crosshairClass} top-0 left-0`}>+</div>
          <div className={`${crosshairClass} top-0 left-full`}>+</div>
          <div className={`${crosshairClass} bottom-0 left-0`}>+</div>
          <div className={`${crosshairClass} bottom-0 left-full`}>+</div>

          {/* Background grid representation */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 z-0"></div>

          {/* Project Screenshot Image */}
          <div className="w-full h-full overflow-hidden rounded-[4px] relative z-10 border border-white/5 bg-[#09090b]">
            {image && (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" 
              />
            )}
            {/* Subtle overlay gradient to match the dark veil theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
          </div>
        </a>

        {/* Project Meta and Details (Right or Left side, with scroll parallax) */}
        <div style={parallaxStyle} className="w-full md:w-[30%] flex flex-col items-start text-left select-none relative z-10">
          {/* Category */}
          <span className="text-[9px] font-mono tracking-[3px] text-white/40 uppercase mb-[8px]">
            {category}
          </span>
          
          {/* Title */}
          <h3 className="text-[1.4rem] md:text-[1.65rem] font-bold tracking-[1px] leading-[1.25] text-white uppercase font-sans mb-[12px]">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-[0.74rem] md:text-[0.78rem] text-white/55 leading-[1.7] font-sans m-0 mb-[25px] max-w-[380px]">
            {description}
          </p>

          {/* Credentials Info Block */}
          {credentials && (
            <div className="mb-[25px] p-[12px] bg-white/[0.03] border border-white/10 rounded-[4px] font-mono text-[10px] text-white/70 max-w-[380px] w-full box-border select-all">
              <div className="text-[8px] font-bold tracking-[1.5px] text-white/40 uppercase mb-[6px]">DEMO ACCESS</div>
              <div className="flex flex-col gap-[3px]">
                <div><span className="text-white/40">EMAIL:</span> {credentials.email}</div>
                <div><span className="text-white/40">PASSWORD:</span> {credentials.password}</div>
              </div>
            </div>
          )}

          {/* Visit Website button with crosshair border frame */}
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative inline-block px-[20px] py-[10px] group/btn no-underline cursor-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Corner Crosshairs */}
            <div className="absolute text-white/30 text-[10px] leading-none -translate-x-1/2 -translate-y-1/2 top-0 left-0 transition-all duration-300 group-hover/btn:text-white">+</div>
            <div className="absolute text-white/30 text-[10px] leading-none -translate-x-1/2 -translate-y-1/2 top-0 left-full transition-all duration-300 group-hover/btn:text-white">+</div>
            <div className="absolute text-white/30 text-[10px] leading-none -translate-x-1/2 -translate-y-1/2 top-full left-0 transition-all duration-300 group-hover/btn:text-white">+</div>
            <div className="absolute text-white/30 text-[10px] leading-none -translate-x-1/2 -translate-y-1/2 top-full left-full transition-all duration-300 group-hover/btn:text-white">+</div>
            
            <span className="bg-transparent border-none text-white text-[0.62rem] md:text-[0.68rem] font-bold tracking-[3px] font-mono select-none uppercase hover:opacity-75 transition-opacity">
              VISIT WEBSITE
            </span>
          </a>
        </div>

      </div>

      {/* Custom Cursor Tooltip matching the design exactly */}
      {isHovered && (
        <div 
          className="fixed pointer-events-none z-[9999] px-[10px] py-[6px] bg-[#1f1f1f] text-white text-[10px] font-mono uppercase tracking-[1px] border border-white/5 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
          style={{
            left: `${mouseCoords.x + 12}px`,
            top: `${mouseCoords.y + 12}px`
          }}
        >
          {/* Small white square in the top-left corner */}
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-white"></div>
          VISIT WEBSITE
        </div>
      )}
    </div>
  );
};

export default ProjectSection;
