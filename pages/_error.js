import React from "react";
import Link from "next/link";
import Router from "next/router";

const Error = () => {
  return (
    <div>
      <h1>Ooops! Something went wrong!</h1>
      <p>
        <Link href="/">
          <a>Go back</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default Error;