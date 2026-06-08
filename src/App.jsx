import { useState, useRef } from 'react';
import LightRays from './components/LightRays';
import Noise from './components/Noise';
import GridLayout from './components/GridLayout';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import TechConstellation from './components/TechConstellation';
import Specialty from './components/Specialty';
import Projects from './components/Projects';
import ProjectSection from './components/ProjectSection';
import Watermark from './components/Watermark';
import { projectsData } from './data/projects';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1
  const [scrollTop, setScrollTop] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (e) => {
    const target = e.target;
    const currentScrollTop = target.scrollTop;
    const maxScroll = target.scrollHeight - target.clientHeight;
    const progress = maxScroll > 0 ? currentScrollTop / maxScroll : 0;
    setScrollProgress(progress);
    setScrollTop(currentScrollTop);
  };

  return (
    <div 
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="relative w-screen h-screen overflow-y-scroll overflow-x-hidden bg-black text-white font-sans snap-y snap-mandatory scroll-smooth"
    >
      {/* Background Layers - Fixed underneath everything */}
      <div className="fixed inset-0 z-0 [&>div]:w-full [&>div]:h-full pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.5}
          lightSpread={0.8}
          rayLength={0.5}
          pulsating={false}
          noiseAmount={0.0}
        />
      </div>
      <div className="fixed inset-0 z-[1] pointer-events-none [&>div]:w-full [&>div]:h-full">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={20}
        />
      </div>

      {/* Grid Borders and Crosshairs - Kept fully visible */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        <GridLayout scrollProgress={scrollProgress} />
      </div>

      {/* Navigation Header - Kept fully visible */}
      <div className="fixed top-0 left-0 w-full z-40 pointer-events-none">
        <Navbar />
      </div>

      {/* Main Content Area - Tech Constellation gets big, blurs and fades */}
      <main className="fixed top-[80px] bottom-[60px] left-[40px] right-[40px] z-10 pointer-events-none">
        <TechConstellation scrollProgress={scrollProgress} />
        
        {/* Profile (Bottom Left) - Fades out on scroll */}
        <div 
          style={{ 
            opacity: Math.max(0, 1 - scrollProgress * 11),
            pointerEvents: scrollProgress > 0.09 ? 'none' : 'auto'
          }}
          className="transition-opacity duration-75"
        >
          <Profile />
        </div>
      </main>

      {/* Bottom Footer Statistics - Fixed footer with dynamic scroll value */}
      <div className="fixed bottom-0 left-0 w-full z-40 pointer-events-none">
        <Footer scrollProgress={scrollProgress} scrollTop={scrollTop} />
      </div>

      {/* Giant RUSHIKESH Watermark at the bottom, slides up from below the fold */}
      <Watermark scrollProgress={scrollProgress} />

      {/* Page 1 Viewport Snap Spacer */}
      <div className="w-full h-screen snap-start shrink-0 pointer-events-auto"></div>

      {/* Page 2 Viewport Snap Specialty Section */}
      <div className="w-full h-screen snap-start shrink-0 z-20 relative flex items-center justify-center pointer-events-auto bg-transparent">
        <Specialty />
      </div>

      {/* Page 3 Viewport Snap Projects Section */}
      <div className="w-full h-screen snap-start shrink-0 z-20 relative flex items-center justify-center pointer-events-auto bg-transparent">
        <Projects />
      </div>

      {/* Pages 4-12 Viewport Snap Project Showcases */}
      {projectsData.map((project) => (
        <ProjectSection 
          key={project.pageIndex}
          pageIndex={project.pageIndex} 
          scrollTop={scrollTop} 
          align={project.align}
          category={project.category}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default App;
