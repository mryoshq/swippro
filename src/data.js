import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: '#',
    },
    {
      text: 'About',
      href: '#',
    },
  ],
  actions: [
    { type: 'button', text: 'Download', href: '#' }
  ],
};
  
export const footerData = {
  
  secondaryLinks: [
    
    { text: 'About', href: getPermalink('') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: 'Contact', href: getPermalink('') }
    
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '' },
  ],
};
