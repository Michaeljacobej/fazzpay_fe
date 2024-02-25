import { useMutation } from '@tanstack/react-query';

import { fazzpayAPI } from '@/api/axios';

export const useMutateLogin = () => {
  const mutateLogin = async ({ email, password }) => {
    const { data } = await fazzpayAPI.post('/auth/login', {
      email,
      password,
    });
    return data.data;
  };
  return useMutation(mutateLogin);
};

export const useMutateRegister = () => {
  const mutateRegister = async ({ name, email, password, pin }) => {
    const { data } = await fazzpayAPI.post('/auth/register', {
      name,
      email,
      password,
      pin,
    });
    return data.data;
  };

  return useMutation(mutateRegister);
};

export const useMutateCheckEmail = () => {
  const mutateCheckEmail = async ({ email }) => {
    const { data } = await fazzpayAPI.post('/auth/check-email', {
      email,
    });
    return data.data;
  };

  return useMutation(mutateCheckEmail);
};

export const useMutateForgotPassword = () => {
  const mutateForgotPassword = async ({ email }) => {
    const { data } = await fazzpayAPI.post('/auth/request-reset', {
      email,
    });
    return data.data;
  };

  return useMutation(mutateForgotPassword);
};

export const useMutateConfirmForgotPassword = () => {
  const mutateConfirmForgotPassword = async ({ email, token, password }) => {
    const { data } = await fazzpayAPI.post('/auth/reset-password', {
      email,
      token,
      password,
    });
    return data.data;
  };

  return useMutation(mutateConfirmForgotPassword);
};
