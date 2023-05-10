import defaultImage from './assets/images/hero.svg';

const CONFIG = {
  name: 'Swippro',

  origin: 'https://swippro.vercel.app/',
  basePathname: '/',
  trailingSlash: false,

  title: 'Swippro - Networking at its best',
  description:
    'Swipping never been better - Meet people that help you grow and unleash your potential',
  defaultImage: defaultImage,

  defaultTheme: 'light:only', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',


};

export const SITE = { ...CONFIG};

export const DATE_FORMATTER = CONFIG.dateFormatter;
