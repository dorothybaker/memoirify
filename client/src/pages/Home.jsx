import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Posts from "../components/Posts";

import { API } from "../utils/makeRequest";
import PostSkeleton from "../utils/posts.skeleton";

function Home() {
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
    <div>
      <Hero />
      <div className="max-w-[1300px] mx-auto w-full p-4 flex items-start gap-4">
        {loading ? <PostSkeleton /> : <Posts posts={posts} />}
      </div>
    </div>
  );
}

export default Home;
