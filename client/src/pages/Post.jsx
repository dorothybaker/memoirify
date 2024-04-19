import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import SinglePost from "../components/SinglePost";
import { useParams } from "react-router-dom";
import { API } from "../utils/makeRequest";

function Post() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await API.get(`/posts/${id}`);

        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="max-w-[1300px] mx-auto w-full p-4 flex items-start gap-5 my-3">
      <SinglePost data={data} loading={loading} />
      <Menu />
    </div>
  );
}

export default Post;
