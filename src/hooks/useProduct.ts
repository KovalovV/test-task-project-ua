import { useContext } from 'react';

import { ProductContext } from 'contexts/product';

export const useProductContext = () => {
  const product = useContext(ProductContext);

  return product;
};
