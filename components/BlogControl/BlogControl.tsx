import { Icon } from "../Icon";

type BlogControlProps = {
  openUpdateModal: () => void;
  blogSelected: boolean;
};

export const BlogControl: React.FC<BlogControlProps> = ({
  openUpdateModal,
  blogSelected,
}) => {
  return (
    <div className="glassbox fixed bottom-5 self-center w-fit flex flex-row items-center gap-3 md:gap-5 p-5 ">
      {!blogSelected ? (
        <div className="flex flex-col gap-1" onClick={openUpdateModal}>
          <Icon iconName={"plus"} size="2x" className="text-white" />
          <h1 className="text-white font-poppinsRegular text-lg">New Blog</h1>
        </div>
      ) : null}
      {blogSelected ? (
        <div className="flex flex-col gap-1" onClick={openUpdateModal}>
          <Icon iconName={"editDoc"} size="2x" className="text-white" />
          <h1 className="text-white font-poppinsRegular text-lg">Edit Blog</h1>
        </div>
      ) : null}
    </div>
  );
};
