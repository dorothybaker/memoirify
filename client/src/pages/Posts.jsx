import { useEffect, useState } from "react";
import AllPosts from "../components/AllPosts";
import { API } from "../utils/makeRequest";
import PostSkeleton from "../utils/posts.skeleton";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await API.get("/posts");

        setPosts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto w-full p-4 my-2">
      {loading ? <PostSkeleton /> : <AllPosts posts={posts} />}
    </div>
  );
}

export default Posts;
