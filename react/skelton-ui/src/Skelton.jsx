import React from "react";

const Skelton = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <div className="bg-gray-300 h-48 w-full animate-pulse"></div>
      </figure>
      <div className="card-body">
        <div className="bg-gray-300 h-6 w-1/2 rounded-md animate-pulse mb-4"></div>
        <div className="space-y-2">
          <div className="bg-gray-300 h-4 w-full rounded-md animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-5/6 rounded-md animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-4/6 rounded-md animate-pulse"></div>
        </div>
        <div className="card-actions justify-end mt-4">
          <div className="bg-gray-300 h-10 w-24 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Skelton;
