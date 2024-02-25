import { fazzpayPrivateAPI } from '@/api/axios';
import useAuthMutation from '@/hooks/useAuthMutation';

export const useMutateAddUserPhone = () => {
  const mutateUserPhone = async ({ phone }) => {
    const { data } = await fazzpayPrivateAPI.post('/phone', { phone });
    return data;
  };
  return useAuthMutation(mutateUserPhone);
};

export const useMutateMakePrimaryPhone = () => {
  const mutateMakePrimary = async ({ phone }) => {
    const { data } = await fazzpayPrivateAPI.post('/phone/set-primary', {
      phone,
    });
    return data;
  };
  return useAuthMutation(mutateMakePrimary);
};

export const useMutateRemovePhone = () => {
  const mutateDeletePhone = async ({ phone }) => {
    const { data } = await fazzpayPrivateAPI.post('/phone/delete', { phone });
    return data;
  };
  return useAuthMutation(mutateDeletePhone);
};
