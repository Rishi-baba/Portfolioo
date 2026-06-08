
const GridLayout = ({ scrollProgress = 0 }) => {
  const lineClass = "absolute bg-white/15 z-[5]";
  const crosshairClass = "absolute text-white/40 text-[14px] leading-none -translate-x-1/2 -translate-y-1/2 z-[6] font-light";

  return (
    <>
      {/* Grid Lines */}
      <div className={`${lineClass} top-[80px] left-0 w-full h-[1px]`}></div>
      
      {/* Left + Center segment of bottom line - fades out on scroll */}
      <div 
        className={`${lineClass} bottom-[60px] left-0 w-[calc(100%-340px)] h-[1px] transition-opacity duration-75`}
        style={{ opacity: Math.max(0, 1 - scrollProgress * 2.5) }}
      ></div>
      
      {/* Right segment of bottom line - stays visible above stats */}
      <div className={`${lineClass} bottom-[60px] right-0 w-[340px] h-[1px]`}></div>
      
      <div className={`${lineClass} left-[40px] top-0 w-[1px] h-full`}></div>
      <div className={`${lineClass} right-[40px] top-0 w-[1px] h-full`}></div>

      {/* Crosshairs */}
      <div className={`${crosshairClass} top-[80px] left-[40px]`}>+</div>
      <div className={`${crosshairClass} top-[80px] right-[40px]`}>+</div>
      
      {/* Bottom-left crosshair - fades out with its segment */}
      <div 
        className={`${crosshairClass} bottom-[60px] left-[480px] transition-opacity duration-75`}
        style={{ opacity: Math.max(0, 1 - scrollProgress * 2.5) }}
      >+</div>
      
      {/* Bottom-right crosshair - stays visible */}
      <div className={`${crosshairClass} bottom-[60px] right-[340px]`}>+</div>
    </>
  );
};

export default GridLayout;
