import Logo from "./Logo";
import {
  SearchIcon,
  HomeIcon,
  MenuAlt1Icon,
  UserIcon,
  PlusCircleIcon,
  HeartIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl flex justify-between items-center p-5 xl:px-0 lg:mx-auto">
        <Logo />

        <div className="w-full md:max-w-md mx-6">
          <div className="relative rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-slate-400" />
            </div>
            <input
              className="bg-slate-50 block w-full pl-10 rounded-md border-2 border-slate-300 placeholder-slate-400 focus:ring-slate-900 focus:border-slate-900 xs:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center">
          <HomeIcon className="nav-pill" />
          <UserIcon className="nav-pill" />
          <div className="relative nav-pill mx-0">
            <HeartIcon className="nav-pill" />
            <span className="absolute top-0 right-1 text-sm bg-red-400 rounded-full w-3 h-3"></span>
          </div>
          <PlusCircleIcon className="nav-pill" />

          <MenuAlt1Icon className="nav-pill flex md:hidden cursor-pointer" />

          <span className="md:flex items-center hidden cursor-pointer">
            <Avatar
              src={"https://i.pravatar.cc/150?img=52"}
              customClass={"md:ml-10"}
            />
            <ChevronDownIcon className="nav-pill text-slate-400 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
