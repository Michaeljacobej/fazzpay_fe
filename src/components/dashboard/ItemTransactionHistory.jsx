import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import PlaceholderUserImg from '@/components/dashboard/PlaceholderUserImg';
import { capitalizeFirstLetter } from '@/utils/helper';

function ItemTransactionHistory({ name, amount, image, type }) {
  return (
    <Flex flex="1" alignItems="center" justifyContent="space-between">
      <Flex gap="4">
        {image ? (
          <Image
            boxSize="14"
            objectFit="cover"
            rounded="lg"
            alt="user"
            shadow="md"
            src={image}
          />
        ) : (
          <PlaceholderUserImg boxSize="14" />
        )}
        <Flex direction="column" justifyContent="space-around">
          <Text as="b">{name}</Text>
          <Text color="gray.500" fontSize="sm">
            {capitalizeFirstLetter(type)}
          </Text>
        </Flex>
      </Flex>
      <Text color={amount < 0 ? 'red.500' : 'green.400'} as="b">
        {amount < 0 ? ' ' : '+'}
        {/* <Text color={user === 'to' ? 'red.500' : 'green.400'} as="b"> */}
        {/* {user === 'to' ? '-' : '+'} */}
        {new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 0,
        }).format(amount)}
      </Text>
    </Flex>
  );
}

export default ItemTransactionHistory;
