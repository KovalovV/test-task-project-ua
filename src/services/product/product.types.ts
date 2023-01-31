export type TLabelSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface ISize {
  id: number;
  label: TLabelSize;
  number: number;
}

export interface IColor {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
}

export interface IProduct {
  id: number;
  name: string;
  colors: IColor[];
}
