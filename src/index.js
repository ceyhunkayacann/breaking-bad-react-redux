import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store'
import Root from "./routes/root";
import ErrorPage from "./errorPage";
import Home from './pages/Home';
import Detail from './pages/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/char/:char_id",
        element: <Detail />,
        errorElement: <ErrorPage />
      },
    ]
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
