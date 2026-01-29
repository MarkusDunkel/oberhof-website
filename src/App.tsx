import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomeLayout } from './components/home-layout';
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
        <Route element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route element={<Layout />}>
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
