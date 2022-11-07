import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import SettingsPage from '../components/pages/SettingsPage';
import UsersPage from '../components/pages/UsersPage';

const Router: FC = memo(() => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/settings" element={<SettingsPage />} />
    <Route path="/users" element={<UsersPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
));

export default Router;
