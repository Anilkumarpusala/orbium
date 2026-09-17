import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  siteName: 'ORBIUM',
  siteUrl: 'https://orbiumai.online',
  email: 'ani@orbiumai.online',
  social: {
    linkedin: '',
    instagram: '',
    x: '',
  },
  meta: {
    title: 'ORBIUM — Founder-Led Web Studio | Strategy, Design & Engineering',
    description: 'Orbium designs and builds websites for businesses that need more than a polished surface. Strategy, design, development, and growth — handled from first conversation to launch by founder Ani McQueen.',
  },
  navigation: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Studio', href: '/studio' },
    { label: 'Insights', href: '/insights' },
    { label: 'Start a Project', href: '/start-a-project' },
  ],
};
