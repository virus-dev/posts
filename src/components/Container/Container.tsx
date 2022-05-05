import classNames from 'classnames';
import React from 'react';

import s from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode | React.ReactElement;
  className: string,
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={classNames(s.container, className)}>
    {children}
  </div>
);

export default Container;
