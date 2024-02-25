import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { useUserContacts } from '@/api/contact';
import CardReceiver from '@/components/dashboard/CardReceiver';
import DashboardContainer from '@/components/dashboard/DashboardContainer';

function Transfer() {
  const { data } = useUserContacts();
  const [search, setSearch] = useState('');

  return (
    <DashboardContainer id="transfer" name="Transfer">
      <Flex
        flex="1"
        flexDir="column"
        color="black"
        bg="white"
        boxShadow="md"
        px="6"
        py="4"
        rounded="3xl"
        gap="4">
        <Text fontSize="18px" fontWeight="700">
          Search Receiver
        </Text>
        <InputGroup borderRadius="12px" bg="gray.100">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search receiver here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <Flex flexDir="column" gap="4">
          {data
            ?.filter((item) =>
              item.account.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map((item) => (
              <CardReceiver key={item.id} item={item} />
            ))}
        </Flex>
      </Flex>
    </DashboardContainer>
  );
}

export default Transfer;
