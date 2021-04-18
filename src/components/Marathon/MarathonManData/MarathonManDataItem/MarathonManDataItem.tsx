import React, { ChangeEvent, useState } from 'react';
import { UIInput } from 'components/UI/UIInput/UIInput';

import s from './styles.module.css';

type Props = {
  image: string;
  description?: string;
  value: string;
  name: string;
  unit?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  extendTitle?: string;
  extend?: {
    image: string;
    description: string[];
  };
};

export const MarathonManDataItem: React.FC<Props> = ({
  image,
  description,
  onChange,
  value,
  name,
  unit,
  extendTitle,
  extend,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div>
      <div className={s.dataItem}>
        <div className="flex align-center">
          <img src={image} alt={description} className={s.image} />
          <h5>{description}</h5>
        </div>

        <div className={s.actions}>
          {!!extendTitle && (
            <div
              className={s.extendTitle}
              role="presentation"
              onClick={toggleOpen}
            >
              {extendTitle}
            </div>
          )}
          <UIInput
            numeric
            value={value}
            onChange={onChange}
            name={name}
            postfix={unit}
            mini
            accent
          />
        </div>
      </div>
      {isOpen && extend && (
        <div className={s.extendContent}>
          <img src={extend.image} alt={extendTitle} />
          <div className={s.extendDescriptions}>
            {extend.description.map((text, i) => (
              <div
                key={`expand-description-${i}`}
                className={s.extendDescription}
              >
                <span className="mr-2">{`${i + 1}.`}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
