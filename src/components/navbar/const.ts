export const NAVBAR = {
  ROUTES: {
    work: '/',
    about: '/about',
  },

  ITEMS: [
    { to: '/', label: 'Work', exact: true },
    { to: '/about', label: 'About' },
  ],

  CLASSES: {
    BASE:
      'flex items-center gap-3 md:gap-4 rounded-full px-4 py-[10px] tracking-[.8px] uppercase font-inter text-[12.5px]',
  },
};
