/* eslint-disable no-param-reassign */
import { Flex } from '@chakra-ui/react';
import React from 'react';

function Notification() {
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
    <Flex direction="column" overflowY="auto" px="4" py="6">
      {/* {groupedArrays.slice(0, 2).map((item) => (
        <Flex key={item.date} flexDir="column">
          <Text color="gray.500">
            {isToday(item.date)
              ? 'Today'
              : item.date.split('/').reverse().join('-')}
          </Text>
          {item.trans.slice(0, 2).map((trans) => (
            <ItemNotification key={trans.id} item={trans} />
          ))}
        </Flex>
      ))} */}
    </Flex>
  );
}

export default Notification;
