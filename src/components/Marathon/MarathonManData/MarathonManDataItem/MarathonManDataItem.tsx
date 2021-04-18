import React, { ChangeEvent, useState } from 'react';
import { UIInput } from 'components/UI/UIInput/UIInput';

import s from './styles.module.css';

type Props = {
  image: string;
  description?: string;
  value?: string;
  name?: string;
  unit?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  extendTitle?: string;
  inputSlot?: React.ReactElement;
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
  inputSlot,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div>
      <div className={s.dataItem}>
        <img src={image} alt={description} className={s.image} />

        <div className={s.meta}>
          <h5>{description}</h5>
          {!!extendTitle && (
            <div
              className={s.extendTitle}
              role="presentation"
              onClick={toggleOpen}
            >
              {extendTitle}
            </div>
          )}
        </div>

        <div className={s.actions}>
          {inputSlot || (
            <UIInput
              value={value}
              onChange={onChange}
              name={name}
              postfix={unit}
              numeric
              mini
              accent
            />
          )}
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
