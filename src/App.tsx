import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage } from './pages/home';
import { TheFarmPage } from './pages/the-farm';
import { ProductsPage } from './pages/products';
import { RentalsPage } from './pages/rentals';
import { ContactPage } from './pages/contact';
import { NotFoundPage } from './pages/not-found';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="the-farm" element={<TheFarmPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="rentals" element={<RentalsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
