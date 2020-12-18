module.exports = {
  title: 'Element Widgets',
  description: 'Widget based on element-ui',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    // sidebar: [
    //   // '/',
    //   {
    //     title: 'Table',
    //     path: '/guide/table/',
    //     children: [
    //       '',
    //       'pagintaion-table'
    //     ]
    //   }
    // ]
    sidebar: {
      '/guide/': [
        '',
        'table/',
        'table/pagination-table'
      ]
    }
  }
}
