import { Icon } from "../Icon";

type ContentProps = {
  closeModal: () => void;
  refetch: () => void;
  userId: string;
};

type ModalProps = {
  content: React.FC<ContentProps>;
  isVisible: boolean;
  closeModal: () => void;
  refetch: () => void;
  userId: string;
};

export const Modal: React.FC<ModalProps> = ({
  content,
  isVisible,
  closeModal,
  refetch,
  userId,
}) => {
  const Content = content;
  if (!isVisible) return null;

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-50 flex justify-center items-center glassbox">
      <div className="relative w-full h-full  py-14 px-5">
        <Icon
          iconName={"close"}
          onClick={closeModal}
          size="2x"
          className="text-white absolute top-5 right-5 md:top-10 md:right-10"
        />
        <div className="w-full h-full overflow-y-scroll flex justify-center items-center">
          <Content closeModal={closeModal} refetch={refetch} userId={userId} />
        </div>
      </div>
    </div>
  );
};
