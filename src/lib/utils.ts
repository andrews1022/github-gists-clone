import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const getIso8601Date = () => {
  return new Date().toISOString().replace("T", " ").replace("Z", "");
};

// a function that takes in a date, and calculates the difference between the date and now
// it returns a string with the difference at different levels of granularity
// e.g. 1 minute ago, 2 hours ago, 3 days ago, 4 weeks ago, 5 months ago, 6 years ago
const getRelativeTime = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  switch (true) {
    case minutes < 1:
      return "Less than a minute ago";
    case minutes === 1:
      return `${minutes} minute ago`;
    case minutes < 60:
      return `${minutes} minutes ago`;
    case hours === 1:
      return `${hours} hour ago`;
    case hours < 24:
      return `${hours} hours ago`;
    case days === 1:
      return `${days} day ago`;
    case days < 7:
      return `${days} days ago`;
    case weeks === 1:
      return `${weeks} week ago`;
    case weeks < 4:
      return `${weeks} weeks ago`;
    case months === 1:
      return `${months} month ago`;
    case months < 12:
      return `${months} months ago`;
    case years === 1:
      return `${years} year ago`;
    default:
      return `${years} years ago`;
  }
};

export { cn, getIso8601Date, getRelativeTime };
