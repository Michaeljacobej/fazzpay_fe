import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import AuthWaveBg from '@/components/auth/AuthWaveBg';

function AuthSide() {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      flex="1"
      flexDir="column"
      h="100vh"
      pos="relative"
      bgColor="cyan.600"
      justifyContent="space-between"
      py={{ sm: '2', md: '12' }}
      px={{ sm: '4', md: '12', lg: '32' }}
      overflow="hidden">
      <Text fontSize="xl" fontWeight="700" color="white">
        Fazzpay
      </Text>
      <Image
        src="/src/assets/auth-phone.png"
        height="50%"
        width="auto"
        objectPosition="left"
        fit="scale-down"
        zIndex={100}
      />
      <Flex flexDir="column" zIndex={100} color="white">
        <Text fontWeight="700" fontSize="xl" pb={6}>
          App that Covering Banking Needs.
        </Text>
        <Text fontWeight="400" lineHeight={6} textAlign="justify">
          Fazzpay is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in Fazzpay everyday with worldwide users
          coverage.
        </Text>
      </Flex>
      <Box
        pos="absolute"
        left="0"
        right="0"
        bottom="0"
        w="100%"
        h="90%"
        zIndex={0}>
        <AuthWaveBg />
      </Box>
    </Flex>
  );
}

export default AuthSide;
