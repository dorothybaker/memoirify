import React from "react";

function PostSkeleton() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-3 md:gap-3 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
        <div key={id} className="flex flex-col gap-2">
          <div className="h-[250px] bg-gray-200 rounded-md" />
          <div className="h-10 bg-gray-200 rounded-md" />
          <div className="h-20 bg-gray-200 rounded-md" />
        </div>
      ))}
    </div>
  );
}

export default PostSkeleton;
