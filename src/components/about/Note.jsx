import React from "react";
import Link from "next/link";

const Note = () => {
  return (
    <p className="text-center text-lg text-softText md:w-[65%] lg:w-[50%] sm:w-[80%] xs:w-[90%] ">
      {" "}
      Created with love by{" "}
      <Link
        href={"https://www.linkedin.com/in/sameh7ammad/"}
        className="underline font-bold"
      >
        Sameh Hammad
      </Link>
      , this website is a clone of the website{" "}
      <Link
        href={"https://monkeytype.com/"}
        className="underline bold font-bold"
      >
        monkeytype.com
      </Link>{" "}
      Powered and extended by the Next.js framework Launched on January 1, 2023.
    </p>
  );
};

export default Note;
