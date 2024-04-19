import { Button, Loader, TextInput } from "@mantine/core";
import Menu from "../components/Menu";
import { useEffect, useRef, useState } from "react";
import { API } from "../utils/makeRequest";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/context";

function Settings() {
  const { user } = useAuthContext();

  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [fullName, setFullName] = useState(user.fullName);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { logOutUser } = useAuthContext();
  const handleLogout = async () => {
    const res = await API.post("/auth/logout", {});
    if (res.status === 200) {
      logOutUser();
      navigate("/");
    }
  };

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
          setProfilePic(result?.info?.secure_url);
        }
      }
    );
  }, []);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, []);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await API.put("/users", {
        profilePic,
        fullName,
        email,
        username,
      });
      if (res.data || res.status === 201) {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto p-4 my-1 w-full">
      <div className="flex items-start gap-5">
        <div className="flex-3 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium">Update your account</h1>
            <Button variant="light" color="#22c55e" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <form
            className="flex flex-col gap-4 sm:w-[500px] w-full"
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 w-max">
                <span>Your profile picture</span>
                <img
                  src={
                    profilePic ||
                    "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.avif"
                  }
                  alt=""
                  className="w-[70px] h-[70px] rounded-full object-cover mx-auto"
                />
              </div>
              <div className="w-max">
                <Button
                  variant="light"
                  color="#22c55e"
                  onClick={() => widgetRef.current?.open()}
                >
                  <span className="text-sm">Upload photo</span>
                </Button>
              </div>
            </div>
            <TextInput
              label="Full Name"
              placeholder="your_fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextInput
              label="Username"
              placeholder="your_username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
              label="Email address"
              placeholder="your_email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="w-max">
              <Button
                variant="filled"
                color="#22c55e"
                type="submit"
                disabled={loading}
                w={200}
              >
                {loading ? (
                  <Loader color="#22c55e" size={"sm"} />
                ) : (
                  "Update your profile"
                )}
              </Button>
            </div>
          </form>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Settings;
