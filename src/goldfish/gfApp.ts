export const gfApp = {
  getTitle: (pathname: string) => {
    switch (pathname) {
      case '/profile/report':
        return 'Отчет';

      default:
        return '';
    }
  },
};
