"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const DetectSignInError = () => {
  const searchParams = useSearchParams();
  console.log("values: ", searchParams.values());

  return <></>;

  // return (
  //   <div>
  //     <pre>{JSON.stringify(searchParams, null, 2)}</pre>
  //   </div>
  // );
};

export { DetectSignInError };
