import { MenuItem } from "../common/types";

export const SIDEBAR_ITEMS: MenuItem[] = [
  {
    title: 'Getting Started',
    children: [
      {
        title: 'Installation',
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
        title: 'Accordion',
        url: ['bootkit', 'components', 'accordion'],
      },
      // {
      //   title: 'Card',
      //   url: ['bootkit', 'components', 'card'],
      // },
      {
        title: 'Collapse',
        url: ['bootkit', 'components', 'collapse'],
      },
      {
        title: 'Dropdown',
        url: ['bootkit', 'components', 'dropdown'],
      },
      {
        title: 'Modal',
        url: ['bootkit', 'components', 'modal'],
      },
      {
        title: 'Popover',
        url: ['bootkit', 'components', 'popover'],
      },
      {
        title: 'Tabs',
        url: ['bootkit', 'components', 'tabs'],
      },
      {
        title: 'Tooltip',
        url: ['bootkit', 'components', 'tooltip'],
      },
      {
        title: 'Toast',
        url: ['bootkit', 'components', 'toast'],
      },
    ]
  },
];
