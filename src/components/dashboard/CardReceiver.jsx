import { Card, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import PlaceholderUserImg from '@/components/dashboard/PlaceholderUserImg';

function CardReceiver({ item }) {
  return (
    <Link to={`/transfer/detail/${item.id}`}>
      <Card bg="white">
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
          <Flex flexDirection="column" ms="20px">
            <Text fontSize="18px" fontWeight="700">
              {item?.account?.name}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}

export default CardReceiver;
