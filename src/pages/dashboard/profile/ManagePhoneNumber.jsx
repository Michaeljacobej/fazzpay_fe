import { Icon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useMutateRefreshRedux } from '@/api/account';
import { useMutateMakePrimaryPhone, useMutateRemovePhone } from '@/api/phone';
import DasboardContainer from '@/components/dashboard/DashboardContainer';

function ManagePhoneNumber() {
  const { mutate: mutateRemovePhone } = useMutateRemovePhone();
  const { mutate: mutateMakePrimaryPhone } = useMutateMakePrimaryPhone();
  const { mutate: mutateRefresh } = useMutateRefreshRedux();

  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const onAdd = () => {
    navigate('/profile/phone-number/add');
  };

  const onRemovePhone = (phone) => {
    mutateRemovePhone(
      { phone: phone.phone },
      {
        onSuccess: () => {
          mutateRefresh();
        },
      },
    );
  };

  const onSetPrimary = (phone) => {
    mutateMakePrimaryPhone(
      { phone: phone.phone },
      {
        onSuccess: () => {
          mutateRefresh();
        },
      },
    );
  };

  return (
    <DasboardContainer id="profile" name="Manage Phone Number">
      <Flex
        w="100%"
        flex="1"
        direction="column"
        gap={20}
        px="10"
        py="10"
        pb="300"
        bg="white"
        borderRadius="20px"
        boxShadow="md">
        <Flex direction="column" gap={4}>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="700">
              Manage Phone Number
            </Text>
            <Button onClick={onAdd} colorScheme="cyan">
              Add
            </Button>
          </Flex>
          <Text color="rgba(122, 120, 134, 1)">
            You can only delete the phone number and then
            <br />
            you must add another phone number.
          </Text>
        </Flex>
        <Flex gap="5" flexDir="column">
          {user?.phone?.length > 0 ? (
            user?.phone
              // ?.sort((a, b) => (a?.isPrimary ? 0 : 1) - (b?.isPrimary ? 0 : 1))
              ?.map((phone) => (
                <Flex
                  key={phone.phone}
                  alignItems="center"
                  boxShadow="md"
                  justifyContent="space-between"
                  borderRadius="10px"
                  px="10"
                  py="6">
                  <Flex direction="column">
                    {phone?.isPrimary && <Text>Primary</Text>}
                    <Text fontSize="xl" fontWeight="700">
                      {phone?.phone}
                    </Text>
                  </Flex>
                  <Flex gap="4">
                    {!phone?.isPrimary && (
                      <Button onClick={() => onSetPrimary(phone)}>
                        Set to Primary
                      </Button>
                    )}
                    <Button
                      variant="link"
                      fontSize="sm"
                      onClick={() => onRemovePhone(phone)}>
                      <Icon as={AiOutlineDelete} boxSize={8} cursor="pointer" />
                    </Button>
                  </Flex>
                </Flex>
              ))
          ) : (
            <Text>Please add phone number</Text>
          )}
        </Flex>
      </Flex>
    </DasboardContainer>
  );
}
export default ManagePhoneNumber;
