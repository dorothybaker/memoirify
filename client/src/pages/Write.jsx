import { Button, Loader, Select, TextInput } from "@mantine/core";
import Menu from "../components/Menu";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/makeRequest";

function Write() {
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "duihsu76h",
        uploadPreset: "bnbv67vs",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImage(result?.info?.secure_url);
        }
      }
    );
  }, []);

  const navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await API.post("/posts", {
        image,
        title,
        description,
        category,
      });
      if (res.status === 201) {
        navigate("/");
        setImage("");
        setTitle("");
        setDescription("");
        setCategory("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto w-full p-4 flex gap-5">
      <form
        className="flex-3 flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex gap-3 sm:items-center sm:flex-row flex-col">
          {!image ? (
            <div className="flex-1">
              <div className="sm:h-[300px] h-[270px] w-full border-2 border-dashed flex items-center justify-center text-gray-500">
                <span>Image Preview Here</span>
              </div>
            </div>
          ) : (
            <div className="flex-1">
              <img
                src={image}
                alt=""
                className="sm:h-[300px] h-[270px] w-full object-cover"
              />
            </div>
          )}
          <div className="flex-1 flex flex-col gap-4">
            <TextInput
              label="Your blog title"
              placeholder="Place your title here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <Select
              label="Your blog category"
              placeholder="Select a category"
              data={[
                "Food",
                "Health",
                "Nature",
                "History",
                "Culture",
                "Lifestyle",
                "Technology",
              ]}
              value={category}
              onChange={setCategory}
            />

            <div className="w-max">
              <Button
                variant="light"
                color="rgba(34, 197, 94, 0.89)"
                w={200}
                onClick={() => widgetRef.current?.open()}
              >
                {image ? "Image Uploaded" : "Upload Image"}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-sm">Your content here</span>
            <textarea
              style={{ resize: "none" }}
              className="min-h-[350px] border border-gray-300 w-full p-3 rounded-sm outline-none"
              placeholder="Tell your story..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <Button
              variant="filled"
              color="#22c55e"
              size="md"
              w={200}
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader color="#22c55e" size={"sm"} /> : "Publish"}
            </Button>
          </div>
        </div>
      </form>
      <Menu />
    </div>
  );
}

export default Write;
