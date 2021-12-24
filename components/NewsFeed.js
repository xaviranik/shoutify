import Stories from "./Stories";

const NewsFeed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3">
      <Stories />
    </main>
  );
};

export default NewsFeed;
