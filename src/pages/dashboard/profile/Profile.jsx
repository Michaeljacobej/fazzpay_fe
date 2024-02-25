import { EditIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Image, Link, Text } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as NavLink, useNavigate } from 'react-router-dom';

import DashboardContainer from '@/components/dashboard/DashboardContainer';
import PlaceholderUserImg from '@/components/dashboard/PlaceholderUserImg';
import ProfileMenu from '@/components/dashboard/ProfileMenu';
import { doLogout } from '@/store/reducer/users';
import { getPrimaryPhone } from '@/utils/helper';

function Profile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return (
    <DashboardContainer id="profile" name="Profile">
      <Flex flexDirection="column" flex="1" gap="4">
        <Flex
          flex={{ base: '0', md: '0.4' }}
          bg="white"
          borderRadius="20px"
          boxShadow="md"
          flexDir="column"
          justifyContent="center"
          gap={2}
          alignItems="center">
          <Flex direction="column" alignItems="center" p="30px">
            {user.img ? (
              <Image src={user.img} boxSize="70px" rounded="lg" shadow="md" />
            ) : (
              <PlaceholderUserImg boxSize="70px" />
            )}
            <Flex alignItems="center">
              <Icon as={EditIcon} />
              <Link as={NavLink} to color="black" mt="5px">
                Edit
              </Link>
            </Flex>
            <Text fontWeight="700">{user?.name}</Text>
            <Text>{getPrimaryPhone(user?.phone)}</Text>
          </Flex>
        </Flex>
        <Flex
          flex={{ base: '0', md: '0.6' }}
          gap="4"
          flexDir={{ base: 'column', md: 'row' }}>
          <Flex
            flex={{ base: '1', md: '0.6' }}
            bgColor="white"
            overflow="hidden"
            flexDir="column"
            borderRadius="20px"
            py="4"
            px="4"
            justify="space-between"
            boxShadow="md"
            gap="4">
            <Flex flexDir="column" gap="4">
              <ProfileMenu
                name="Personal Information"
                showArrow
                onClick={() => navigate('/profile/information')}
              />
              <ProfileMenu
                name="Change Password"
                showArrow
                onClick={() => navigate('/profile/changepassword')}
              />
              <ProfileMenu
                name="Change PIN"
                showArrow
                onClick={() => navigate('/profile/changepin')}
              />
            </Flex>
            <ProfileMenu name="Logout" onClick={onLogout} />
          </Flex>
          <Flex
            flex={{ base: '1', md: '0.4' }}
            flexDir="column"
            px="4"
            py="4"
            bg="white"
            rounded="3xl"
            boxShadow="md"
            gap="4">
            <Flex direction="row" justifyContent="space-between" px="5" pt="5">
              <Text fontWeight="700">Contacts Info</Text>
              <Button color="cyan.600" variant="link" fontSize="sm">
                <Link as={NavLink} to="/contact/add">
                  Add Contact
                </Link>
              </Button>
            </Flex>
            {/* TODO */}
            {/* {contacts.map((item) => (
              <CardReceiver key={item.id} item={item} />
            ))} */}
          </Flex>
        </Flex>
      </Flex>
    </DashboardContainer>
  );
}

export default Profile;
