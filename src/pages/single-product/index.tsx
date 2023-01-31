import { type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useFetch } from 'hooks/useFetch';
import { useProductContext } from 'hooks/useProduct';

import { ProductRequests } from 'services/product/product-requests';

import { Loader } from 'components/loader';

import { ProductCarousel } from './components/product-carousel';
import { ChooseOptions } from './components/choose-options';

import classes from './single-product.module.scss';

export const SingleProduct: FC = () => {
  const {
    currentProduct,
    setCurrentProduct,
    selectedProductColor,
    setSelectedProductColor,
  } = useProductContext();

  const { productId } = useParams();

  const { status, data } = useFetch(ProductRequests.getProduct, productId);

  useEffect(() => {
    if (data) {
      setCurrentProduct(data);
      setSelectedProductColor(data.colors[0]);
    }
  }, [productId, data]);

  if (status === 'loading' || !data) {
    return <Loader loading={true} />;
  }

  return (
    <div className="root-container">
      <div className={classes.root}>
        <div className={classes.left}>
          <ProductCarousel images={selectedProductColor?.images || []} />
        </div>
        <div className={classes.right}>
          <h3>{currentProduct?.name}</h3>
          <p>{selectedProductColor?.price} $</p>
          <ChooseOptions />
          <div className={classes.description}>
            {selectedProductColor?.description}
          </div>
        </div>
      </div>
    </div>
  );
};
