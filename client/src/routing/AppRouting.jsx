import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { HomePage } from '../pages/home/HomePage';
import { ShopPage } from '../pages/shop/ShopPage';
import { ProductPage } from '../pages/product/ProductPage';
import { AboutPage } from '../pages/about/AboutPage';
import { CartPage } from '../pages/cart/CartPage';
import { ConfirmationPage } from '../pages/confirmation/ConfirmationPage';
import { NotFoundPage } from '../pages/not-found/NotFoundPage';

const AppRouting = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop/:category?" element={<ShopPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="confirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
export { AppRouting };
