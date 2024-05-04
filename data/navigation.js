export const navigation = [
  {
    title: '폼',
    icon: 'file-invoice',
    item: [{ title: '폼_샘플', url: '/form' }],
  },
  {
    title: '거래',
    icon: 'file-invoice',
    item: [{ title: '카드', url: 'trx/card' }],
  },
  {
    title: '3-depth',
    icon: 'file-invoice',
    item: [
      { title: 'depth-test', url: '/depth' },
      {
        title: '샘플',
        icon: 'file-invoice',
        list: [
          { title: 'depth3', url: '/dept3', icon: '' },
          { title: 'depth4', url: '/dept4', icon: '' },
          { title: 'depth5', url: '/dept5', icon: '' },
        ],
      },
    ],
  },
];
