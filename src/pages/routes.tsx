import React, { Suspense as S } from 'react';
import { Route, RouteNames } from '../models/Route';

const PagePosts = React.lazy(() => import('./PagePosts/PagePosts'));

const fallback = <div>Loading...</div>;

export const publicRoutes: Route[] = [
  { path: RouteNames.MAIN, element: <S fallback={fallback}><PagePosts /></S> },
  { path: RouteNames.MAIN_PAGE, element: <S fallback={fallback}><PagePosts /></S> },
];
