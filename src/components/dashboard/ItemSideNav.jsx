import { Flex, Hide, Icon, Text } from '@chakra-ui/react';
import React from 'react';

function ItemSideNav({ icon, name, isActive }) {
  return (
    <Flex
      borderLeftWidth="5px"
      py="4"
      px="6"
      sx={{
        borderLeftColor: isActive ? 'cyan.600' : 'transparent',
        textColor: isActive ? 'cyan.600' : 'gray.800',
        fontWeight: isActive ? 'bold' : 'normal',
      }}
      _hover={{
        bg: 'gray.50',
      }}
      gap="6">
      <Icon as={icon} boxSize="24px" />
      <Hide below="lg">
        <Text>{name}</Text>
      </Hide>
    </Flex>
  );
}

export default ItemSideNav;
