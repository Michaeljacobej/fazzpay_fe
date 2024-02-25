import { fazzpayPrivateAPI } from '@/api/axios';
import useAuthMutation from '@/hooks/useAuthMutation';
import useAuthQuery from '@/hooks/useAuthQuery';

export const useWalletBalance = () => {
  const fetchWalletBalance = async () => {
    const { data } = await fazzpayPrivateAPI.get('/wallet/balance');
    return data.data;
  };

  return useAuthQuery(['wallet', 'balance'], fetchWalletBalance);
};

export const useMutateChangePin = () => {
  const mutateChangePin = async ({ pin }) => {
    const { data } = await fazzpayPrivateAPI.put('/wallet/changepin', {
      pin,
    });
    return data;
  };

  return useAuthMutation(mutateChangePin);
};

export const useMutateVerifyPin = () => {
  const mutateVerifyPin = async ({ pin }) => {
    const { data } = await fazzpayPrivateAPI.post('/wallet/verifpin', {
      pin,
    });
    return data;
  };

  return useAuthMutation(mutateVerifyPin);
};
