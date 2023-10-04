"use client";

// import { clientRoutes } from "@/constants/routes";
// import { PlusCircle } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  bgColor: "gray" | "red";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  shade: "600" | "800";
  size: "small" | "large";
}

// create reusable component that could be either a button or a link
const Button = ({ bgColor, children, href, onClick, shade, size }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const smallSizes = "text-xl py-1.5 px-8";
  const largeSizes = "text-xl py-1.5 px-8 xs:text-2xl xs:py-2 xs:px-12";

  const classes = `
    flex items-center gap-x-2
    rounded-lg
    border-2 border-${bgColor}-${shade} text-${bgColor}-${shade}
    ${size === "small" ? smallSizes : largeSizes}
    hover:bg-${bgColor}-${shade} hover:text-white transition-colors
  `;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={handleClick} type="button">
      {children}
    </button>
  );
};

export { Button };

// <div>
// {/* // home page: */}
// <Link
//   className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
//   href={session ? clientRoutes.gists : clientRoutes.signIn}
//   >
//   {session ? (
//     <>
//       <Code /> <span>View Gists</span>
//     </>
//   ) : (
//     <>
//       <LogIn /> <span>Sign In</span>
//     </>
//   )}
//   </Link>

// {/* // sign in page: */}
// <button
//   className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors items-center flex gap-x-2 mx-auto"
//   onClick={handleClick}
//   type="button"
//   >
//   <Github /> <span>Sign {text} with GitHub</span>
//   </button>

// {/* // create gist page: */}
// <Link
//         className="border-2 border-gray-800 text-1xl py-1.5 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors inline-flex items-center gap-x-2"
//         href={clientRoutes.gists}
//       >
//         <ArrowLeftCircle /> Go Back
//       </Link>

//   {/* view gist */}
//   <Link
//     className="border-2 border-gray-800 text-1xl py-1.5 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
//     href={`/gists/${gist.gistId}`}
//   >
//     <Code /> View Gist
//   </Link>

//   {/* sign out button */}
//   <button
//     className="border-2 border-gray-800 text-1xl py-1.5 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
//     onClick={handleSignOut}
//     type="button"
//   >
//     <LogOut /> <span>Sign out</span>
//   </button>
// </div>
