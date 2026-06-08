
const TechOrb = ({ icon: Icon }) => {
  return (
    <div className="w-[80px] h-[80px]">
      <div 
        className="w-full h-full rounded-full backdrop-blur-[10px] border border-white/12 flex items-center justify-center relative"
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.08) 0%, rgba(15, 15, 15, 0.65) 70%)',
          boxShadow: '-3px 0 8px rgba(255, 0, 0, 0.25), 3px 0 8px rgba(0, 255, 255, 0.25), inset -2px 0 6px rgba(255, 0, 0, 0.15), inset 2px 0 6px rgba(0, 255, 255, 0.15), inset 0 0 15px rgba(0, 0, 0, 0.7)'
        }}
      >
        {/* Inner heavy noise texture for glass finish */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none z-10"
          style={{
            backgroundImage: "url(\"data:image/svg+xml;utf8,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.32'/%3E%3C/svg%3E\")"
          }}
        />
        
        {/* Chromatic Aberration Icon inside the flat orb */}
        <div 
          className="text-[2.5rem] text-white/45 flex items-center justify-center z-20"
          style={{
            filter: 'drop-shadow(-2px 0px 1px rgba(255,0,0,0.75)) drop-shadow(2px 0px 1px rgba(0,255,255,0.75))'
          }}
        >
          {Icon && <Icon />}
        </div>
      </div>
    </div>
  );
};

export default TechOrb;
