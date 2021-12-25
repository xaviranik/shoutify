import Avatar from "./Avatar";

const TrendingShout = ({ profile }) => {
  return (
    <div className="flex items-end relative h-60 cursor-pointer">
      <img
        loading="lazy"
        className="absolute top-0 object-cover w-full h-full rounded-md transition-shadow ease-out"
        src={profile.cover}
        alt="treding shout"
      />
      <div className="absolute top-0 left-0 rounded-lg w-full h-full bg-black opacity-60 hover:shadow-lg hover:opacity-30 transition-all delay-75 ease-out"></div>
      <div className="absolute top-6 left-4">
        <Avatar
          src={`https://i.pravatar.cc/150?img=${profile.id}`}
          customClass="mb-2 border-2 border-white"
        />
      </div>
      <span className="text-white text-sm font-medium z-10 px-4 pb-5 truncate">
        {profile.username}
      </span>
    </div>
  );
};

export default TrendingShout;
