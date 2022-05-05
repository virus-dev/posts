import classNames from 'classnames';
import React from 'react';

import s from './Input.module.scss';

interface InputProps {
  placeholder: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  icon?: React.ReactNode | React.ReactElement,
  className?: string,
}

const Input: React.FC<InputProps> = ({
  icon, onChange, placeholder, value, className,
}) => {
  return (
    <div className={classNames(s.inputWrapper, className)}>
      <input
        type="text"
        className={s.input}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {icon && <span className={s.icon}>{icon}</span>}
    </div>
  )
};

export default Input;