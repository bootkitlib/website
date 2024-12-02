import { MenuItem } from "../common/types";

export const SIDEBAR_ITEMS: MenuItem[] = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Introduction',
        url: ['bootkit', 'getting-started', 'introduction'],
      },
      {
        title: 'Install',
        url: ['bootkit', 'getting-started', 'installation'],
      },      
      {
        title: 'RTL',
        url: ['bootkit', 'getting-started', 'rtl'],
      },
    ]
  },
  {
    title: 'Components',
    children: [
      {
        title: 'Tabs',
        url: ['bootkit', 'components', 'tabs'],
      },
    ]
  },
];
