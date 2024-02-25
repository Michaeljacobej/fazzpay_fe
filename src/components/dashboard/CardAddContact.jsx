import { Button, Card, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import PlaceholderUserImg from '@/components/dashboard/PlaceholderUserImg';

function CardAddContact({ item, onClick }) {
  return (
    <Flex>
      <Card bg="white" flex="1">
        <Flex flexDirection="row" p="4">
          {item?.account?.image ? (
            <Image
              src={item?.account?.image}
              boxSize="70px"
              rounded="lg"
              shadow="md"
            />
          ) : (
            <PlaceholderUserImg boxSize="70px" />
          )}
          <Flex
            flex="1"
            flexDirection="row"
            ms="20px"
            justify="space-between"
            alignItems="center">
            <Text fontSize="18px" fontWeight="700">
              {item?.account?.name}
            </Text>
            <Button onClick={onClick}>Add to Contact</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}

export default CardAddContact;
