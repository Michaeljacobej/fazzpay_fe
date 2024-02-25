import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { useWalletBalance } from '@/api/wallet';
import { getPrimaryPhone, rupiahFormat } from '@/utils/helper';

function TopUpHeader() {
  const { data } = useWalletBalance();
  const user = useSelector((state) => state.users.user);

  return (
    <Flex
      bgColor="white.600"
      color="black"
      rounded="3xl"
      boxShadow="md"
      py="6"
      px="6"
      alignItems="stretch"
      justifyContent="space-between">
      <Flex flexDir="column" justify="space-between" py="2" gap="2">
        <Text opacity="0.7" fontSize="lg">
          Balance
        </Text>
        <Text fontSize="3xl" as="b">
          {rupiahFormat(data?.balance)}
        </Text>
        <Text opacity="0.7" fontSize="sm">
          {getPrimaryPhone(user?.phone)}
        </Text>
      </Flex>
    </Flex>
  );
}

export default TopUpHeader;
