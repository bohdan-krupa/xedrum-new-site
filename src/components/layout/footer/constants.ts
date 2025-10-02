export const FOOTER_SECTIONS = {
  MENU: 'Menu',
  SERVICES: 'Services',
  CONTACT_US: 'Contact Us',
};

export const FOOTER_MENU_ITEMS = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact Us' },
];

export const FOOTER_SERVICES = [
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/mobile-development', label: 'Mobile Development' },
  { href: '/services/qa-testing', label: 'QA & Testing' },
  { href: '/services/ux-ui-design', label: 'UX/UI Design' },
  { href: '/services/devops', label: 'DevOps' },
  { href: '/services/team-extension', label: 'Team Extension' },
];

export const FOOTER_CONTACT_INFO = {
  PHONE: '+1012 3456 789',
  EMAIL: 'contact@xedrum.com',
  ADDRESS: '132 Dartmouth Street Boston, Massachusetts 02156 United States',
};

export const FOOTER_COPYRIGHT = 'Copyright © 2025 Xedrum. All rights reserved.';

export const SOCIAL_LINKS = [
  { imagePath: '/images/social/linkedin.svg', href: 'https://linkedin.com', alt: 'LinkedIn' },
  { imagePath: '/images/social/x.svg', href: 'https://x.com', alt: 'X (Twitter)' },
  { imagePath: '/images/social/facebook.svg', href: 'https://facebook.com', alt: 'Facebook' },
]

export const CONTACT_ICONS = [
  { 
    imagePath: '/images/icon/call.svg', 
    href: 'tel:+10123456789', 
    alt: 'Phone',
    text: FOOTER_CONTACT_INFO.PHONE
  },
  { 
    imagePath: '/images/icon/email.svg', 
    href: 'mailto:contact@xedrum.com', 
    alt: 'Email',
    text: FOOTER_CONTACT_INFO.EMAIL
  },
  { 
    imagePath: '/images/icon/location.svg', 
    href: 'https://maps.app.goo.gl/1234567890', 
    alt: 'Location',
    text: FOOTER_CONTACT_INFO.ADDRESS
  },
]
