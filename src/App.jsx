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
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';

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
      {(() => {
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
      })()}

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

      {/* Page 4 Viewport Snap Project 1 Showcase - Purple Block */}
      <ProjectSection 
        pageIndex={3} 
        scrollTop={scrollTop} 
        align="left"
        category="AI / WEB APP / AUTOMATION"
        title="PURPLE BLOCK"
        description="An intelligent AI platform for growth and scale, compiling data, driving marketing workflows, and optimizing business operations."
        image={img1}
        link="https://purple-block.vercel.app/"
      />

      {/* Page 5 Viewport Snap Project 2 Showcase - Laww */}
      <ProjectSection 
        pageIndex={4} 
        scrollTop={scrollTop} 
        align="right"
        category="LEGAL TECH / AI SEARCH / STATUTE MAPPING"
        title="LAWW ASSISTANT"
        description="A specialized legal intelligence engine cross-referencing evidence against statutory penal codes, indexing millions of precedent filings, and mapping judicial data."
        image={img2}
        link="https://laww-flame.vercel.app/?_vercel_share=gCeBms4vBewpifK7LPfnuAEUsIx0jjnA"
      />

      {/* Page 6 Viewport Snap Project 3 Showcase - Ratali */}
      <ProjectSection 
        pageIndex={5} 
        scrollTop={scrollTop} 
        align="left"
        category="GAMIFIED PRODUCTIVITY / PANDA TASKS"
        title="RATALI TASKS"
        description="A cute, gamified task management dashboard utilizing a bamboo aesthetic and panda helpers to reward work habits, study schedules, and deadline tracking."
        image={img3}
        link="https://ratali.vercel.app/"
      />

      {/* Page 7 Viewport Snap Project 4 Showcase - Parichay */}
      <ProjectSection 
        pageIndex={6} 
        scrollTop={scrollTop} 
        align="right"
        category="PUBLIC SERVICE / LEGAL AID"
        title="PARICHAY GUIDANCE"
        description="A public guidance portal simplifying legal issues into plain language, offering secure anonymous legal assistance and document mapping across India."
        image={img4}
        link="https://parichay-delta.vercel.app/"
      />

      {/* Page 8 Viewport Snap Project 5 Showcase - Parichay Admin */}
      <ProjectSection 
        pageIndex={7} 
        scrollTop={scrollTop} 
        align="left"
        category="ADMIN SYSTEM / ANALYTICS PANEL"
        title="PARICHAY CONSOLE"
        description="An administrative hub managing users, cases, evidence logs, lawyers, and NGOs inside the Parichay legal aid and forensic ecosystem."
        image={img5}
        link="https://parichay-admin-tau.vercel.app/"
      />

      {/* Page 9 Viewport Snap Project 6 Showcase - Vedya Frontend */}
      <ProjectSection 
        pageIndex={8} 
        scrollTop={scrollTop} 
        align="right"
        category="HEALTH TECH / WEB WORKSPACE / REACT"
        title="VEDYA HUB"
        description="A modern, intuitive medical consulting and patient management dashboard built with React and Tailwind CSS, focusing on client workspace efficiency."
        image={img6}
        link="https://vedya-frontend-2.vercel.app/"
      />

      {/* Page 10 Viewport Snap Project 7 Showcase - Vedya Add */}
      <ProjectSection 
        pageIndex={9} 
        scrollTop={scrollTop} 
        align="left"
        category="WELLNESS / METRIC TRACKER / ADD PORTAL"
        title="VEDYA INSIGHTS"
        description="A user-focused wellness portal and data logging form designed to capture mental health markers, track daily habits, and visualize growth analytics."
        image={img7}
        link="https://vedya-kmgy.vercel.app/add"
      />

      {/* Page 11 Viewport Snap Project 8 Showcase - Obys Agency Clone */}
      <ProjectSection 
        pageIndex={10} 
        scrollTop={scrollTop} 
        align="right"
        category="AESTHETIC DEVELOPMENT / GSAP / WEB DESIGN"
        title="OBYS AGENCY CLONE"
        description="A pixel-perfect recreation of the award-winning Obys Agency website, utilizing advanced GSAP animations, custom cursors, and magnetic layouts."
        image={img8}
        link="https://rishi-baba.github.io/obys-agency/"
      />

      {/* Page 12 Viewport Snap Project 9 Showcase - Apple Pro Clone */}
      <ProjectSection 
        pageIndex={11} 
        scrollTop={scrollTop} 
        align="left"
        category="INTERACTIVE UI / THREE.JS / TAILWIND"
        title="APPLE PRO CLONE"
        description="An immersive product presentation showcase cloning the Apple iPhone Pro experience, integrating 3D model loaders, layout transitions, and fluid physics."
        image={img9}
        link="https://rishi-baba.github.io/applepro-clone/"
      />
    </div>
  );
}

export default App;
