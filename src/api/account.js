import { useDispatch } from 'react-redux';

import { fazzpayPrivateAPI } from '@/api/axios';
import useAuthMutation from '@/hooks/useAuthMutation';
import { refreshUser } from '@/store/reducer/users';

export const useMutateRefreshRedux = () => {
  const dispatch = useDispatch();

  const mutateRefresh = async () => {
    const { data } = await fazzpayPrivateAPI.get('/account/me');
    dispatch(refreshUser(data.data));
    return data;
  };

  return useAuthMutation(mutateRefresh);
};

export const useMutateChangePassword = () => {
  const mutateChangePassword = async ({ password, newPassword }) => {
    const { data } = await fazzpayPrivateAPI.put('/account/password/change', {
      password,
      newPassword,
    });
    return data;
  };

  return useAuthMutation(mutateChangePassword);
};
