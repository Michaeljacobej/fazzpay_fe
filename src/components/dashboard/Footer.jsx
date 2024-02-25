import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Flex
      width="100%"
      position="sticky"
      py="6"
      bottom="0"
      bg="cyan.600"
      fontSize="md">
      <Flex alignItems="center" marginX="10vw" width="100%" textColor="gray.50">
        <Flex
          width="100%"
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="space-between">
          <Box alignSelf={{ base: 'start', md: 'center' }}>
            2022 Fazzpay. All right reserved.
          </Box>
          <Flex flexDir={{ base: 'column', md: 'row' }}>
            <Box>+62 5637 8882 9901</Box>
            <Box marginLeft={{ base: '0px', md: '40px' }}>
              contact@fazzpay.com
            </Box>
          </Flex>
        </Flex>
        {/* <Spacer /> */}
      </Flex>
    </Flex>
  );
}

export default Footer;
