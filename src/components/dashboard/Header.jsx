import {
  Button,
  Center,
  Flex,
  Hide,
  Icon,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegBell } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PlaceholderUserImg from '@/components/dashboard/PlaceholderUserImg';
import { getPrimaryPhone } from '@/utils/helper';

function Header() {
  const user = useSelector((state) => state.users.user);

  return (
    <Flex
      boxShadow="md"
      height="14vh"
      width="100%"
      top="0"
      bg="white"
      position="sticky"
      borderBottomRadius="3xl"
      zIndex="1000">
      <Center marginX="10vw" width="100%">
        <Text fontSize="3xl" as="b" color="cyan.600">
          Fazzpay
        </Text>
        <Spacer />
        <Flex alignItems="center" gap="4">
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
                boxSize="12"
                rounded="lg"
                shadow="md"
                objectFit="cover"
                src={user?.image}
                alt="user"
              />
            ) : (
              <PlaceholderUserImg />
            )}
            <Hide below="md">
              <Flex flexDir="column">
                <Text fontSize="lg" as="b">
                  {user?.name}
                </Text>
                <Text fontSize="sm">{getPrimaryPhone(user?.phone)}</Text>
              </Flex>
            </Hide>
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button bgColor="white" color="gray.800">
                <Icon as={FaRegBell} boxSize="24px" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>{/* <Notification /> */}</PopoverContent>
          </Popover>
        </Flex>
      </Center>
    </Flex>
  );
}

export default Header;
