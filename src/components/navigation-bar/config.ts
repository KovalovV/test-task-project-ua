import { routes } from 'constants/routes';

export interface INavigation {
  name: string;
  url: string;
}

export const navigation: INavigation[] = [
  {
    name: 'Home',
    url: routes.home,
  },
  {
    name: 'Products',
    url: routes.products,
  },
];
