module.exports = {
  // base: '/element-widgets/',
  title: 'Element Widgets',
  description: 'Widget based on element-ui',
  port: 9718,
  themeConfig: {
    // lastUpdated: true,
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Others', link: '/others/' }
    ],
    // sidebar: [
    //   // '/',
    //   // {
    //   //   title: 'Table',
    //   //   path: '/guide/table/',
    //   //   children: [
    //   //     '',
    //   //     'pagintaion-table'
    //   //   ]
    //   // }
    //   '/',
    //   '/guide/',
    //   '/guide/table/',
    //   // '/guide/table/pagination/table',
    // ]
    // sidebarDepth: 0,
    sidebar: {
      '/guide/': [
        '',
        'table/',
        'pagination/',
        'pagination/selection/',
        'pagination/selector/',
        'tree/selection/',
        'tree/selector/',
        // 'table/',
        // // 'table/',
        // // 'pagination-table'
        // // 'o-t',
        // // 'one',
        // 'table/pagination-table',
        // 'pagination/'
        // {
        //   title: 'Table',
        //   path: '/guide/table/',
        //   children: [
        //     '/guide/table/',
        //     '/guide/table/pagination-table'
        //   ]
        // }
        // '',
        // 'table/',
        // 'pagination',
        // 'pagination-selection'
      ],
      /* '/others/': [
        ''
      ] */
    }
  }
}
