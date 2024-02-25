import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { useMutateAddContact, useMutateSearchContact } from '@/api/contact';
import CardAddContact from '@/components/dashboard/CardAddContact';
import DashboardContainer from '@/components/dashboard/DashboardContainer';

function ContactAdd() {
  const [search, setSearch] = useState('');
  const { mutate, data, isSuccess, reset } = useMutateSearchContact();
  const { mutate: mutateAddContact } = useMutateAddContact();
  const toast = useToast();

  const onSearch = () => {
    mutate(search);
  };

  const onAdd = (id) => {
    mutateAddContact(id);
    toast({
      title: 'Success',
      status: 'success',
      position: 'top',
      duration: 9000,
      isClosable: true,
    });
    setSearch('');
    reset();
  };

  return (
    <DashboardContainer id="profile" name="Contact">
      <Flex
        flex="1"
        px="8"
        py="4"
        bg="white"
        rounded="3xl"
        boxShadow="md"
        flexDir="column">
        <Text fontSize="18px" fontWeight="700">
          Add to your contact
        </Text>
        <InputGroup borderRadius="12px" bg="gray.100" mb="4">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search user email or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputRightElement>
            <Button onClick={onSearch} bgColor="cyan.500">
              <SearchIcon color="white" />
            </Button>
          </InputRightElement>
        </InputGroup>
        {data?.length > 0
          ? data?.map((user) => (
              <CardAddContact item={user} onClick={() => onAdd(user.id)} />
            ))
          : isSuccess && <Text>No user Found</Text>}
      </Flex>
    </DashboardContainer>
  );
}

export default ContactAdd;
