export type MenuItem = {
  title: string;
  href: string;
  isActive: (p: string) => boolean;
};
