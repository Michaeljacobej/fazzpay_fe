// import { Flex, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

// import { useSelector } from 'react-redux';
// import CardPayment from '@/components/dashboard/CardPayment';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
// import { contactSelector } from '@/store/reducer/users';

function Payment() {
  // const contacts = useSelector(contactSelector);
  const [search, setSearch] = useState('');
  return (
    <DashboardContainer id="payment" name="Payment">
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
          Search Payment
        </Text>
        <InputGroup borderRadius="12px" bg="gray.100">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search payment here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <SimpleGrid columns={3} spacing={10}>
          {/* {contacts
            .filter((item) =>
              item.fullname.toLowerCase().includes(search.toLowerCase()),
            )
            .map((item) => (
              <CardPayment key={item.id} item={item} />
            ))} */}
        </SimpleGrid>
      </Flex>
    </DashboardContainer>
  );
}
export default Payment;
