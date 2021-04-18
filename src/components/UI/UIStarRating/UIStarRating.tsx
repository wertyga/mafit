import React from 'react';
import { gfRating } from 'goldfish/gfRating';
import { UIIcon } from 'components/UI/UIIcons/UIIcon';

import s from './styles.module.css';
import classnames from 'classnames';

type Props = {
  rating: number;
  onChange: (r: number) => () => void;
  className?: string | Record<string, boolean>;
};

export const UIStarRating: React.FC<Props> = ({
  rating,
  onChange,
  className,
}) => {
  return (
    <div className={classnames('UI__rating', [s.rating], className)}>
      <p className={s.text}>{gfRating.rating}</p>
      <div className={s.stars}>
        {new Array(5).fill('').map((_, i) => {
          const icon = Math.round(rating) >= i + 1 ? 'starFilled' : 'starEmpty';
          return (
            <UIIcon icon={icon} key={`rating-${i}`} onClick={onChange(i + 1)} />
          );
        })}
      </div>
    </div>
  );
};
