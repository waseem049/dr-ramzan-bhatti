import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faArrowUp,
  faBars,
  faBlog,
  faCalendar,
  faCaretRight,
  faCircleExclamation,
  faCircleRight,
  faClose,
  faEnvelope,
  faFilePen,
  faHouse,
  faPhone,
  faPlus,
  faRightFromBracket,
  faRotateRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type IconProps = {
  iconName: string;
  size?: SizeProp;
  className?: string;
} & Omit<FontAwesomeIconProps, "icon">;

const IconMap: Record<string, IconDefinition> = {
  menu: faBars,
  close: faClose,
  spinner: faSpinner,
  logout: faRightFromBracket,
  plus: faPlus,
  upload: faArrowUp,
  error: faCircleExclamation,
  editDoc: faFilePen,
  phone: faPhone,
  caretRight: faCaretRight,
  calendar: faCalendar,
  update: faRotateRight,
  circleRight: faCircleRight,
  email: faEnvelope,
  home: faHouse,
  blog: faBlog,
  about: faAddressCard,
};

export const Icon: React.FC<IconProps> = ({
  iconName,
  size = "1x",
  className,
  ...rest
}) => {
  const icon = IconMap[iconName];

  if (!icon) {
    return <FontAwesomeIcon icon={faCircleExclamation} />;
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      {...rest}
      className={`${className} cursor-pointer`}
    />
  );
};
