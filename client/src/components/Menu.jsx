import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

function Menu() {
  return (
    <div className="flex-1 lg:flex hidden flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h2 className="uppercase border-t border-b py-1 border-gray-300 text-sm text-center">
          about me
        </h2>
        <div>
          <img
            src="https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="h-[200px] w-full object-cover"
          />
        </div>
        <p className="text-gray-600 text-sm line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          commodi possimus odio expedita nulla corporis exercitationem officiis
          sapiente illo aut est maxime optio omnis repellat eos quo, ab
          dignissimos cum!
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="uppercase border-t border-b py-1 border-gray-300 text-sm text-center">
          categories
        </h2>
        <ul className="grid grid-cols-3 gap-3 px-5">
          <li className="text-gray-700 cursor-pointer text-[15px]">
            Lifestyle
          </li>
          <li className="text-gray-700 cursor-pointer text-[15px]">Culture</li>
          <li className="text-gray-700 cursor-pointer text-[15px]">Food</li>
          <li className="text-gray-700 cursor-pointer text-[15px]">Nature</li>
          <li className="text-gray-700 cursor-pointer text-[15px]">Health</li>
          <li className="text-gray-700 cursor-pointer text-[15px]">
            Technology
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="uppercase border-t border-b py-1 border-gray-300 text-sm text-center">
          connect with me
        </h2>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-primary/30 w-7 h-7 flex items-center justify-center rounded-full text-gray-600">
            <FaFacebook size={17} />
          </button>
          <button className="bg-primary/30 w-7 h-7 flex items-center justify-center rounded-full text-gray-600">
            <FaLinkedin />
          </button>
          <button className="bg-primary/30 w-7 h-7 flex items-center justify-center rounded-full text-gray-600">
            <FaTwitter />
          </button>
          <button className="bg-primary/30 w-7 h-7 flex items-center justify-center rounded-full text-gray-600">
            <FaPinterest />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
