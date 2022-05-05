import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes';
import { RouteNames } from '../models/Route';

const AppRouter = () => {
  return (
    <Routes>
      {
        publicRoutes.map(({ path, element }) => (
          <Route
            path={path}
            element={element}
            key={path}
          />
        ))
      }
      <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
    </Routes>
  );
}

export default AppRouter;
