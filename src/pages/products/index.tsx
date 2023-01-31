import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { useFetch } from 'hooks/useFetch';
import { routes } from 'constants/routes';

import { ProductRequests } from 'services/product/product-requests';

import { Loader } from 'components/loader';

import { ProductCard } from './components/product-card';

import classes from './product.module.scss';

export const Products: FC = () => {
  const { status, data } = useFetch(ProductRequests.getProducts);

  if (status === 'loading' || !data) {
    return <Loader loading={true} />;
  }

  return (
    <div className="root-container">
      <div className={classes.root}>
        <div className={classes.container}>
          {data?.map(({ id, name, colors }) => (
            <Link
              key={id}
              to={`${routes.products}/${id}`}
              className={classes.product}
            >
              <ProductCard title={name} colors={colors} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
