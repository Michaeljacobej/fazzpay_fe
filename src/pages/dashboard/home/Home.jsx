import {
  Button,
  Center,
  Flex,
  Icon,
  // Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useTransactionHistory, useTransactionTotal } from '@/api/transaction';
import ChartWeekly from '@/components/dashboard/ChartWeekly';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import HomeHeader from '@/components/dashboard/HomeHeader';
import ItemTransactionHistory from '@/components/dashboard/ItemTransactionHistory';
import { rupiahFormat } from '@/utils/helper';

function Home() {
  const { data: dataTransactionTotal } = useTransactionTotal();
  const { data: dataTransactionHistory } = useTransactionHistory();

  return (
    <DashboardContainer name="Home" id="home">
      <Flex flex="1" alignItems="stretch" flexDir="column" gap="4">
        {/* Card Balance */}
        <HomeHeader />
        <Flex
          flex="1"
          alignItems="stretch"
          flexDir={{ base: 'column', lg: 'row' }}
          gap="4"
          justifyContent="space-between">
          {/* Card income expense */}
          <Flex
            flex="0.6"
            px="8"
            py="4"
            bg="white"
            rounded="3xl"
            boxShadow="md"
            justifyContent="space-around"
            flexDir="column">
            <Flex
              flexDir={{ base: 'column', sm: 'row' }}
              justifyContent="space-between">
              <Flex flexDir="column">
                <Icon
                  as={FiArrowDown}
                  boxSize="24px"
                  color="green.400"
                  display={{ base: 'none', sm: 'block' }}
                />
                <Text fontSize="sm" my="4px">
                  Income
                </Text>
                <Text fontSize="lg" as="b">
                  {rupiahFormat(dataTransactionTotal?.income)}
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Icon
                  as={FiArrowUp}
                  boxSize="24px"
                  color="red"
                  display={{ base: 'none', sm: 'block' }}
                />
                <Text fontSize="sm" my="4px">
                  Expense
                </Text>
                <Text fontSize="lg" as="b">
                  {rupiahFormat(dataTransactionTotal?.expense)}
                </Text>
              </Flex>
            </Flex>
            <Center mt="50px">
              <ChartWeekly />
            </Center>
          </Flex>
          {/* Card Recent transaction */}
          <Flex
            flex="0.4"
            px="6"
            py="8"
            bgColor="white"
            rounded="3xl"
            boxShadow="md"
            flexDir="column">
            <Flex
              width="100%"
              mb="20px"
              flexDir={{ base: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems="baseline">
              <Text fontSize="lg" as="b">
                Recent Transaction
              </Text>
              <Button color="cyan.600" variant="link" fontSize="sm">
                <Link to="/history">See all</Link>
              </Button>
            </Flex>
            <Flex flexDir="column" gap="4">
              {dataTransactionHistory?.slice(0, 4).map((item) => (
                <ItemTransactionHistory
                  key={`${item.type}-${item.id}`}
                  name={item.name}
                  amount={item.amount}
                  type={item.type}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </DashboardContainer>
  );
}

export default Home;
