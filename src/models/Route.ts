import isProduction from '../utils/isProduction';

export interface Route {
  path: string;
  element: React.ReactNode | React.ReactElement;
}

enum RouteNamesDevelopment {
  MAIN = '/',
  MAIN_PAGE = '/:pageNumber',
}

enum RouteNamesProduction {
  MAIN = '/posts/',
  MAIN_PAGE = '/posts/:pageNumber',
}

export const RouteNames = isProduction() ? RouteNamesProduction : RouteNamesDevelopment;
