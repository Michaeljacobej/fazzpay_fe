import { Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaUser } from 'react-icons/fa';

function PlaceholderUserImg(props) {
  return (
    <Flex
      alignItems="center"
      justify="center"
      boxSize="12"
      shadow="md"
      rounded="lg"
      {...props}>
      <Icon as={FaUser} fontSize="lg" />
    </Flex>
  );
}

export default PlaceholderUserImg;
