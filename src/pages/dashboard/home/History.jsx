/* eslint-disable no-param-reassign */
import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

import { useTransactionHistory } from '@/api/transaction';
// import { useSelector } from 'react-redux';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import ItemTransactionHistory from '@/components/dashboard/ItemTransactionHistory';
// import { isToday } from '@/utils/helper';

function History() {
  const { data } = useTransactionHistory();

  // const transactions = useSelector(transactionsHistorySelector);

  // const groupedTransactions = useMemo(
  //   () =>
  //     transactions.reduce((groups, trans) => {
  //       const date = new Date(trans.date).toISOString().split('T')[0];
  //       if (!groups[date]) {
  //         groups[date] = [];
  //       }
  //       groups[date].push(trans);
  //       return groups;
  //     }, {}),
  //   [transactions],
  // );

  // const groupedArrays = useMemo(
  //   () =>
  //     Object.keys(groupedTransactions).map((date) => {
  //       return {
  //         date,
  //         trans: groupedTransactions[date],
  //       };
  //     }),
  //   [groupedTransactions],
  // );

  return (
    <DashboardContainer id="home" name="Transaction History">
      <Flex
        flex="1"
        px="8"
        py="6"
        bgColor="white"
        rounded="3xl"
        boxShadow="md"
        flexDir="column"
        gap="6">
        <Text fontSize="lg" as="b">
          Transaction History
        </Text>
        <Flex direction="column" gap="6">
          {data?.map((item) => (
            <ItemTransactionHistory
              key={`${item.type}-${item.id}`}
              name={item.name}
              amount={item.amount}
              type={item.type}
            />
          ))}
          {/* {groupedArrays.map((item) => (
            <Flex key={item.date} flexDir="column" gap="2">
              <Text color="gray.500">
                {isToday(item.date)
                  ? 'Today'
                  : item.date.split('/').reverse().join('-')}
              </Text>
              {item.trans.map((trans) => (
                <ItemTransactionHistory key={trans.id} item={trans} />
              ))}
            </Flex>
          ))} */}
        </Flex>
      </Flex>
    </DashboardContainer>
  );
}

export default History;
