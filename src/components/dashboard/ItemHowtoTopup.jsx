import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function ItemHowtoTopup({ number, text }) {
  return (
    <Flex
      width="100%"
      p={{ base: '0', md: '30px' }}
      bg="white"
      flexDir={{ base: 'column', sm: 'row' }}
      borderRadius="10px"
      boxShadow={{ base: 'none', md: 'md' }}
      my="10px">
      <Text fontSize="lg" as="b" mr="25px" textColor="cyan.600">
        {number}
      </Text>
      <Text>{text}</Text>
    </Flex>
  );
}

export default ItemHowtoTopup;
