export const gfMenu = {
  logo: 'Mafit',
  menu: [
    {
      title: 'Марафон',
      href: '/',
      isActive: (pathname: string) => /^\/$/.test(pathname),
    },
    {
      title: 'Прогресс',
      href: '/progress',
      isActive: (pathname: string) => /^\/progress$/.test(pathname),
    },
    {
      title: 'Чат',
      href: '/chat',
      isActive: (pathname: string) => /^\/chat$/.test(pathname),
    },
    {
      title: 'Статьи',
      href: '/blog',
      isActive: (pathname: string) => /^\/blog$/.test(pathname),
    },
    {
      title: 'Помощь',
      href: '/help',
      isActive: (pathname: string) => /^\/help$/.test(pathname),
    },
    {
      title: 'FAQ',
      href: '/faq',
      isActive: (pathname: string) => /^\/faq$/.test(pathname),
    },
    {
      title: 'Конкурс',
      href: '/test',
      isActive: (pathname: string) => /^\/test$/.test(pathname),
    },
  ],
  userMenu: [
    {
      title: 'Профиль',
      href: '/profile',
    },
    {
      title: 'Отчет',
      href: '/report',
    },
    {
      title: 'Сообщения',
      href: '/messages',
    },
  ],
};
