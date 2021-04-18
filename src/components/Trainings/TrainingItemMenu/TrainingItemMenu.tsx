import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';
import { gfTraining } from 'goldfish/gfTraining';
import { ClassName } from 'types/root';

import s from './styles.module.css';

type Props = {
  chosenTab: string;
  scrollChange?: boolean;
  onChange: (t: string) => () => void;
  className?: ClassName;
};

export const TrainingItemMenu: React.FC<Props> = ({
  chosenTab,
  onChange,
  className,
  scrollChange,
}) => {
  const menuRef = useRef();
  useEffect(() => {
    if (scrollChange && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chosenTab]);

  return (
    <div className={classnames(s.menu, className)} ref={menuRef}>
      {gfTraining.menu.map(title => (
        <h4
          key={title}
          className={classnames({
            [s.item]: true,
            [s.chosen]: chosenTab === title,
          })}
          role="presentation"
          onClick={onChange(title)}
        >
          {title}
        </h4>
      ))}
    </div>
  );
};
