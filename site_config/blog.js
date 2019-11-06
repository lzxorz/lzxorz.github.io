export default {
  'en-us': {
    barText: 'Blog',
    postsTitle: 'All posts',
    list: [
      {
        title: 'The first blog',
        author: 'author1',
        dateStr: 'May 12nd，2018',
        desc: 'Blog description, some text to sum up the main content of the blog',
        link: '/en-us/blog/blog1.html',
      },
    ],
  },
  'zh-cn': {
    barText: '博客',
    postsTitle: '所有文章',
    list: [
      {
        title: 'Docker常用命令总结',
        author: '刘志新',
        dateStr: '2019-08-30',
        desc: 'Docker常用命令总结',
        link: '/zh-cn/blog/blog083001.html',
      },
      {
        title: 'JWT用户无感知刷新方案',
        author: '刘志新',
        dateStr: '2019-08-28',
        desc: 'JWT刷新方案，用到了redis、CAS机制',
        link: '/zh-cn/blog/blog082901.html',
      },
    ],
  },
};
