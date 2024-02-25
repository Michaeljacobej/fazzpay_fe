import { PhoneIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useMutateRefreshRedux } from '@/api/account';
import { useMutateAddUserPhone } from '@/api/phone';
import DasboardContainer from '@/components/dashboard/DashboardContainer';

function AddPhoneNumber() {
  const { mutate: mutateRefresh } = useMutateRefreshRedux();
  const { mutate, isLoading } = useMutateAddUserPhone();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const failedIconColor = useCallback(
    (field) => {
      if (errors[field]) {
        return 'red.500';
      }
      if (watch(field)) {
        return 'cyan.600';
      }
      return 'gray.300';
    },
    [errors, watch],
  );

  const onSubmit = ({ phone }) => {
    mutate(
      { phone },
      {
        onSuccess: () => {
          mutateRefresh(null, {
            onSuccess: () => {
              navigate('/profile/phone-number');
            },
          });
        },
      },
    );
  };

  return (
    <DasboardContainer id="profile" name="Manage Phone Number">
      <Flex
        w="100%"
        direction="column"
        gap={20}
        px="10"
        py="10"
        pb="300"
        bg="white"
        borderRadius="20px"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)">
        <Flex direction="column" gap={4}>
          <Text fontSize="lg" fontWeight="700">
            Add Phone Number
          </Text>
          <Text color="rgba(122, 120, 134, 1)">
            Add at least one phone number for the transfer
            <br />
            ID so you can start transfering your money to
            <br />
            another user.
          </Text>
        </Flex>
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          gap={10}
          direction="column"
          justifyContent="space-between"
          px="10"
          py="6">
          <FormControl isInvalid={errors.phone}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color={failedIconColor('phone')}
                _peerFocus={{ color: 'cyan.600' }}>
                <PhoneIcon />
              </InputLeftElement>
              <Input
                variant="flushed"
                data-peer
                borderColor={watch('phone') ? 'cyan.600' : 'gray.300'}
                focusBorderColor="cyan.600"
                type="phone"
                placeholder="Enter your phone number"
                {...register('phone', {
                  required: 'Phone Number is Required',
                  pattern: {
                    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
                    message: 'Invalid phone number.',
                  },
                })}
              />
            </InputGroup>
            {errors.phone && (
              <FormErrorMessage>{errors.phone.message}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            isLoading={isLoading}
            type="submit"
            size="lg"
            disabled={!watch('phone') || isLoading}
            color={watch('phone') ? 'white' : 'gray.500'}
            bgColor={watch('phone') ? 'cyan.600' : 'gray.200'}
            _disabled={{
              color: 'gray.500',
              bgColor: 'gray.300',
              borderColor: 'gray.300',
            }}
            _hover={{
              _disabled: {
                color: 'gray.500',
                bgColor: 'gray.300',
                borderColor: 'gray.300',
              },
              transitionDuration: '0.2s',
              transitionProperty: 'all',
              transitionTimingFunction: 'ease-in-out',
              color: 'cyan.600',
              bgColor: 'white',
              border: '2px',
              borderColor: 'cyan.600',
            }}>
            Add Phone Number
          </Button>
        </Flex>
      </Flex>
    </DasboardContainer>
  );
}
export default AddPhoneNumber;
