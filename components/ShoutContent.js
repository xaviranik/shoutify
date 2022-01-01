import Image from "next/image";
import { formatDateForHuman } from "../utils";

const ShoutContent = ({ shout }) => {
  return (
    <div className="bg-white shadow-sm rounded-md p-5 md:p-7">
      <div className="relative w-full h-96">
        <Image
          src={shout.featuredImage.url}
          alt={shout.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md cursor-pointer"
        />
      </div>
      <h4 className="font-bold text-lg mt-6 cursor-pointer line-clamp-2">
        {shout.title}
      </h4>
      <div className="flex flex-col text-sm">
        <span className="text-slate-400 text-xs font-thin mt-2 truncate w-48 md:w-full">
          {formatDateForHuman(shout.createdAt)} &#8226; {shout.location}
        </span>
      </div>
      <div className="mt-4 text-slate-600 text-base leading-relaxed font-thin ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        dignissimos fugiat laudantium vero, similique culpa, vel quos neque ab
        nulla tenetur officia cumque magni placeat cupiditate facere officiis
        quae corrupti laboriosam quaerat quam minus hic non? Obcaecati
        voluptates odio omnis minima sit voluptate quae blanditiis tempora
        cumque, fuga natus architecto nisi quidem atque minus, animi
        consectetur. Debitis velit minima vero aliquam non, nulla corrupti! Quos
        velit iure reprehenderit amet corporis eos modi mollitia labore, dolorem
        suscipit eius eum possimus cumque ipsam beatae dignissimos quod quia.
        Odit deserunt quae quos provident unde quaerat recusandae assumenda
        dolore architecto quis? Accusamus aut dolorem mollitia consequuntur quos
        tenetur id officia aperiam quasi delectus culpa, nostrum labore
        voluptatibus ipsa explicabo at beatae, dolores deleniti quidem nulla et
        maiores quas. Distinctio tempora laborum eius incidunt totam quis quos
        ducimus in exercitationem delectus fuga recusandae error, fugiat
        expedita repellendus alias consequuntur veritatis omnis eum temporibus.
        Rerum praesentium laborum necessitatibus sequi, consectetur, veniam
        ipsam molestias harum cumque magni nostrum quis velit, officiis
        provident ducimus dolor! Culpa facere exercitationem nulla molestiae
        fugiat possimus nesciunt, doloremque autem laudantium voluptate unde
        velit recusandae vel eveniet sunt a quisquam ea veritatis impedit illum
        distinctio dolores expedita! Hic dicta possimus sit cumque quis!
        <p className="mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          dignissimos fugiat laudantium vero, similique culpa, vel quos neque ab
          nulla tenetur officia cumque magni placeat cupiditate facere officiis
          quae corrupti laboriosam quaerat quam minus hic non? Obcaecati
          voluptates odio omnis minima sit voluptate quae blanditiis tempora
          cumque, fuga natus architecto nisi quidem atque minus, animi
          consectetur. Debitis velit minima vero aliquam non, nulla corrupti!
          Quos velit iure reprehenderit amet corporis eos modi mollitia labore,
          dolorem suscipit eius eum possimus cumque ipsam beatae dignissimos
          quod quia. Odit deserunt quae quos provident unde quaerat recusandae
          assumenda dolore architecto quis? Accusamus aut dolorem mollitia
          consequuntur quos tenetur id officia aperiam quasi delectus culpa,
          nostrum labore voluptatibus ipsa explicabo at beatae, dolores deleniti
          quidem nulla et maiores quas. Distinctio tempora laborum eius incidunt
          totam quis quos ducimus in exercitationem delectus fuga recusandae
          error, fugiat expedita repellendus alias consequuntur veritatis omnis
          eum temporibus. Rerum praesentium laborum necessitatibus sequi,
          consectetur, veniam ipsam molestias harum cumque magni nostrum quis
          velit, officiis provident ducimus dolor! Culpa facere exercitationem
          nulla molestiae fugiat possimus nesciunt, doloremque autem laudantium
          voluptate unde velit recusandae vel eveniet sunt a quisquam ea
          veritatis impedit illum distinctio dolores expedita! Hic dicta
          possimus sit cumque quis!
        </p>
      </div>
    </div>
  );
};

export default ShoutContent;
