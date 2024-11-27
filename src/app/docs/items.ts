export  interface SidebarItem {
  title: string;
  url?: Array<string>;
  children?: SidebarItem[];
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: 'Getting Started',
    url: ['getting-started', 'introduction'],
    children: [
      {
        title: 'Introduction',
        url: ['getting-started', 'introduction'],
      },
    ]
  },
  // {
  //   title: '@ui-sugar/angular',
  //   url: ['components', 'badge'],
  //   children: [
  //     {
  //       title: 'Installation',
  //       url: ['angular-package', 'installation'],
  //     },
  //     {
  //       title: 'Code',
  //       url: ['angular-package', 'code'],
  //     },
  //   ]
  // },
  // {
  //   title: '@ui-sugar/angular-bootstrap (soon)',
  //   // url: ['more', 'change-log'],
  //   // children: [
  //   //   {
  //   //     title: '(comming soon)',
  //   //     url: ['more', 'change-log'],
  //   //   },
  //   // ]
  // },

  // {
  //   title: 'Material Extensions (soon)',
  //   // url: ['more', 'change-log'],
  //   // children: [
  //   //   {
  //   //     title: '(comming soon)',
  //   //     url: ['more', 'change-log'],
  //   //   },
  //   // ]
  // },

  // {
  //   title: 'Kendo Extensions (soon)',
  //   // url: ['more', 'change-log'],
  //   // children: [
  //   //   {
  //   //     title: '(comming soon)',
  //   //     url: ['more', 'change-log'],
  //   //   },
  //   // ]
  // },


];
