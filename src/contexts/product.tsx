import {
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { useFetch } from 'hooks/useFetch';

import { ProductRequests } from 'services/product/product-requests';
import {
  type IProduct,
  type ISize,
  type IColor,
} from 'services/product/product.types';

import { Loader } from 'components/loader';

export interface IProductContext {
  sizes: ISize[] | null;
  getSize: (id: number) => ISize;
  selectedSize: ISize | null;
  setSelectedSize: Dispatch<SetStateAction<ISize | null>>;
  currentProduct: IProduct | null;
  setCurrentProduct: Dispatch<SetStateAction<IProduct | null>>;
  selectedProductColor: IColor | null;
  setSelectedProductColor: Dispatch<SetStateAction<IColor | null>>;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext,
);

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sizes, setSizes] = useState<ISize[]>([]);
  const [selectedSize, setSelectedSize] = useState<ISize | null>(null);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
  const [selectedProductColor, setSelectedProductColor] =
    useState<IColor | null>(null);

  const { data, status } = useFetch(ProductRequests.getSizes);

  const getSize = useCallback(
    (id: number): ISize => {
      // eslint-disable-next-line eqeqeq
      const size = sizes.find((product) => product.id == id);
      return size || ({} as ISize);
    },
    [sizes],
  );

  useEffect(() => {
    if (data) {
      setSizes(data);
    }
  }, [data]);

  if (status === 'loading') {
    return <Loader loading={true} fullWidth={true} />;
  }

  return (
    <ProductContext.Provider
      value={{
        sizes,
        getSize,
        selectedSize,
        setSelectedSize,
        currentProduct,
        setCurrentProduct,
        selectedProductColor,
        setSelectedProductColor,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
