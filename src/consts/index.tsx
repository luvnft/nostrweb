import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import WebTwoToneIcon from "@mui/icons-material/WebTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import TitleTwoToneIcon from "@mui/icons-material/TitleTwoTone";
// import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
// import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
// import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
// import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import LineWeightTwoToneIcon from "@mui/icons-material/LineWeightTwoTone";
// import TranslateTwoToneIcon from "@mui/icons-material/TranslateTwoTone";
import AltRouteTwoToneIcon from "@mui/icons-material/AltRouteTwoTone";
import BrushTwoToneIcon from "@mui/icons-material/BrushTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import LinkTwoToneIcon from "@mui/icons-material/LinkTwoTone";
import ImageTwoToneIcon from "@mui/icons-material/ImageTwoTone";
import AppsTwoToneIcon from "@mui/icons-material/AppsTwoTone";

export const NAV_CONFIG = [
  {
    title: "Dashboard",
    path: "dashboard",
    icon: <HomeTwoToneIcon />,
  },
  {
    title: "View site",
    path: "view-site",
    icon: <WebTwoToneIcon />,
  },
  {
    title: "Explore",
    path: "explore",
    icon: <LanguageTwoToneIcon />,
  },
];

export const HASH_CONFIG = {
  TITLE_DESCRIPTION: "title-description",
  TIMEZONE: "timezone",
  LANGUAGE: "language",
  META_DATA: "meta-data",
  X_CARD: "x-card",
  FACEBOOK_CARD: "facebook-card",
  SOCIAL_ACCOUNTS: "social-accounts",
  PRIVATE: "private",
  CONTRIBUTORS: "contributors",
  DESIGN_BRANDING: "design-branding",
  NAVIGATION: "navigation",
  RECOMMENDATION: "recommendation",
  URL: "url",
  ICON: "icon",
  IMAGE: "image",
};

export const SETTINGS_CONFIG = [
  {
    title: "General settings",
    sublist: [
      {
        title: "Title & Description",
        path: HASH_CONFIG.TITLE_DESCRIPTION,
        icon: <TitleTwoToneIcon />,
      },
      // {
      //   title: "Timezone",
      //   path: HASH_CONFIG.TIMEZONE,
      //   icon: <AccessTimeTwoToneIcon />,
      // },
      // {
      //   title: "Publication language",
      //   path: HASH_CONFIG.LANGUAGE,
      //   icon: <TranslateTwoToneIcon />,
      // },
      {
        title: "Meta data",
        path: HASH_CONFIG.META_DATA,
        icon: <LineWeightTwoToneIcon />,
      },
      // {
      //   title: "X card",
      //   path: HASH_CONFIG.X_CARD,
      //   icon: <CloseTwoToneIcon />,
      // },
      // {
      //   title: "Facebook card",
      //   path: HASH_CONFIG.FACEBOOK_CARD,
      //   icon: <FacebookTwoToneIcon />,
      // },
      // {
      //   title: "Social accounts",
      //   path: HASH_CONFIG.SOCIAL_ACCOUNTS,
      //   icon: <ThumbUpTwoToneIcon />,
      // },
      {
        title: "Contributors",
        path: HASH_CONFIG.CONTRIBUTORS,
        icon: <AccountCircleTwoToneIcon />,
      },
    ],
  },
  {
    title: "Site",
    sublist: [
      {
        title: "Design & Branding",
        path: HASH_CONFIG.DESIGN_BRANDING,
        icon: <BrushTwoToneIcon />,
      },
      {
        title: "Icon",
        path: HASH_CONFIG.ICON,
        icon: <AppsTwoToneIcon />,
      },
      {
        title: "Image",
        path: HASH_CONFIG.IMAGE,
        icon: <ImageTwoToneIcon />,
      },
      {
        title: "URL",
        path: HASH_CONFIG.URL,
        icon: <LinkTwoToneIcon />,
      },
      {
        title: "Navigation",
        path: HASH_CONFIG.NAVIGATION,
        icon: <AltRouteTwoToneIcon />,
      },
    ],
  },
  {
    title: "Growth",
    sublist: [
      {
        title: "Recommendation",
        path: HASH_CONFIG.RECOMMENDATION,
        icon: <FavoriteTwoToneIcon />,
      },
    ],
  },
];

