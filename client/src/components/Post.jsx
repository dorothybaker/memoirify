import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function Post({ post }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 shadow-sm">
      {post.image && (
        <div className="md:h-[270px] sm:h-[260px] h-[250px]">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 sm:px-2 px-1 py-3">
        <p className="text-sm flex justify-between">
          <span className="uppercase text-gray-700">{post.category}</span>{" "}
          <span className="text-gray-500">
            {moment(post.createdAt).format("Do MMMM , yyyy")}
          </span>
        </p>
        <h3
          className="font-medium text-lg leading-tight line-clamp-2 cursor-pointer"
          onClick={() => navigate(`/post/${post._id}`)}
        >
          {post.title}
        </h3>
        <p
          className={`text-gray-600 ${
            post.image ? "text-sm line-clamp-3" : "line-clamp-6"
          }`}
        >
          {post.description}
        </p>
        <button
          className="flex gap-1 w-max text-sm items-center text-primary"
          onClick={() => navigate(`/post/${post._id}`)}
        >
          <span>Read More</span>
          <IoArrowForwardOutline size={12} className="mt-0.5" />
        </button>
      </div>
    </div>
  );
}

export default Post;
