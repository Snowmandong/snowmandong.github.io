import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Custom Corporate Websites',
          href: getPermalink('/services#corporate'),
        },
        {
          text: 'Marketing & Landing Pages',
          href: getPermalink('/services#marketing'),
        },
        {
          text: 'E-Commerce Development',
          href: getPermalink('/services#ecommerce'),
        },
        {
          text: 'Technical SEO & Speed Boost',
          href: getPermalink('/services#seo'),
        },
        {
          text: 'All Services',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Process',
      href: getPermalink('/#process'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      text: 'WhatsApp',
      href: 'https://wa.me/8619903970011?text=Hi%20Maiyu%2C%20I%20would%20like%20to%20inquire%20about%20a%20website%20project.',
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
    },
    {
      variant: 'primary',
      text: 'Get a Quote',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Web Services',
      links: [
        { text: 'Custom Corporate Websites', href: getPermalink('/services#corporate') },
        { text: 'Marketing Websites ($999+)', href: getPermalink('/pricing') },
        { text: 'E-Commerce Stores', href: getPermalink('/services#ecommerce') },
        { text: 'Website Redesign & Speed', href: getPermalink('/services#seo') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Maiyu', href: getPermalink('/about') },
        { text: 'Our Portfolio', href: getPermalink('/portfolio') },
        { text: 'Delivery Process', href: getPermalink('/#process') },
        { text: 'Insights & Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Support & Contact',
      links: [
        { text: 'Request a Free Quote', href: getPermalink('/contact') },
        { text: 'Pricing & Packages', href: getPermalink('/pricing') },
        { text: 'Email: dong@tiantongfu.com', href: 'mailto:dong@tiantongfu.com' },
        { text: 'WhatsApp: +86 199 0397 0011', href: 'https://wa.me/8619903970011' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: 'https://wa.me/8619903970011',
    },
    {
      ariaLabel: 'Email',
      icon: 'tabler:mail',
      href: 'mailto:dong@tiantongfu.com',
    },
    {
      ariaLabel: 'RSS',
      icon: 'tabler:rss',
      href: getAsset('/rss.xml'),
    },
  ],
  footNote: `
    © ${new Date().getFullYear()} <a class="text-blue-600 underline dark:text-muted" href="https://www.tiantongfu.com">Maiyu</a> · Global Web Development & Outsourcing Studio. All rights reserved.
  `,
};