import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fazzpayPrivateAPI } from '@/api/axios';
// import { useDispatch } from 'react-redux';

// import { doLogout } from '@/store/reducer/users';

const useAuthQuery = (...options) => {
  const auth = useSelector((state) => state.users);
  const query = useQuery(...options);

  useEffect(() => {
    const requestInterceptors = fazzpayPrivateAPI.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${auth.user.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    return () => {
      fazzpayPrivateAPI.interceptors.request.eject(requestInterceptors);
    };
  }, []);

  // const dispatch = useDispatch();
  // if (query?.error?.response?.status === 401) {
  //   dispatch(doLogout());
  // }
  return query;
};

export default useAuthQuery;
