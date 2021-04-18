import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { gfArticle } from 'goldfish/gfArticle';
import { ImagePlaceholder } from 'components/Common/ImagePlaceholder/ImagePlaceholder';

import s from './styles.module.css';

type Props = {};

export const ArticleItem = ({
  image,
  title,
  description,
  className,
  preview,
  link,
}) => {
  return (
    <div className={classnames(s.article, className)}>
      <ImagePlaceholder
        src={image}
        alt={title}
        className={classnames({
          [s.preview]: preview,
        })}
        ratio={preview && 0.36}
      />
      <div className={s.content}>
        <h5 className={s.title}>{title}</h5>
        <p>{description}</p>
        {!!link && (
          <Link href={link}>
            <a className="link mt-2">{gfArticle.readAll}</a>
          </Link>
        )}
      </div>
    </div>
  );
};
