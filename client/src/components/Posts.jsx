import Post from "./Post";

function Posts({ posts }) {
  return (
    <div className="flex-4 flex flex-col gap-3">
      <h2 className="font-medium uppercase">Recent Posts</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-3 gap-4">
        {posts?.slice(0, 8)?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
