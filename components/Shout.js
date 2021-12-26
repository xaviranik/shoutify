import Avatar from "./Avatar";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { formatDateForHuman } from "../utils";

const Shout = ({ shout }) => {
  return (
    <div>
      <div className="bg-white shadow-sm rounded-md mt-6 p-5 md:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar src={shout.author.photo.url} customClass={"h-12 w-12"} />

            <div className="flex flex-col text-sm ml-4">
              <span className="text-slate-900 font-semibold text-base cursor-pointer">
                {shout.author.name}
              </span>
              <span className="text-slate-400 text-xs font-thin mt-2 truncate w-48 md:w-full">
                {formatDateForHuman(shout.createdAt)} &#8226; {shout.location}
              </span>
            </div>
          </div>

          <DotsHorizontalIcon className="text-slate-400 cursor-pointer h-6" />
        </div>

        <Link href={`/shout/${shout.slug}`}>
          <h4 className="font-bold text-lg mt-8 cursor-pointer line-clamp-2">
            {shout.title}
          </h4>
        </Link>

        <div className="mt-4 text-slate-600 text-sm leading-relaxed font-thin line-clamp-2">
          {shout.except}
        </div>

        <Link href={`/shout/${shout.slug}`}>
          <div className="relative w-full h-96 mt-6">
            <Image
              src={shout.featuredImage.url}
              alt="test"
              layout="fill"
              objectFit="cover"
              className="rounded-md cursor-pointer"
            />
          </div>
        </Link>

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

export default Shout;
