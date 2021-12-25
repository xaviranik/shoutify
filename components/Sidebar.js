import Avatar from "./Avatar";
import { UserIcon, UserAddIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-sm rounded-md my-4 p-5 md:p-7 md:my-0 md:mr-6">
      <div className="flex items-center justify-between">
        <span className="text-slate-900 text-base md:text-lg font-semibold capitalize">
          Suggested For You
        </span>
        <span className="text-slate-300 text-sm md:text-base cursor-pointer hover:underline">
          See all
        </span>
      </div>

      <div className="grid grid-rows-4 gap-4 mt-4 md:mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar src="https://i.pravatar.cc/150?img=61" size={12} />

            <div className="flex flex-col text-sm ml-4">
              <span className="text-slate-900 font-semibold cursor-pointer">
                Jon Snow
              </span>
              <span className="text-slate-400 text-xs mt-1 font-thin">
                Active recently
              </span>
            </div>
          </div>

          <div className="bg-slate-100 p-3 rounded-full cursor-pointer">
            <UserIcon className="text-slate-300 h-5" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar src="https://i.pravatar.cc/150?img=19" size={12} />

            <div className="flex flex-col text-sm ml-4">
              <span className="text-slate-900 font-semibold cursor-pointer">
                Cersei Lannister
              </span>
              <span className="text-slate-400 text-xs mt-1 font-thin">
                Suggested for you
              </span>
            </div>
          </div>

          <div className="bg-slate-900 p-3 rounded-full cursor-pointer">
            <UserAddIcon className="text-white h-5" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar src="https://i.pravatar.cc/150?img=65" size={12} />

            <div className="flex flex-col text-sm ml-4">
              <span className="text-slate-900 font-semibold cursor-pointer">
                Tyrion Lannister
              </span>
              <span className="text-slate-400 text-xs mt-1 font-thin">
                Suggested for you
              </span>
            </div>
          </div>

          <div className="bg-slate-900 p-3 rounded-full cursor-pointer">
            <UserAddIcon className="text-white h-5" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar src="https://i.pravatar.cc/150?img=13" size={12} />

            <div className="flex flex-col text-sm ml-4">
              <span className="text-slate-900 font-semibold cursor-pointer">
                Tony Stark
              </span>
              <span className="text-slate-400 text-xs mt-1 font-thin">
                Suggested for you
              </span>
            </div>
          </div>

          <div className="bg-slate-900 p-3 rounded-full cursor-pointer">
            <UserAddIcon className="text-white h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
