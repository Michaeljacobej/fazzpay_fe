import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import AuthRoutes from '@/components/AuthRoutes';
import ErrorComponent from '@/components/ErrorComponent';
import PrivateRoutes from '@/components/PrivateRoutes';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import Login from '@/pages/auth/Login';
import ResetPassword from '@/pages/auth/ResetPassword';
import ResetPasswordSuccess from '@/pages/auth/ResetPasswordSuccess';
import SignUp from '@/pages/auth/SignUp';
import SignUpPin from '@/pages/auth/SignUpPin';
import SignUpSuccess from '@/pages/auth/SignUpSuccess';
import ContactAdd from '@/pages/dashboard/contact/ContactAdd';
import History from '@/pages/dashboard/home/History';
import Home from '@/pages/dashboard/home/Home';
import Payment from '@/pages/dashboard/payment/Payment';
import PaymentConfirmation from '@/pages/dashboard/payment/PaymentConfirmation';
import PaymentStatus from '@/pages/dashboard/payment/PaymentStatus';
import AddPhoneNumber from '@/pages/dashboard/profile/AddPhoneNumber';
import ChangePassword from '@/pages/dashboard/profile/ChangePassword';
import ChangePin from '@/pages/dashboard/profile/ChangePin';
import ManagePhoneNumber from '@/pages/dashboard/profile/ManagePhoneNumber';
import PersonalInfo from '@/pages/dashboard/profile/PersonalInfo';
import Profile from '@/pages/dashboard/profile/Profile';
import TopUp from '@/pages/dashboard/topup/TopUp';
import TopUpConfirmation from '@/pages/dashboard/topup/TopUpConfirmation';
import TopUpStatus from '@/pages/dashboard/topup/TopUpStatus';
import Transfer from '@/pages/dashboard/transfer/Transfer';
import TransferConfirmation from '@/pages/dashboard/transfer/TransferConfirmation';
import TransferReceiver from '@/pages/dashboard/transfer/TransferReceiver';
import TransferStatus from '@/pages/dashboard/transfer/TransferStatus';
import Withdraw from '@/pages/dashboard/withdraw/Withdraw';
import Landing from '@/pages/Landing';
import PageNotFound from '@/pages/PageNotFound';
import { persistor, store } from '@/store';

const router = createBrowserRouter([
  {
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        element: <AuthRoutes />,
        children: [
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <SignUp />,
          },
          {
            path: '/signup/pin',
            element: <SignUpPin />,
          },
          {
            path: '/signup/success',
            element: <SignUpSuccess />,
          },
          {
            path: '/forgot',
            element: <ForgotPassword />,
          },
          {
            path: '/reset',
            element: <ResetPassword />,
          },
          {
            path: '/reset/success',
            element: <ResetPasswordSuccess />,
          },
        ],
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: '/home',
            element: <Home />,
          },
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            path: '/profile/information',
            element: <PersonalInfo />,
          },
          {
            path: '/profile/changepassword',
            element: <ChangePassword />,
          },
          {
            path: '/profile/changepin',
            element: <ChangePin />,
          },
          {
            path: '/profile/phone-number',
            element: <ManagePhoneNumber />,
          },
          {
            path: '/profile/phone-number/add',
            element: <AddPhoneNumber />,
          },
          {
            path: '/transfer',
            element: <Transfer />,
          },
          {
            path: '/transfer/detail/:contactId',
            element: <TransferReceiver />,
          },
          {
            path: '/transfer/confirmation/:contactId',
            element: <TransferConfirmation />,
          },
          {
            path: '/transfer/status/:contactId',
            element: <TransferStatus />,
          },
          {
            path: '/topup',
            element: <TopUp />,
          },
          {
            path: '/withdraw',
            element: <Withdraw />,
          },
          {
            path: '/topup/confirmation/',
            element: <TopUpConfirmation />,
          },
          {
            path: '/topup/status/',
            element: <TopUpStatus />,
          },
          {
            path: '/payment',
            element: <Payment />,
          },
          {
            path: '/payment/confirmation/:contactId',
            element: <PaymentConfirmation />,
          },
          {
            path: '/payment/status/:contactId',
            element: <PaymentStatus />,
          },
          {
            path: '/history',
            element: <History />,
          },
          {
            path: '/contact/add',
            element: <ContactAdd />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

const theme = extendTheme({
  fonts: {
    body: `'Nunito Sans', 'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`,
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
          </ChakraProvider>
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
