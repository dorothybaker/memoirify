import { IoGridOutline, IoNotificationsOutline } from "react-icons/io5";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/context";

function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);

  const { user } = useAuthContext();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="h-[50px] w-full shadow-sm sticky top-0 bg-white z-10">
      <div className="h-full w-full flex items-center justify-between max-w-7xl mx-auto px-4">
        <div className="flex-1">
          <span className="text-primary text-xl font-medium cursor-pointer">
            <Link to="/">Memoirify.</Link>
          </span>
        </div>
        <div className="flex-2 sm:flex hidden items-center justify-center">
          <ul className="flex items-center lg:gap-7 gap-3">
            <li
              className={`hover:text-primary uppercase cursor-pointer ${
                pathname === "/" && "text-primary"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li className={`hover:text-primary uppercase cursor-pointer`}>
              Contact
            </li>
            <li
              className={`hover:text-primary uppercase cursor-pointer ${
                pathname === "/posts" && "text-primary"
              }`}
            >
              <Link to="/posts">posts</Link>
            </li>
            <li
              className={`hover:text-primary uppercase cursor-pointer ${
                pathname === "/write" && "text-primary"
              }`}
            >
              <Link to="/write">Write</Link>
            </li>
            <li className={`hover:text-primary uppercase cursor-pointer `}>
              About
            </li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-end gap-3">
          {user ? (
            <IoNotificationsOutline size={20} />
          ) : (
            <Button color="#22c55e" variant="subtle">
              <Link to="/login">Login</Link>
            </Button>
          )}
          {user && (
            <div
              className="cursor-pointer"
              onClick={() => navigate("/settings")}
            >
              <img
                src={
                  user.profilePic ||
                  "https://cdn.vectorstock.com/i/500p/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.avif"
                }
                alt=""
                className="w-[35px] h-[35px] object-cover rounded-full"
              />
            </div>
          )}
          <IoGridOutline size={20} onClick={open} className="block sm:hidden" />
        </div>
        <Drawer opened={opened} onClose={close} title="Memoirify">
          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-3">
              <li
                className={`hover:text-primary uppercase cursor-pointer ${
                  pathname === "/" && "text-primary"
                }`}
              >
                <Link to="/">Home</Link>
              </li>
              <li className={`hover:text-primary uppercase cursor-pointer`}>
                Contact
              </li>
              <li
                className={`hover:text-primary uppercase cursor-pointer ${
                  pathname === "/posts" && "text-primary"
                }`}
              >
                <Link to="/posts">posts</Link>
              </li>
              <li
                className={`hover:text-primary uppercase cursor-pointer ${
                  pathname === "/write" && "text-primary"
                }`}
              >
                <Link to="/write">Write</Link>
              </li>
              <li className={`hover:text-primary uppercase cursor-pointer `}>
                About
              </li>
            </ul>
            <div className="flex flex-col gap-1">
              <span className="text-xl font-medium text-[#121212]">
                <span className="text-primary">Memoirify</span>, connect with a
                community of like-minded individuals
              </span>
              <p className="text-[15px] text-gray-500">
                Relive the moments that shaped your story. Memoirify is your
                digital diary for capturing memories, moments, and milestones.
                Share your unique experiences and create a lasting legacy for
                generations to come. Start your storytelling journey today on
                Memoirify.
              </p>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
