import { useState } from "react";
import Post from "./Post";

function AllPosts({ posts }) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-medium uppercase">All Memoirify's posts</h2>
        <div>
          <input
            type="text"
            placeholder="Search posts by category or by title."
            className="px-3 py-2 w-full outline-none bg-gray-200 rounded-md placeholder-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-3 gap-4 min-h-[200px]">
        {posts
          .filter(
            (post) =>
              post.title?.toLowerCase().includes(search.toLowerCase()) ||
              post.category?.toLowerCase().includes(search.toLowerCase())
          )
          ?.map((post) => (
            <Post key={post._id} post={post} />
          ))}
      </div>
    </div>
  );
}

export default AllPosts;
