import React from 'react';
import { gfProductsBasket } from 'goldfish/gfProductsBasket';
import { ProductBasket } from 'types/productBasket';

import s from './styles.module.css';

type Props = ProductBasket & {
  index: number;
};

export const ProductsBasketItem: React.FC<Props> = ({
  index,
  title,
  type,
  amount,
  unit,
  image,
}) => {
  return (
    <div className={s.product}>
      <div className={s.description}>
        {!!image && <img src={image} alt={title} />}
        <div className="flex-column pl-6">
          <span className={s.title}>{`${index}. ${title
            .charAt(0)
            .toUpperCase()}${title.slice(1)}`}</span>
          <span className={s.type}>{gfProductsBasket.types[type]}</span>
        </div>
      </div>
      <div className={s.amount}>{`${amount} ${unit}.`}</div>
    </div>
  );
};
