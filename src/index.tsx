import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ProductContextProvider } from 'contexts/product';

import { App } from './App';

import 'styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ProductContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductContextProvider>,
);
