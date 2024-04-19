import React from "react";

function SingleSkeleton() {
  return (
    <div className="flex flex-col gap-4 flex-3">
      <div className="h-[270px] bg-gray-200 rounded-md" />
      <div className="h-10 bg-gray-200 rounded-md" />
      <div className="h-10 bg-gray-200 rounded-md" />
      <div className="h-[330px] bg-gray-200 rounded-md" />
    </div>
  );
}

export default SingleSkeleton;
