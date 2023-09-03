import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import store from './store';
import App from './App';
import LoginPage from './pages/LoginPage';
import RegisterUser from './pages/RegisterUser';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/create-account' element={<RegisterUser />} />
      <Route path='' element={<PrivateRoute />}>
        <Route path='/' index element={<HomePage />} />
      </Route>
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
