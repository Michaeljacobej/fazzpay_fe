import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link as NavLink } from 'react-router-dom';

import DasboardContainer from '@/components/dashboard/DashboardContainer';
import { getPrimaryPhone } from '@/utils/helper';

function PersonalInfo() {
  const { user } = useSelector((state) => state.users);

  return (
    <DasboardContainer id="profile" name="Personal Information">
      <Flex
        py="10"
        w="100%"
        direction="column"
        bg="white"
        position="relative"
        justifyContent="space-around"
        alignItems="center"
        borderRadius="20px"
        boxShadow="md"
        gap={12}>
        <Box w="90%">
          <Text fontWeight="700" fontSize="lg">
            Personal Information
          </Text>
        </Box>
        <Box w="90%">
          <Text color="rgba(122, 120, 134, 1)" alignSelf="start">
            We got your personal information from the sign
            <br />
            up proccess. If you want to make changes on
            <br />
            your information, contact our support.
          </Text>
        </Box>

        <Flex direction="column" w="90%" gap={6}>
          <Flex
            boxShadow="md"
            h="92px"
            borderRadius="10px"
            px="5"
            alignItems="center">
            <Box>
              <Text>FullName</Text>
              <Text fontWeight="700" fontSize="xl">
                {user.name}
              </Text>
            </Box>
          </Flex>

          {/* <Flex
            boxShadow="md"
            h="92px"
            borderRadius="10px"
            px="5"
            alignItems="center">
            <Box>
              <Text>Last Name</Text>
              <Text fontWeight="700" fontSize="xl">
                {name.split(' ')[1]}
              </Text>
            </Box>
          </Flex> */}

          <Flex
            boxShadow="md"
            h="92px"
            borderRadius="10px"
            px="5"
            alignItems="center">
            <Box>
              <Text>Verified E-mail</Text>
              <Text fontWeight="700" fontSize="xl">
                {user.email}
              </Text>
            </Box>
          </Flex>

          <Flex
            boxShadow="md"
            h="92px"
            borderRadius="10px"
            justifyContent="space-between"
            px="5"
            alignItems="center">
            <Box>
              <Text>Phone Number</Text>
              <Text fontWeight="700" fontSize="xl">
                {getPrimaryPhone(user?.phone)}
              </Text>
            </Box>
            <Link as={NavLink} to="/profile/phone-number" color="cyan.600">
              Manage
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </DasboardContainer>
  );
}
export default PersonalInfo;
