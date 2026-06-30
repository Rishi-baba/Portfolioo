
const Navbar = () => {
  const linkClass = "cursor-pointer relative hover:opacity-70 transition-opacity duration-200 after:content-[''] after:absolute after:top-[-4px] after:right-[-8px] after:w-[4px] after:h-[4px] after:border-t after:border-r after:border-white/70";

  return (
    <header className="absolute top-0 left-[40px] right-[40px] h-[80px] flex items-center justify-between z-10 px-[30px] pointer-events-none">
      <div className="flex items-center gap-[15px] pointer-events-auto">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="opacity-90">
           <rect x="2" y="8" width="4" height="8" rx="1" />
           <rect x="8" y="4" width="4" height="16" rx="1" />
           <rect x="14" y="10" width="4" height="4" rx="1" />
           <rect x="20" y="6" width="4" height="12" rx="1" />
        </svg>
        <span className="font-bold text-[0.9rem] tracking-[2px] uppercase">Rushi RB</span>
        <div className="ml-[10px] flex items-center">
          <svg width="30" height="20" viewBox="0 0 30 20" fill="rgba(255,255,255,0.2)">
            <rect x="2" y="8" width="2" height="4" />
            <rect x="6" y="5" width="2" height="10" />
            <rect x="10" y="2" width="2" height="16" />
            <rect x="14" y="6" width="2" height="8" />
            <rect x="18" y="4" width="2" height="12" />
            <rect x="22" y="7" width="2" height="6" />
            <rect x="26" y="9" width="2" height="2" />
          </svg>
        </div>
      </div>
      <nav className="flex gap-[40px] font-bold text-[0.75rem] tracking-[1.5px] pointer-events-auto">
        <a 
          href="https://drive.google.com/file/d/1FO6OrZC_889g6daKZpaKZ8yaEawMK_F4/view" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${linkClass} text-white no-underline`}
        >
          CV
        </a>
        <a 
          href="https://github.com/Rishi-baba" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${linkClass} text-white no-underline`}
        >
          GITHUB
        </a>
        <a 
          href="https://www.linkedin.com/in/rishi-bankar-b7279a323" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${linkClass} text-white no-underline`}
        >
          LINKEDIN
        </a>
        <a 
          href="mailto:rishibankar16@gmail.com" 
          className={`${linkClass} text-white no-underline`}
        >
          MAIL
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
