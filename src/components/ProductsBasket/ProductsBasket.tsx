import React from 'react';
import Link from 'next/link';
import { UIListItem } from 'components/UI/UIListItem/UIListItem';
import { gfProductsBasket } from 'goldfish/gfProductsBasket';
import { gfTraining } from 'goldfish/gfTraining';

import { ProductBasket } from 'types/productBasket';
import { Training_Statuses } from 'graphql/types';

import { ProductsBasketItem } from './ProductsBasketItem/ProductsBasketItem';

import s from './styles.module.css';

type Props = {
  foodstuffs: ProductBasket[];
};

// MOCK
const MOCK = [
  {
    title: 'Some title',
    type: 'fats',
    amount: '3',
    unit: 'kg',
    image: '/foodstuff/1.png',
  },
  {
    title: 'Some title#2',
    type: 'carbs',
    amount: '13',
    unit: 'kg',
    image: '/foodstuff/2.png',
  },
  {
    title: 'Some title#3',
    type: 'protein',
    amount: '33',
    unit: 'kg',
    image: '/foodstuff/3.png',
  },
];

export const ProductsBasket: React.FC<Props> = ({ foodstuffs = MOCK }) => {
  return (
    <UIListItem
      title={gfProductsBasket.titleItemList}
      description={gfProductsBasket.titleItemDescription}
      date={new Date().toString()}
      status={gfTraining.status[Training_Statuses.Locked]}
      scrollOpen
    >
      <div className="row">
        <p className="pb-6">{gfProductsBasket.description}</p>

        <div className="mb-6">
          <div className="flex">
            <span className={s.productTitle}>{gfProductsBasket.product}</span>
            <span className={s.weightTitle}>{gfProductsBasket.weight}</span>
          </div>
          <div>
            {foodstuffs.map((item, i) => (
              <ProductsBasketItem key={item.title} {...item} index={i + 1} />
            ))}
          </div>
        </div>

        <Link href="#">
          <a className={s.download}>{gfProductsBasket.downloadPdf}</a>
        </Link>
      </div>
    </UIListItem>
  );
};
