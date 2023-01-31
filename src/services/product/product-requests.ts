import { products, sizes } from 'server/data';

import { type IProduct, type ISize } from 'services/product/product.types';

export const ProductRequests = {
  getSizes(): Promise<ISize[]> {
    return new Promise<ISize[]>((resolve) => {
      setTimeout(() => {
        resolve(sizes);
      }, 250);
    });
  },

  getProducts(): Promise<IProduct[]> {
    return new Promise<IProduct[]>((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 250);
    });
  },

  getProduct(id: number): Promise<IProduct> {
    return new Promise<IProduct>((resolve, reject) => {
      setTimeout(() => {
        // eslint-disable-next-line eqeqeq
        const product = products.find((product) => product.id == id);
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Product not found'));
        }
      }, 250);
    });
  },
};
