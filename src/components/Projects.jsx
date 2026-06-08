const Projects = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-[40px] text-center select-none bg-transparent">
      <div className="max-w-[950px] flex flex-col items-center gap-[25px]">
        {/* Top Line with Links */}
        <div className="text-[11px] font-mono tracking-[3px] text-white/50 uppercase">
          PROJECTS THAT DEFINE MY JOURNEY{" "}
          <span className="text-[#0088ff] font-bold ml-[10px] cursor-pointer hover:opacity-80 transition-opacity">GITHUB</span>{" "}
          <span className="text-[#ea4c89] font-bold ml-[10px] cursor-pointer hover:opacity-80 transition-opacity font-serif italic lowercase tracking-[0.5px]">lab</span>
        </div>

        {/* Tagline mapping "I HAVE MORE THAN 15 YEARS OF EXPERIENCE" */}
        <h2 className="text-[2.2rem] font-bold tracking-[1px] leading-[1.4] text-white uppercase font-sans">
          <span className="font-light text-white/60">EXPLORING </span>
          <span className="font-extrabold text-white">FULL-STACK DEVELOPMENT</span>
          <span className="font-light text-white/60">, </span>
          <span className="font-extrabold text-white">AI</span>
          <span className="font-light text-white/60"> AND </span>
          <span className="font-extrabold text-white">PRODUCT DESIGN</span>
        </h2>

        {/* Caption mapping "FREELANCE, OFFICE, REMOTE WORK, PERSONAL PROJECTS..." */}
        <p className="text-[11px] font-mono tracking-[2px] text-white/40 uppercase max-w-[650px] leading-[1.8] m-0">
          Built through hackathons, personal projects, college initiatives and continuous learning.
        </p>
      </div>
    </div>
  );
};

export default Projects;
