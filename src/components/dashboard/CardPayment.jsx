import { Card, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function CardPayment({ item }) {
  return (
    <Link to={`/transfer/detail/${item.id}`}>
      <Card bg="white">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="4">
          <Image src={item.img} boxSize="70px" rounded="lg" shadow="md" />
          <Flex flexDirection="column" textAlign="center" mt="20px">
            <Text fontSize="18px" fontWeight="700">
              {item.fullname}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}

export default CardPayment;
