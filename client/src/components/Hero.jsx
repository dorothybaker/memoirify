function Hero() {
  return (
    <div className="my-5 w-full max-w-7xl mx-auto flex gap-3 px-4 flex-col">
      <div>
        <div className="flex flex-col gap-2 text-center">
          <span className="sm:text-3xl text-2xl text-[#121212]">
            <span className="text-primary font-medium">Memoirify</span>, connect
            with a community of like-minded individuals!
          </span>
          <span className="text-lg">
            Where your memories and stories matter!
          </span>
          <span className="text-gray-600  lg:w-[60%] mx-auto">
            Relive the moments that shaped your story. Memoirify is your digital
            diary for capturing memories, moments, and milestones. Share your
            unique experiences and create a lasting legacy for generations to
            come. Start your storytelling journey today on Memoirify.
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl">
          Spotlight of <span className="text-primary">Memoirify</span>!
        </h1>
        <div className="flex items-center gap-5 md:flex-row flex-col">
          <div className="lg:flex-2 flex-1">
            <img
              src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?b=1&s=612x612&w=0&k=20&c=Xn8GRsOPbIU6dXFusKB8R8UzWfSkbxgHjV3cRnGtMi8="
              alt=""
              className="sm:h-fit h-[260px] object-cover w-full"
            />
          </div>
          <div className="lg:flex-3 flex-1 flex flex-col lg:gap-2 md:gap-1 gap-2">
            <p className="flex gap-2 items-centers text-sm">
              <span className="uppercase text-gray-700 font-medium">
                lifestyle
              </span>{" "}
              &ndash; <span className="text-gray-500">15th October, 2023</span>
            </p>
            <h2 className="text-xl">
              The Modern Nest: A Guide to Stylish Home Interior Decor.
            </h2>
            <p className=" text-gray-700 line-clamp-6">
              Interior design is the art of transforming a space into a
              functional and aesthetically pleasing environment. Whether you're
              looking to renovate your home or redesign a commercial space, the
              right design choices can completely change the look and feel of a
              room. From choosing the perfect color palette to selecting
              furniture that fits the scale of the room, interior design
              involves a careful balance of elements to create a cohesive and
              inviting space. Lighting, textiles, and accessories all play a
              role in the overall design scheme, adding depth and personality to
              the room. Whether you prefer a modern, minimalist style or a more
              traditional, cozy look, interior design allows you to express your
              personal taste and create a space that reflects your unique
              personality. With the right design elements in place, you can
              transform any space into a beautiful and functional environment
              that you'll love coming home to.
            </p>
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="flex flex-col text-gray-800 text-[15px]">
                  Christina Racheal
                </span>
                <span className="text-sm text-gray-500">@chris_cheal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
