import React, { useState } from 'react';
import { Recipe } from 'graphql/types';
import { gfRecipe } from 'goldfish/gfRecipe';
import { ImagePlaceholder } from 'components/Common/ImagePlaceholder/ImagePlaceholder';

import s from './styles.module.css';

type Props = Recipe & {
  mealType: string;
};

export const TrainingRecipe: React.FC<Props> = ({
  image,
  title,
  foods,
  description,
  pfc,
  mealType,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!isOpen);

  return (
    <div className={s.recipe}>
      <div className={s.recipeContent}>
        <div className={s.image}>
          <ImagePlaceholder src={image} alt={title} ratio={0.7} />
        </div>
        <div className={s.recipeMeta}>
          <div className="flex">
            <h4 className={s.mealType}>{`${mealType}:`}</h4>
            <h4 className="ml-2">{title}</h4>
          </div>
          <div className="flex-column justify-between grow-2">
            <div className="flex-column">
              {foods.map(({ foodstuff, qt }) => (
                <span
                  key={foodstuff.title}
                  className={s.foodstuff}
                >{`• ${foodstuff.title} ${qt} ${foodstuff.unit}`}</span>
              ))}
            </div>
            <div>
              {pfc.map(item => (
                <span key={item} className={s.pfcItem}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className={s.cookMethod} role="presentation" onClick={toggleOpen}>
        {gfRecipe.cookMethod}
      </p>
      {isOpen && (
        <div>
          {description.map((descr, i) => (
            <div key={`description-recipe-${i}`} className={s.description}>
              <span className="mr-2">{`${i + 1}.`}</span>
              <span>{descr}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
