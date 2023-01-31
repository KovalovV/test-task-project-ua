import { Routes, Route } from 'react-router-dom';

import { routes } from 'constants/routes';

import { NavigationBar } from 'components/navigation-bar';

import { Home } from 'pages/home';
import { Products } from 'pages/products';
import { SingleProduct } from 'pages/single-product';
import { Crash } from 'pages/crash';

export const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={routes.singleProduct} element={<SingleProduct />} />

        <Route path="*" element={<Crash />} />
      </Routes>
    </>
  );
};
