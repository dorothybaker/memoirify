import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-4 bg-[#121212] text-gray-300">
      <div className="max-w-[1300px] mx-auto w-full p-4 flex gap-5 lg:flex-row flex-col">
        <div className="flex flex-col gap-3 flex-1">
          <h1 className="text-xl text-primary">Memoirify</h1>
          <div className="flex flex-col gap-2">
            <span>Subscribe to our newsletter and updates.</span>
            <input
              type="text"
              placeholder="Email address"
              className="p-2 w-full bg-gray-200 rounded-sm outline-none placeholder-gray-400 text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Connect with us</span>
            <div className="flex items-center gap-4">
              <button className="bg-primary/30 w-8 h-8 flex items-center justify-center rounded-full">
                <FaFacebook size={18} />
              </button>
              <button className="bg-primary/30 w-8 h-8 flex items-center justify-center rounded-full">
                <FaLinkedin size={18} />
              </button>
              <button className="bg-primary/30 w-8 h-8 flex items-center justify-center rounded-full">
                <FaTwitter size={18} />
              </button>
              <button className="bg-primary/30 w-8 h-8 flex items-center justify-center rounded-full">
                <FaPinterest size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-3 flex-wrap whitespace-nowrap">
          <div className="flex flex-col gap-2 flex-1">
            <h3>About Us</h3>
            <ul className="flex flex-col text-sm font-light text-gray-400 gap-1">
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Jobs</li>
              <li>Address</li>
              <li>Teams</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3>Support</h3>
            <ul className="flex flex-col text-sm font-light text-gray-400 gap-1">
              <li>FAQs</li>
              <li>Terms of Use</li>
              <li>Funding</li>
              <li>Donations</li>
              <li>Conferences</li>
              <li>Dev Team</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3>My Account</h3>
            <ul className="flex flex-col text-sm font-light text-gray-400 gap-1">
              <li>Register</li>
              <li>Login</li>
              <li>Logout</li>
              <li>Blocking</li>
              <li>Update</li>
              <li>Manage</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h3>Useful Links</h3>
            <ul className="flex flex-col text-sm font-light text-gray-400 gap-1">
              <li>Write</li>
              <li>Connect</li>
              <li>About you</li>
              <li>Regulations</li>
              <li>Our App</li>
              <li>Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
