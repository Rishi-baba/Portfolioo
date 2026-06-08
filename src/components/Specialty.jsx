import { 
  TbBrandReact, 
  TbBrandTypescript, 
  TbBrandNodejs 
} from 'react-icons/tb';

const Specialty = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-[40px] text-center select-none bg-transparent">
      <div className="max-w-[950px] flex flex-col items-center gap-[25px]">
        {/* Top Tag Line */}
        <div className="text-[11px] font-mono tracking-[3px] text-white/50 uppercase">
          REACT <span className="text-white/20 mx-2">/</span> 
          TYPESCRIPT <span className="text-white/20 mx-2">/</span> 
          NODE.JS <span className="text-white/20 mx-2">/</span> 
          AI <span className="text-white/20 mx-2">/</span> 
          FULL-STACK
        </div>

        {/* Specialty Heading with Inline Icons */}
        <h2 className="text-[2.2rem] font-bold tracking-[1px] leading-[1.4] text-white uppercase font-sans">
          I SPECIALIZE IN{" "}
          <span className="inline-flex items-center align-middle gap-1.5 mx-1">
            <TbBrandReact className="text-[#00d8ff] text-[2.8rem]" />
            <TbBrandTypescript className="text-[#3178c6] text-[2.8rem]" />
            <TbBrandNodejs className="text-[#339933] text-[2.8rem]" />
          </span>{" "}
          <span className="font-extrabold text-white">MODERN WEB APPLICATIONS</span>,{" "}
          <span className="font-extrabold text-white">AI-POWERED PRODUCTS</span>, AND{" "}
          <span className="font-light text-white/60">SCALABLE</span>{" "}
          <span className="font-extrabold text-white">DIGITAL EXPERIENCES</span>.
        </h2>
      </div>
    </div>
  );
};

export default Specialty;
