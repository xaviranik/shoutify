import Avatar from "./Avatar";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const Shouts = () => {
  return (
    <div className="mt-4">
      <div className="bg-white shadow-sm rounded-md mt-6 p-5 md:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar
              src="https://i.pravatar.cc/150?img=12"
              customClass={"h-12"}
            />

            <div className="flex flex-col text-sm ml-4">
              <span className="text-slate-900 font-semibold cursor-pointer">
                Steve Rogers
              </span>
              <span className="text-slate-400 text-xs mt-1">
                Dresden, Germany
              </span>
            </div>
          </div>

          <DotsHorizontalIcon className="text-slate-400 cursor-pointer h-6" />
        </div>

        <div className="relative w-full h-96 mt-6">
          <Image
            src={
              "https://images.unsplash.com/photo-1534313314376-a72289b6181e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            }
            alt="test"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <HeartIcon
                className="h-6 md:h-7 mr-3 cursor-pointer
             text-slate-300 transition duration-75 ease-out hover:text-red-500"
              />

              <ChatIcon
                className="h-6 md:h-7 mr-3 cursor-pointer
             text-slate-300 transition duration-75 ease-out hover:text-slate-900"
              />

              <ShareIcon
                className="h-6 md:h-7 mr-3 cursor-pointer
             text-slate-300 transition duration-75 ease-out hover:text-slate-900"
              />
            </div>

            <BookmarkIcon
              className="h-6 md:h-7 cursor-pointer
             text-slate-300 transition duration-75 ease-out hover:text-slate-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shouts;
