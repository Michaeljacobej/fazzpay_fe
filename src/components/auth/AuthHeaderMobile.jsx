import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

function AuthHeaderMobile() {
  return (
    <Flex
      flex="1"
      display={{ base: 'flex', md: 'none' }}
      justify="center"
      flexDir="column"
      bgColor="gray.100">
      <Text
        textAlign="center"
        fontWeight="700"
        fontSize="24px"
        color="cyan.600">
        Fazzpay
      </Text>
    </Flex>
  );
}

export default AuthHeaderMobile;
