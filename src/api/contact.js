import { fazzpayPrivateAPI } from '@/api/axios';
import useAuthMutation from '@/hooks/useAuthMutation';
import useAuthQuery from '@/hooks/useAuthQuery';

export const useUserContacts = () => {
  const fetchContacts = async () => {
    const { data } = await fazzpayPrivateAPI.get('/contact');
    return data.data;
  };
  return useAuthQuery(['contact'], fetchContacts);
};

export const useMutateAddContact = () => {
  const mutateAddContact = async (id) => {
    const { data } = await fazzpayPrivateAPI.post('/contact', {
      contactId: id,
    });
    return data.data;
  };
  return useAuthMutation(mutateAddContact);
};

export const useMutateSearchContact = () => {
  const mutateSearchContact = async (search) => {
    const { data } = await fazzpayPrivateAPI.get(`/contact/search/${search}`);
    return data.data;
  };
  return useAuthMutation(mutateSearchContact);
};
