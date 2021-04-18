import React from 'react';
import classnames from 'classnames';
import { ClassName } from 'types/root';
import s from './styles.module.css';

type Props = {
  src: string;
  alt?: string;
  ratio?: number;
  className?: ClassName;
};

export const ImagePlaceholder: React.FC<Props> = ({
  src,
  alt,
  ratio = 1,
  className,
}) => {
  return (
    <div
      className={classnames(s.wrapper, className)}
      style={{ paddingTop: `${100 * ratio}%` }}
    >
      <img src={src} alt={alt} className={s.image} />
    </div>
  );
};
