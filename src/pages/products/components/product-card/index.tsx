import { type FC, useState, useEffect } from 'react';

import { type IColor } from 'services/product/product.types';

import { type ProductCardProps } from './types';

import classes from './product-card.module.scss';

export const ProductCard: FC<ProductCardProps> = ({ title, colors }) => {
  const [productPreview, setProductPreview] = useState<IColor | null>(null);

  useEffect(() => {
    setProductPreview(colors[0]);
  }, [colors]);

  return (
    <div className={classes.root}>
      <figure className={classes.photo}>
        <img
          src={`../../${productPreview?.images[0] as string}`}
          alt={productPreview?.name}
        />
        <figcaption>
          <h3>{title}</h3>
          <p>{productPreview?.price} $</p>
        </figcaption>
      </figure>
    </div>
  );
};
