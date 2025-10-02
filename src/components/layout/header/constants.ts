export const HEADER_BUTTONS = {
  HOME: 'Home',
  ABOUT: 'About Us',
  SERVICES: 'Services',
  CASE_STUDIES: 'Case Studies',
  BLOG: 'Blog',
  TESTIMONIALS: 'Testimonials',
  CONTACT: 'Contact Us',
} as const;

export const HEADER_LINKS = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CASE_STUDIES: '/case-studies',
  BLOG: '/blog',
  TESTIMONIALS: '/testimonials',
  CONTACT: '/contact',
} as const;

export const NAVIGATION_ITEMS = [
  { href: HEADER_LINKS.HOME, label: HEADER_BUTTONS.HOME },
  { href: HEADER_LINKS.ABOUT, label: HEADER_BUTTONS.ABOUT },
  { href: HEADER_LINKS.SERVICES, label: HEADER_BUTTONS.SERVICES },
  { href: HEADER_LINKS.CASE_STUDIES, label: HEADER_BUTTONS.CASE_STUDIES },
  { href: HEADER_LINKS.BLOG, label: HEADER_BUTTONS.BLOG },
  { href: HEADER_LINKS.TESTIMONIALS, label: HEADER_BUTTONS.TESTIMONIALS },
  { href: HEADER_LINKS.CONTACT, label: HEADER_BUTTONS.CONTACT },
] as const;
