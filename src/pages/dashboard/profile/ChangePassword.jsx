import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useMutateChangePassword } from '@/api/account';
import DasboardContainer from '@/components/dashboard/DashboardContainer';

function ChangePassword() {
  // const dispatch = useDispatch();
  const { mutate } = useMutateChangePassword();
  const navigate = useNavigate();
  const toast = useToast();
  const [passwordVisible, setPasswordVisible] = useState();
  const [passwordVisible2, setPasswordVisible2] = useState();
  const [passwordVisible3, setPasswordVisible3] = useState();

  const {
    handleSubmit,
    register,
    watch,
    getValues,
    setError,
    formState: { errors, isSubmitting },
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

  const onSubmit = async ({ password, newPassword }) => {
    // const checkOldPassword = checkChangeOldPassword(data.currentPassword);
    // if (checkOldPassword.success) {
    // if (true) {
    //   // dispatch(changePassword(data.newPassword));
    //   navigate('/profile', { state: data });
    //   toast({
    //     title: 'Change Password Success',
    //     status: 'success',
    //     position: 'top',
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // }
    // setError('currentPassword', { message: 'Wrong current password' });

    mutate(
      { password, newPassword },
      {
        onSuccess: () => {
          navigate('/profile');
          toast({
            title: 'Change Password Success',
            status: 'success',
            position: 'top',
            duration: 9000,
            isClosable: true,
          });
        },
        onError: () => {
          // setError('password', { message: err.response.data.message });
          setError('password', { message: 'Wrong current password' });
        },
      },
    );
  };
  return (
    <DasboardContainer id="profile" name="Change Password">
      <Flex
        flex="1"
        direction="column"
        gap={20}
        px="10"
        py="10"
        bg="white"
        borderRadius="20px"
        boxShadow="md">
        <Flex direction="column" gap={4}>
          <Text fontSize="lg" fontWeight="700">
            Change Password
          </Text>
          <Text color="rgba(122, 120, 134, 1)">
            You must enter your current password and then
            <br />
            type your new password twice.
          </Text>
        </Flex>

        <Flex
          as="form"
          direction="column"
          gap={12}
          onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.password}>
            <InputGroup>
              <InputLeftElement
                color={failedIconColor('password')}
                pointerEvents="none"
                _peerFocus={{ color: 'cyan.600' }}>
                <LockIcon />
              </InputLeftElement>
              <Input
                variant="flushed"
                data-peer
                borderColor={watch('password') ? 'cyan.600' : 'gray.300'}
                focusBorderColor="cyan.600"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Current password"
                {...register('password', {
                  required: 'Current Password is Required',
                })}
              />
              <InputRightElement
                color="gray.300"
                cursor="pointer"
                rounded="full"
                _hover={{ background: '#0003', color: 'cyan.600' }}
                onClick={() => setPasswordVisible((val) => !val)}>
                {passwordVisible ? <ViewIcon /> : <ViewOffIcon />}
              </InputRightElement>
            </InputGroup>
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.newPassword}>
            <InputGroup>
              <InputLeftElement
                color={failedIconColor('newPassword')}
                pointerEvents="none"
                _peerFocus={{ color: 'cyan.600' }}>
                <LockIcon />
              </InputLeftElement>
              <Input
                variant="flushed"
                data-peer
                borderColor={watch('newPassword') ? 'cyan.600' : 'gray.300'}
                focusBorderColor="cyan.600"
                type={passwordVisible2 ? 'text' : 'password'}
                placeholder="New password"
                {...register('newPassword', {
                  required: 'New Password is Required',
                  validate: (value) => {
                    const { repeatNewPassword } = getValues();
                    return (
                      repeatNewPassword === value || 'Passwords should match!'
                    );
                  },
                })}
              />
              <InputRightElement
                color="gray.300"
                cursor="pointer"
                rounded="full"
                _hover={{ background: '#0003', color: 'cyan.600' }}
                onClick={() => setPasswordVisible2((val) => !val)}>
                {passwordVisible2 ? <ViewIcon /> : <ViewOffIcon />}
              </InputRightElement>
            </InputGroup>
            {errors.newPassword && (
              <FormErrorMessage>{errors.newPassword.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={errors.repeatNewPassword}>
            <InputGroup>
              <InputLeftElement
                color={failedIconColor('repeatNewPassword')}
                pointerEvents="none"
                _peerFocus={{ color: 'cyan.600' }}>
                <LockIcon />
              </InputLeftElement>
              <Input
                variant="flushed"
                data-peer
                borderColor={
                  watch('repeatNewPassword') ? 'cyan.600' : 'gray.300'
                }
                focusBorderColor="cyan.600"
                type={passwordVisible3 ? 'text' : 'password'}
                placeholder="Repeat new password"
                {...register('repeatNewPassword', {
                  required: 'Repeat New Password is Required',
                  validate: (value) => {
                    const { newPassword } = getValues();
                    return newPassword === value || 'Passwords should match!';
                  },
                })}
              />
              <InputRightElement
                cursor="pointer"
                rounded="full"
                color="gray.300"
                _hover={{ background: '#0003', color: 'cyan.600' }}
                onClick={() => setPasswordVisible3((val) => !val)}>
                {passwordVisible3 ? <ViewIcon /> : <ViewOffIcon />}
              </InputRightElement>
            </InputGroup>
            {errors.repeatNewPassword && (
              <FormErrorMessage>
                {errors.repeatNewPassword.message}
              </FormErrorMessage>
            )}
          </FormControl>

          <Button
            type="submit"
            isLoading={isSubmitting}
            size="lg"
            disabled={
              !(
                watch('password') &&
                watch('newPassword') &&
                watch('repeatNewPassword')
              )
            }
            color={
              watch('password') &&
              watch('newPassword') &&
              watch('repeatNewPassword')
                ? 'white'
                : 'gray.500'
            }
            bgColor={
              watch('password') &&
              watch('newPassword') &&
              watch('repeatNewPassword')
                ? 'cyan.600'
                : 'gray.200'
            }
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
            Change Password
          </Button>
        </Flex>
      </Flex>
    </DasboardContainer>
  );
}
export default ChangePassword;
