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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profiles.map((profile) => (
          <TrendingShout
            key={profile.id}
            profile={{ id: profile.id, username: profile.username }}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingShouts;