export const TIMEZONE_LIST = [
  {
    name: "Pacific/Pago_Pago",
    label: "(GMT -11:00) Midway Island, Samoa",
  },
  {
    name: "Pacific/Honolulu",
    label: "(GMT -10:00) Hawaii",
  },
  {
    name: "America/Anchorage",
    label: "(GMT -9:00) Alaska",
  },
  {
    name: "America/Tijuana",
    label: "(GMT -8:00) Chihuahua, La Paz, Mazatlan",
  },
  {
    name: "America/Los_Angeles",
    label: "(GMT -8:00) Pacific Time (US & Canada); Tijuana",
  },
  {
    name: "America/Phoenix",
    label: "(GMT -7:00) Arizona",
  },
  {
    name: "America/Denver",
    label: "(GMT -7:00) Mountain Time (US & Canada)",
  },
  {
    name: "America/Costa_Rica",
    label: "(GMT -6:00) Central America",
  },
  {
    name: "America/Chicago",
    label: "(GMT -6:00) Central Time (US & Canada)",
  },
  {
    name: "America/Mexico_City",
    label: "(GMT -6:00) Guadalajara, Mexico City, Monterrey",
  },
  {
    name: "America/Regina",
    label: "(GMT -6:00) Saskatchewan",
  },
  {
    name: "America/Bogota",
    label: "(GMT -5:00) Bogota, Lima, Quito",
  },
  {
    name: "America/New_York",
    label: "(GMT -5:00) Eastern Time (US & Canada)",
  },
  {
    name: "America/Fort_Wayne",
    label: "(GMT -5:00) Indiana (East)",
  },
  {
    name: "America/Caracas",
    label: "(GMT -4:00) Caracas, La Paz",
  },
  {
    name: "America/Halifax",
    label: "(GMT -4:00) Atlantic Time (Canada); Greenland",
  },
  {
    name: "America/Santiago",
    label: "(GMT -4:00) Santiago",
  },
  {
    name: "America/St_Johns",
    label: "(GMT -3:30) Newfoundland",
  },
  {
    name: "America/Argentina/Buenos_Aires",
    label: "(GMT -3:00) Buenos Aires, Brasilia, Georgetown",
  },
  {
    name: "America/Noronha",
    label: "(GMT -2:00) Fernando de Noronha",
  },
  {
    name: "Atlantic/Azores",
    label: "(GMT -1:00) Azores",
  },
  {
    name: "Atlantic/Cape_Verde",
    label: "(GMT -1:00) Cape Verde Is.",
  },
  {
    name: "Etc/UTC",
    label: "(GMT) UTC",
  },
  {
    name: "Africa/Casablanca",
    label: "(GMT +0:00) Casablanca, Monrovia",
  },
  {
    name: "Europe/Dublin",
    label: "(GMT +0:00) Dublin, Edinburgh, London",
  },
  {
    name: "Europe/Amsterdam",
    label: "(GMT +1:00) Amsterdam, Berlin, Rome, Stockholm, Vienna",
  },
  {
    name: "Europe/Prague",
    label: "(GMT +1:00) Belgrade, Bratislava, Budapest, Prague",
  },
  {
    name: "Europe/Paris",
    label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris",
  },
  {
    name: "Europe/Warsaw",
    label: "(GMT +1:00) Sarajevo, Skopje, Warsaw, Zagreb",
  },
  {
    name: "Africa/Lagos",
    label: "(GMT +1:00) West Central Africa",
  },
  {
    name: "Europe/Istanbul",
    label: "(GMT +2:00) Athens, Beirut, Bucharest, Istanbul",
  },
  {
    name: "Africa/Cairo",
    label: "(GMT +2:00) Cairo, Egypt",
  },
  {
    name: "Africa/Maputo",
    label: "(GMT +2:00) Harare",
  },
  {
    name: "Europe/Kiev",
    label: "(GMT +2:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
  },
  {
    name: "Asia/Jerusalem",
    label: "(GMT +2:00) Jerusalem",
  },
  {
    name: "Africa/Johannesburg",
    label: "(GMT +2:00) Pretoria",
  },
  {
    name: "Asia/Baghdad",
    label: "(GMT +3:00) Baghdad",
  },
  {
    name: "Asia/Riyadh",
    label: "(GMT +3:00) Kuwait, Nairobi, Riyadh",
  },
  {
    name: "Europe/Moscow",
    label: "(GMT +3:00) Moscow, St. Petersburg, Volgograd",
  },
  {
    name: "Asia/Tehran",
    label: "(GMT +3:30) Tehran",
  },
  {
    name: "Asia/Dubai",
    label: "(GMT +4:00) Abu Dhabi, Muscat",
  },
  {
    name: "Asia/Baku",
    label: "(GMT +4:00) Baku, Tbilisi, Yerevan",
  },
  {
    name: "Asia/Kabul",
    label: "(GMT +4:30) Kabul",
  },
  {
    name: "Asia/Karachi",
    label: "(GMT +5:00) Islamabad, Karachi, Tashkent",
  },
  {
    name: "Asia/Yekaterinburg",
    label: "(GMT +5:00) Yekaterinburg",
  },
  {
    name: "Asia/Kolkata",
    label: "(GMT +5:30) Chennai, Calcutta, Mumbai, New Delhi",
  },
  {
    name: "Asia/Kathmandu",
    label: "(GMT +5:45) Katmandu",
  },
  {
    name: "Asia/Almaty",
    label: "(GMT +6:00) Almaty, Novosibirsk",
  },
  {
    name: "Asia/Dhaka",
    label: "(GMT +6:00) Astana, Dhaka, Sri Jayawardenepura",
  },
  {
    name: "Asia/Rangoon",
    label: "(GMT +6:30) Rangoon",
  },
  {
    name: "Asia/Bangkok",
    label: "(GMT +7:00) Bangkok, Hanoi, Jakarta",
  },
  {
    name: "Asia/Krasnoyarsk",
    label: "(GMT +7:00) Krasnoyarsk",
  },
  {
    name: "Asia/Hong_Kong",
    label: "(GMT +8:00) Beijing, Chongqing, Hong Kong, Urumqi",
  },
  {
    name: "Asia/Irkutsk",
    label: "(GMT +8:00) Irkutsk, Ulaan Bataar",
  },
  {
    name: "Asia/Singapore",
    label: "(GMT +8:00) Kuala Lumpur, Perth, Singapore, Taipei",
  },
  {
    name: "Asia/Tokyo",
    label: "(GMT +9:00) Osaka, Sapporo, Tokyo",
  },
  {
    name: "Asia/Seoul",
    label: "(GMT +9:00) Seoul",
  },
  {
    name: "Asia/Yakutsk",
    label: "(GMT +9:00) Yakutsk",
  },
  {
    name: "Australia/Adelaide",
    label: "(GMT +9:30) Adelaide",
  },
  {
    name: "Australia/Darwin",
    label: "(GMT +9:30) Darwin",
  },
  {
    name: "Australia/Brisbane",
    label: "(GMT +10:00) Brisbane, Guam, Port Moresby",
  },
  {
    name: "Australia/Sydney",
    label: "(GMT +10:00) Canberra, Hobart, Melbourne, Sydney, Vladivostok",
  },
  {
    name: "Asia/Magadan",
    label: "(GMT +11:00) Magadan, Soloman Is., New Caledonia",
  },
  {
    name: "Pacific/Auckland",
    label: "(GMT +12:00) Auckland, Wellington",
  },
  {
    name: "Pacific/Fiji",
    label: "(GMT +12:00) Fiji, Kamchatka, Marshall Is.",
  },
  {
    name: "Pacific/Kwajalein",
    label: "(GMT +12:00) International Date Line West",
  },
];
