import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function ErrorComponent() {
  return (
    <Flex flex="1" flexDir="column" alignItems="center" justify="center">
      <Text fontSize="9xl">😲</Text>
      <Text fontWeight="extrabold">Something Went Wrong</Text>
    </Flex>
  );
}

export default ErrorComponent;
