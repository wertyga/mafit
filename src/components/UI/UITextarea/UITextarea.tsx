import React, { ChangeEvent } from 'react';
import classnames from 'classnames';

import s from './styles.module.css';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  title?: string;
  required?: boolean;
  className?: string | Record<string, boolean>;
};

export const UITextarea: React.FC<Props> = ({
  value,
  onChange,
  name,
  title,
  required,
  className,
}) => (
  <div className={classnames(className)}>
    {!!title && (
      <div className={s.title}>
        <h4>{title}</h4>
        {required && <span className={s.required}>*</span>}
      </div>
    )}
    <textarea
      value={value}
      onChange={onChange}
      name={name}
      className={`UI__textarea ${s.textarea}`}
    />
  </div>
);
