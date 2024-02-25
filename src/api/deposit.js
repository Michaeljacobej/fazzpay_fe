import { useMutation } from '@tanstack/react-query';

import { fazzpayPrivateAPI } from '@/api/axios';

export const useMutateDeposit = () => {
  const mutateDeposit = async ({ amount }) => {
    const { data } = await fazzpayPrivateAPI.post('/deposit', amount);
    return data;
  };
  return useMutation(mutateDeposit);
};

export default { useMutateDeposit };
