import { LoadingIcon } from "@/components/LoadingIcon";

const RootLoading = () => {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex items-center" role="status">
        <LoadingIcon fill="sky" /> <span className="text-xl">Loading...</span>
      </div>
    </div>
  );
};

export default RootLoading;
