import Avatar from "./Avatar";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { UserAddIcon } from "@heroicons/react/outline";

export const ProfileCard = ({ shout }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Avatar src={shout.author.photo.url} customClass={"h-24 w-24"} />

        <span className="text-slate-900 font-semibold mt-4 flex items-center">
          {shout.author.name}{" "}
          <BadgeCheckIcon className="ml-1 w-5 h-5 text-slate-300" />
        </span>

        <span className="text-slate-400 text-sm font-thin mt-2">
          {shout.author.bio}
        </span>

        <div className="grid grid-cols-3 gap-2 w-full mt-6">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xs font-thin text-slate-300">Shouts</span>
            <span className="font-semibold text-slate-900 mt-1">3000</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xs font-thin text-slate-300">Followers</span>
            <span className="font-semibold text-slate-900 mt-1">1.1B</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xs font-thin text-slate-300">Following</span>
            <span className="font-semibold text-slate-900 mt-1">0</span>
          </div>
        </div>

        <button className="bg-slate-900 text-white px-3 py-2 rounded-md w-full mt-6 flex justify-center">
          <div className="flex items-center">
            <span className="mr-2">Follow</span>
            <UserAddIcon className="text-white h-4" />
          </div>
        </button>
      </div>
    </div>
  );
};
