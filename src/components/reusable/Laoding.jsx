import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center mt-[30vh]">
      <div
        className=" h-8 w-8 text-scoreColor animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_0.5s_linear_infinite]"
        role="status"
      >
      </div>
    </div>
  );
}
