import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function ButtonDashboard({ iconBtn, txtBtn, linkTo }) {
  return (
    <Button
      as={Link}
      to={linkTo}
      color="white"
      _hover={{ bgColor: 'gray.50', color: 'cyan.900' }}
      variant="outline"
      fontSize="lg"
      bgColor="cyan.500"
      paddingY="6"
      rounded="lg">
      <Flex alignItems="center">
        <Icon as={iconBtn} boxSize="24px" mr="10px" />
        <Text as="b">{txtBtn}</Text>
      </Flex>
    </Button>
  );
}

export default ButtonDashboard;
