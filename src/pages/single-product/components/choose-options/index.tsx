import { type FC, useCallback } from 'react';
import clsx from 'clsx';

import { useProductContext } from 'hooks/useProduct';

import { type IColor, type ISize } from 'services/product/product.types';

import classes from './choose-options.module.scss';

export const ChooseOptions: FC = () => {
  const {
    sizes,
    selectedSize,
    setSelectedSize,
    currentProduct,
    selectedProductColor,
    setSelectedProductColor,
  } = useProductContext();

  const isProductColorHasSize = useCallback(
    (id: number): boolean =>
      selectedProductColor ? selectedProductColor.sizes.includes(id) : false,
    [selectedProductColor],
  );

  const handleColorChoose = (product: IColor) => {
    setSelectedProductColor(product);
    setSelectedSize(null);
  };

  const handleSizeChoose = (size: ISize) => {
    if (isProductColorHasSize(size.id)) {
      setSelectedSize(size);
    }
  };

  return (
    <>
      <div className={classes.option}>
        Color — {selectedProductColor?.name}
        <ul>
          {currentProduct?.colors.map((product) => (
            <li
              key={product.id}
              onClick={() => {
                handleColorChoose(product);
              }}
              className={clsx(
                product.id === selectedProductColor?.id && classes.optionActive,
              )}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.option}>
        Size — {selectedSize?.label || 'not selected'}
        <ul>
          {sizes?.map((size, index) => (
            <li
              key={size.id}
              onClick={() => {
                handleSizeChoose(size);
              }}
              className={clsx(
                !isProductColorHasSize(size.id) && classes.optionDisabled,
                size.id === selectedSize?.id && classes.optionActive,
              )}
            >
              {size.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
