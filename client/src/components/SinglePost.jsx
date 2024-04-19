import { IoReaderOutline, IoTrashOutline } from "react-icons/io5";
import moment from "moment";
import SingleSkeleton from "../utils/single.skeleton";
import { useAuthContext } from "../context/context";
import { API } from "../utils/makeRequest";
import { useNavigate } from "react-router-dom";

function SinglePost({ data, loading }) {
  const { user } = useAuthContext();

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      const res = await API.delete(`/posts/${data._id}`);

      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dataWithLines = data?.description.split(".").map((s, i) => {
    return (
      <span key={i} className="block">
        {s.trim()}
        {s !== "" && "."}
      </span>
    );
  });

  return (
    <>
      {loading ? (
        <SingleSkeleton />
      ) : (
        <div className="flex-3 flex flex-col gap-3">
          {data?.image && (
            <div>
              <img
                src={data?.image}
                alt=""
                className="lg:h-[410px] sm:h-[380px] h-[270px] w-full object-cover rounded-lg"
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src={
                  data?.user.profilePic ||
                  "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.avif"
                }
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="flex flex-col">
                <span>{data?.user.fullName}</span>
                <span className="text-sm text-gray-500">
                  @{data?.user.username}
                </span>
              </div>
            </div>
            {user && user._id === data?.user._id && (
              <div className="flex items-center gap-2">
                <IoReaderOutline size={22} color="green" cursor={"pointer"} />
                <IoTrashOutline
                  size={22}
                  color="red"
                  cursor={"pointer"}
                  onClick={handleDelete}
                />
              </div>
            )}
          </div>
          <p className="flex items-center gap-1">
            Posted on:{" "}
            <span className="text-gray-600">
              {moment(data?.createdAt).format("Do MMMM , yyyy")}
            </span>
          </p>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-xl">{data?.title}</h1>
            <p className="text-gray-700 first-letter:ml-4 first-letter:text-2xl leading-[1.8rem]">
              {dataWithLines}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SinglePost;
