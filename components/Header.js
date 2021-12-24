import Logo from "./Logo";
import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
  PlusCircleIcon,
  HeartIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl py-5 px-3 md:px-0 lg:mx-auto">
        <Logo />

        <div className="max-w-lg mx-6">
          <div className="relative rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 rounded-md border-2 border-gray-300 placeholder-gray-400 focus:ring-slate-900 focus:border-slate-900 xs:text-sm"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center">
          <HomeIcon className="nav-pill" />
          <UserIcon className="nav-pill" />
          <div className="relative nav-pill mx-0">
            <HeartIcon className="nav-pill" />
            <span className="absolute top-1 right-2 text-sm bg-red-400 rounded-full w-3 h-3"></span>
          </div>
          <PlusCircleIcon className="nav-pill" />

          <MenuIcon className="nav-pill flex md:hidden cursor-pointer" />

          <span className="md:flex items-center hidden cursor-pointer">
            <Avatar
              src={"https://i.pravatar.cc/150?img=52"}
              customClass={"md:ml-10"}
            />
            <ChevronDownIcon className="nav-pill text-gray-400 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
