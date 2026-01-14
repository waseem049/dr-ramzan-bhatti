import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../Icon";

type LoadingProps = {
  size?: SizeProp;
  className?: string;
  containerHeight?: string;
  containerWidth?: string;
};

export const Loading: React.FC<LoadingProps> = ({
  size = "2x",
  className = "",
  containerHeight = "h-[100%]",
  containerWidth = "w-[100%]",
}) => {
  return (
    <div
      className={`p-5 ${containerHeight} ${containerWidth} flex justify-center items-center`}
    >
      <Icon iconName="spinner" size={size} className={`fa-spin ${className}`} />
    </div>
  );
};
