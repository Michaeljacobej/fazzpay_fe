import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

function CardContact({ contacts }) {
  return (
    <Flex gap={2}>
      <Image
        src={
          contacts?.image ??
          'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
        }
        h="50px"
        w="auto"
      />
      <Flex direction="column">
        <Text>{contacts.fullname}</Text>
        <Text color="rgba(122, 120, 134, 1)">{contacts.phone}</Text>
      </Flex>
    </Flex>
  );
}

export default CardContact;
