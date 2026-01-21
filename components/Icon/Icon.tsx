import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faArrowUp,
  faArrowLeft,
  faBars,
  faBlog,
  faCalendar,
  faCaretRight,
  faCaretLeft,
  faCaretDown,
  faCircleExclamation,
  faCircleRight,
  faCircleCheck,
  faCircleInfo,
  faCircleQuestion,
  faClose,
  faClock,
  faEnvelope,
  faFilePen,
  faHand,
  faHouse,
  faImage,
  faLock,
  faMapLocation,
  faPhone,
  faPlay,
  faPause,
  faPlus,
  faQuoteLeft,
  faRefresh,
  faRightFromBracket,
  faRotateRight,
  faShieldHalved,
  faSpinner,
  faStar,
  faTimes,
  faUser,
  faVideo,
  faChevronDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type IconDefinitionAny = IconDefinition | typeof faWhatsapp;
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type IconProps = {
  iconName: string;
  size?: SizeProp;
  className?: string;
} & Omit<FontAwesomeIconProps, "icon">;

const IconMap: Record<string, IconDefinitionAny> = {
  menu: faBars,
  close: faClose,
  times: faTimes,
  spinner: faSpinner,
  logout: faRightFromBracket,
  plus: faPlus,
  upload: faArrowUp,
  "arrow-up": faArrowUp,
  "arrow-right": faArrowRight,
  "arrow-left": faArrowLeft,
  error: faCircleExclamation,
  exclamation: faCircleExclamation,
  editDoc: faFilePen,
  phone: faPhone,
  caretRight: faCaretRight,
  caretLeft: faCaretLeft,
  caretDown: faCaretDown,
  calendar: faCalendar,
  check: faCircleCheck,
  clock: faClock,
  update: faRotateRight,
  refresh: faRefresh,
  circleRight: faCircleRight,
  email: faEnvelope,
  hand: faHand,
  home: faHouse,
  blog: faBlog,
  about: faAddressCard,
  image: faImage,
  info: faCircleInfo,
  location: faMapLocation,
  lock: faLock,
  pause: faPause,
  play: faPlay,
  question: faCircleQuestion,
  quote: faQuoteLeft,
  shield: faShieldHalved,
  star: faStar,
  user: faUser,
  video: faVideo,
  whatsapp: faWhatsapp,
  chevronDown: faChevronDown,
  arrowRight: faArrowRight,
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
      icon={icon as IconDefinition}
      size={size}
      {...rest}
      className={`${className} cursor-pointer`}
    />
  );
};
