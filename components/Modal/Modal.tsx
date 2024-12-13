import { Icon } from "../Icon";

type ContentProps = {
  closeModal: () => void;
};

type ModalProps = {
  content: React.FC<ContentProps>;

  isVisible: boolean;
  closeModal: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  content,
  isVisible,
  closeModal,
}) => {
  const Content = content;
  if (!isVisible) return null;

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-50 flex justify-center items-center glassbox">
      <div className="relative w-full h-full flex justify-center items-center py-14 px-5 md:p-0 overflow-y-scroll">
        <Icon
          iconName={"close"}
          onClick={closeModal}
          size="2x"
          className="text-white absolute top-5 right-5 md:top-10 md:right-10"
        />
        <Content closeModal={closeModal} />
      </div>
    </div>
  );
};
