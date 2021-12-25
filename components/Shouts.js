import Shout from "./Shout";

const Shouts = ({ shouts }) => {
  console.log(shouts);
  return (
    <div className="mt-4">
      {shouts.map((shout) => (
        <Shout shout={shout.node} key={shout.node.id} />
      ))}
    </div>
  );
};

export default Shouts;
