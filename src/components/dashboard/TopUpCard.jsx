import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import PlaceholderUserImg from '@/components/dashboard/PlaceholderUserImg';
import { getPrimaryPhone } from '@/utils/helper';

function TopUpCard() {
  const user = useSelector((state) => state.users.user);

  return (
    <Flex
      bgColor="white.600"
      color="black"
      rounded="3xl"
      boxShadow="md"
      py="6"
      alignItems="stretch"
      justifyContent="space-between">
      <Flex flexDir="column" justify="space-between" py="2" gap="2">
        <Text opacity="0.7" fontSize="lg" px="6">
          Top Up Money
        </Text>
        <Button
          variant="ghost"
          display="flex"
          flexDir="row"
          gap="4"
          h="16"
          as={Link}
          to="/profile">
          {user?.image ? (
            <Image
              boxSize="50"
              rounded="lg"
              shadow="md"
              objectFit="cover"
              src={user?.image}
              alt="user"
            />
          ) : (
            <PlaceholderUserImg />
          )}
          <Flex flexDir="column">
            <Text fontSize="lg" as="b">
              {user?.name}
            </Text>
            <Text fontSize="sm">{getPrimaryPhone(user?.phone)}</Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}

export default TopUpCard;
