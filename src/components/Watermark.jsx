
const Watermark = ({ scrollProgress = 0 }) => {
  const watermarkProgress = Math.max(0, Math.min(1, (scrollProgress - 0.9) * 10));
  const watermarkTranslateY = (1 - watermarkProgress) * 15; // Slides up 15vw from below the fold

  return (
    <>
      <div 
        style={{ 
          transform: `translateY(${watermarkTranslateY}vw)`,
          opacity: watermarkProgress > 0 ? 1 : 0,
        }}
        className="fixed bottom-[-3.2vw] left-0 w-full text-center select-none pointer-events-none z-20 transition-transform duration-80 ease-out font-sans"
      >
        <span 
          className="text-[18vw] font-black tracking-[-0.05em] leading-none uppercase text-white"
        >
          RUSHIKESH
        </span>
      </div>
      
      {/* Blurred bottom fade overlay to match the premium cut-off blur effect */}
      <div 
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
          background: 'linear-gradient(to top, black 0%, rgba(0,0,0,0.8) 30%, transparent 100%)',
          opacity: watermarkProgress > 0 ? 1 : 0,
        }}
        className="fixed bottom-0 left-0 w-full h-[4.5vw] z-[25] pointer-events-none transition-opacity duration-100 ease-out"
      />
    </>
  );
};

export default Watermark;
