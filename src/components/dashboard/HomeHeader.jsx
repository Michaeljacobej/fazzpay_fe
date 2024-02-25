import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FiArrowUp, FiPlus } from 'react-icons/fi';

import { useWalletBalance } from '@/api/wallet';
import ButtonDashboard from '@/components/dashboard/ButtonDashboard';
import { rupiahFormat } from '@/utils/helper';

function HomeHeader() {
  const { data } = useWalletBalance();

  return (
    <Flex
      bgColor="cyan.600"
      color="white"
      rounded="3xl"
      boxShadow="md"
      py="6"
      px="6"
      alignItems="stretch"
      justifyContent="space-between">
      <Flex flexDir="column" justify="space-around" py="2" gap="2">
        <Text opacity="0.7" fontSize="lg">
          Balance
        </Text>
        <Text fontSize="3xl" as="b">
          {rupiahFormat(data?.balance)}
        </Text>
      </Flex>
      <Flex flexDir="column" justify="space-around" fontSize="lg" gap="4">
        <ButtonDashboard
          iconBtn={FiArrowUp}
          txtBtn="Transfer"
          linkTo="/transfer"
        />
        <ButtonDashboard iconBtn={FiPlus} txtBtn="Top Up" linkTo="/topup" />
      </Flex>
    </Flex>
  );
}

export default HomeHeader;
