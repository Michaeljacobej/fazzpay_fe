import { fazzpayPrivateAPI } from '@/api/axios';
import useAuthMutation from '@/hooks/useAuthMutation';
import useAuthQuery from '@/hooks/useAuthQuery';

export const useTransactionTotal = () => {
  const fetchTransactionTotal = async () => {
    const { data } = await fazzpayPrivateAPI.get('/transaction/total');
    return data.data;
  };

  return useAuthQuery(['transaction', 'total'], fetchTransactionTotal);
};

export const useTransactionHistory = () => {
  const fetchTransactionHistory = async () => {
    const { data } = await fazzpayPrivateAPI.get('/transaction');
    return data.data;
  };
  return useAuthQuery(['transaction'], fetchTransactionHistory);
};

export const useWeeklyCharts = () => {
  const fetchWeeklyCharts = async () => {
    const { data } = await fazzpayPrivateAPI.get('/transaction/weekly');
    return data.data;
  };

  return useAuthQuery(['transaction', 'weekly'], fetchWeeklyCharts);
};

export const useMutateTransfer = () => {
  const mutateTransfer = async ({ to, amount, notes }) => {
    const { data } = await fazzpayPrivateAPI.post('/transaction/transfer', {
      to,
      amount,
      notes,
    });
    return data.data;
  };

  return useAuthMutation(mutateTransfer);
};
