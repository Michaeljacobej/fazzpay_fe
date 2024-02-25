import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';

function ItemBottomNavBar({ isActive, name, icon }) {
  return (
    <Flex
      h="100%"
      flexDir="column"
      py="4"
      px="6"
      alignItems="center"
      justify="center"
      bgColor={isActive ? 'white' : 'transparent'}>
      <Icon as={icon} boxSize="24px" color={isActive ? 'black' : 'white'} />
      {isActive && <Text fontWeight="semibold">{name}</Text>}
    </Flex>
  );
}

export default ItemBottomNavBar;
