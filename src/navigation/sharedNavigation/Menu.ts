export const MENU_ITEMS = [
  {
    name: 'Home',
    route: 'Home',
    expandable: false,
  },

  {
    name: 'Labour Management',
    expandable: true,

    children: [
      {
        name: 'Labour Gang Usage',
        route: 'Labour Gang Usage',
      },
      {name: 'Labour Gang Usage Rail', route: 'Labour Gang Usage Rail'},
      {
        name: 'Gang Usage For Miscellaneous',
        route: 'Gang Usage For Miscellaneous',
      },
      {name: 'Labour Gang Allocation', route: 'Labour Gang Allocation'},
    ],
  },
  {
    name: 'Stacking',
    expandable: false,

    route: 'Stacking',
  },
  {
    name: 'Master Sync',
    route: 'Master Sync',
    expandable: false,
  },
  {
    name: 'Settings',
    route: 'Settings',
    expandable: false,
  },
  {
    name: 'Logout',
    route: 'Logout',
    expandable: false,
  },
];
