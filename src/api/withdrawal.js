import { fazzpayPrivateAPI } from '@/api/axios';
import useAuthMutation from '@/hooks/useAuthMutation';
import useAuthQuery from '@/hooks/useAuthQuery';

export const useMethodWithdrawal = () => {
  const queryGetMethod = async () => {
    const { data } = await fazzpayPrivateAPI.get('/withdrawal/method');
    return data.data;
  };

  return useAuthQuery(['methodData'], queryGetMethod);
};

export const useMutateWithdrawal = () => {
  const mutateWithdrawal = async ({ pin, methodName, amount }) => {
    const { data } = await fazzpayPrivateAPI.post('/withdrawal', {
      pin,
      methodName,
      amount,
    });
    return data;
  };

  return useAuthMutation(mutateWithdrawal);
};
