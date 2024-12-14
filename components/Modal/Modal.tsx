import { Blog } from "@prisma/client";
import { Icon } from "../Icon";
import { Dispatch, SetStateAction } from "react";

type ContentProps = {
  closeModal: () => void;
  refetch: () => void;
  userId: string;
  blog: Blog | null;
  setSelectedBlog: Dispatch<SetStateAction<Blog | null>>;
};

type ModalProps = {
  content: React.FC<ContentProps>;
  isVisible: boolean;
  closeModal: () => void;
  refetch: () => void;
  userId: string;
  blog: Blog | null;
  setSelectedBlog: Dispatch<SetStateAction<Blog | null>>;
};

export const Modal: React.FC<ModalProps> = ({
  content,
  isVisible,
  closeModal,
  refetch,
  userId,
  blog,
  setSelectedBlog,
}) => {
  const Content = content;
  if (!isVisible) return null;

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-50 flex justify-center items-center modal-bg">
      <div className="relative w-full h-full  py-14 px-5">
        <Icon
          iconName={"close"}
          onClick={closeModal}
          size="2x"
          className="text-white absolute top-5 right-5 md:top-10 md:right-10"
        />
        <div className="w-full h-full overflow-y-scroll flex justify-center items-center">
          <Content
            closeModal={closeModal}
            refetch={refetch}
            userId={userId}
            blog={blog}
            setSelectedBlog={setSelectedBlog}
          />
        </div>
      </div>
    </div>
  );
};
