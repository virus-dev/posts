export interface Route {
  path: string;
  element: React.ReactNode | React.ReactElement;
}

export enum RouteNames {
  MAIN = '/',
  MAIN_PAGE = '/:pageNumber',
}
