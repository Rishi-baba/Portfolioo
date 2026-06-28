const TechnicalSkills = () => {
  const skills = [
    { category: "Languages", items: "JavaScript (ES6+), TypeScript, Python, C, Java" },
    { category: "Frontend", items: "React.js, HTML5, CSS3, Tailwind CSS, GSAP, Responsive Web Design, three js" },
    { category: "Backend", items: "Node.js, Express.js, REST APIs, JWT Authentication" },
    { category: "Databases & Cache", items: "MongoDB, Redis" },
    { category: "AI & Automation", items: "OpenAI API Integration, Prompt Engineering, n8n Workflow Automation, Git, GitHub, Postman" },
    { category: "Tools & Platforms", items: "VS Code, Vercel, Render" },
    { category: "Soft Skills", items: "Problem Solving, Communication, Team Collaboration, Fast Learning, Product Thinking, Leadership" }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-[40px] mt-50 select-none bg-transparent">
      <div className="max-w-[950px] w-full flex flex-col gap-[20px] pb-[18vw]">
        
        {/* Title */}
        <div className="flex flex-col items-start gap-[5px]">
          <h2 className="text-[1.8rem] font-bold tracking-[1px] leading-[1.2] text-white uppercase font-sans">
            <span className="font-extrabold text-white">TECHNICAL SKILLS</span>
          </h2>
          <div className="w-full h-[1px] bg-white/20 mt-1"></div>
        </div>

        {/* Skills List */}
        <div className="flex flex-col w-full">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row py-[12px] border-b border-white/10 gap-2 md:gap-10 items-start hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="w-full md:w-[250px] shrink-0">
                <span className="text-[11px] font-mono tracking-[2px] text-white/60 uppercase font-bold">
                  {skill.category}
                </span>
              </div>
              <div className="flex-1">
                <span className="text-[13px] font-sans tracking-[0.5px] text-white/90 leading-[1.4]">
                  {skill.items}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TechnicalSkills;
