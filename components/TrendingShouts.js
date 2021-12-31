import faker from "faker";
import { useEffect, useState } from "react";
import TrendingShout from "./TrendingShout";

const TrendingShouts = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    let users = [...Array(4)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setProfiles(users);
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between">
        <span className="text-slate-900 text-base md:text-md font-thin capitalize">
          Trending Shouts
        </span>
        <span className="text-slate-300 text-sm md:text-md cursor-pointer hover:underline">
          See all
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {profiles.map((profile) => (
          <TrendingShout
            key={profile.id}
            profile={{
              id: profile.id,
              username: faker.name.findName(),
              cover: `https://picsum.photos/seed/${faker.datatype.number()}/200/300`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingShouts;
