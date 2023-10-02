import { LoadingIcon } from "@/components/LoadingIcon";
import { ContentWrapper } from "@/components/ui/content-wrapper";

const RootLoading = () => {
  return (
    <ContentWrapper>
      <div className="flex items-center" role="status">
        <LoadingIcon fill="sky" /> <span className="text-xl">Loading...</span>
      </div>
    </ContentWrapper>
  );
};

export default RootLoading;
