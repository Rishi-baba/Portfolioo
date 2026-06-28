import { useState, useEffect } from 'react';
import TechOrb from './TechOrb';
import HeroText from './HeroText';
import { SiExpress, SiGreensock, SiThreedotjs } from 'react-icons/si';
import { 
  TbBrandReact, 
  TbBrandTypescript, 
  TbBrandNodejs, 
  TbBrandMongodb 
} from 'react-icons/tb';

const techData = [
  { name: 'React', icon: TbBrandReact },
  { name: 'TypeScript', icon: TbBrandTypescript },
  { name: 'Node.js', icon: TbBrandNodejs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: TbBrandMongodb },
  { name: 'Three.js', icon: SiThreedotjs },
  { name: 'GSAP', icon: SiGreensock }
];

const TechConstellation = ({ scrollProgress = 0 }) => {
  const baseRadius = 200; // Base radius for circle layout
  const radius = baseRadius + scrollProgress * 550; // Expands outward on scroll

  const [angleOffset, setAngleOffset] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    const speed = 0.015; // Speed in degrees per millisecond (approx 5.4 degrees per second)
    let lastTime = performance.now();
    // console.log(lastTime);

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      setAngleOffset((prev) => (prev + speed * delta) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const constellationOpacity = Math.max(0, 1 - scrollProgress * 11);
  const constellationBlur = Math.min(12, scrollProgress * 11 * 12);

  return (
    <>
      <HeroText scrollProgress={scrollProgress} />
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '0',
        height: '0',
        zIndex: 10, // Behind the hero text
        opacity: constellationOpacity,
        filter: `blur(${constellationBlur}px)`,
        pointerEvents: scrollProgress > 0.09 ? 'none' : 'auto'
      }}>
        {techData.map((tech, index) => {
          // Calculate angle evenly to form a perfect circle, shifted by the animated offset
          const angle = (index / techData.length) * 360 - 90 + angleOffset;
          const rad = angle * (Math.PI / 180);
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          
          return (
            <div 
              key={tech.name} 
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              style={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
                marginTop: '-40px', // Center the 80px width orb
                marginLeft: '-40px' // Center the 80px height orb
              }}
            >
              <TechOrb icon={tech.icon} />
            </div>
          );
        })}
      </div>

      {/* Custom Cursor Tooltip matching the design exactly */}
      {hoveredTech && scrollProgress <= 0.35 && (
        <div 
          className="fixed pointer-events-none z-[9999] px-[10px] py-[6px] bg-[#1f1f1f] text-white text-[10px] font-mono uppercase tracking-[1px] border border-white/5 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
          style={{
            left: `${mouseCoords.x + 12}px`,
            top: `${mouseCoords.y + 12}px`
          }}
        >
          {/* Small white square in the top-left corner */}
          <div className="absolute top-0 left-0 w-[3px] h-[3px] bg-white"></div>
          {hoveredTech}
        </div>
      )}
    </>
  );
};

export default TechConstellation;
