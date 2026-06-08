
import meImg from '../assets/me.jpeg';

const Profile = () => {
  return (
    <div className="absolute bottom-[30px] left-[30px] flex items-center gap-[15px]">
      <div className="w-[45px] h-[45px] rounded-full border border-white/20 overflow-hidden bg-white/5">
        <img src={meImg} alt="Rushikesh" className="w-full h-full object-cover" />
      </div>
      <div className="text-[0.85rem] text-white/70 max-w-[150px] leading-[1.4]">
        just a full stack guy..
        <br />
        code and chill
      </div>
    </div>
  );
};

export default Profile;
