import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import AuthHeaderMobile from '@/components/auth/AuthHeaderMobile';
import AuthSide from '@/components/auth/AuthSide';
import HeaderText from '@/components/auth/HeaderText';
import HeaderTextMobile from '@/components/auth/HeaderTextMobile';
import HelmetTitle from '@/components/HelmetTitle';

function ResetPassword() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    handleSubmit,
    register,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cPasswordVisible, setCPasswordVisible] = useState(false);

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

  const onSubmit = () => {
    // dispatch(resetPassword({ email: state.email, password: data.password }));
    navigate('/reset/success', { replace: true, state: { success: true } });
  };

  if (!state?.email) {
    return <Navigate to="/forgot" replace />;
  }
  return (
    <>
      <HelmetTitle title="Reset Password" />
      <Flex
        flex="1"
        overflowY="hidden"
        bgColor="gray.100"
        flexDir={{ base: 'column', md: 'row' }}>
        <AuthSide />
        <AuthHeaderMobile />
        <Flex
          as="form"
          flex={{ base: 0, md: 1 }}
          h="100vh"
          overflowY="scroll"
          roundedTop={{ base: '3xl', md: 'none' }}
          bgColor="white"
          px={{ base: 4, md: 12 }}
          py={{ base: 8, md: 28 }}
          gap={{ base: 8, md: 12 }}
          flexDir="column"
          justify={{ base: 'space-between', md: 'start' }}
          onSubmit={handleSubmit(onSubmit)}>
          <HeaderText
            heading="Did You Forgot Your Password? Don't Worry, You Can Reset Your Password In a Minutes."
            subHeading="Create and confirm your new password so you can login to Zwallet."
          />
          <HeaderTextMobile
            heading="Reset Password"
            subHeading="Enter your Zwallet e-mail so we can send you a password reset link."
          />
          <Flex flexDir="column" gap={12}>
            <FormControl isInvalid={errors.token}>
              <InputGroup>
                <Input
                  variant="flushed"
                  data-peer
                  borderColor={watch('token') ? 'cyan.600' : 'gray.300'}
                  focusBorderColor="cyan.600"
                  placeholder="Input token"
                  {...register('token', {
                    required: 'Token is required',
                  })}
                />
                <InputLeftElement
                  pointerEvents="none"
                  color={failedIconColor('token')}
                  _peerFocus={{ color: 'cyan.600' }}>
                  <LockIcon />
                </InputLeftElement>
              </InputGroup>
              {errors.token ? (
                <FormErrorMessage>{errors.token.message}</FormErrorMessage>
              ) : (
                <FormHelperText>Token sent to your email</FormHelperText>
              )}
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <InputGroup>
                <Input
                  variant="flushed"
                  data-peer
                  borderColor={watch('password') ? 'cyan.600' : 'gray.300'}
                  focusBorderColor="cyan.600"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Create new password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />
                <InputLeftElement
                  pointerEvents="none"
                  color={failedIconColor('password')}
                  _peerFocus={{ color: 'cyan.600' }}>
                  <LockIcon />
                </InputLeftElement>
                <InputRightElement
                  cursor="pointer"
                  rounded="full"
                  color="gray.300"
                  _hover={{ background: '#0003', color: 'cyan.600' }}
                  onClick={() => setPasswordVisible((val) => !val)}>
                  {passwordVisible ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
              </InputGroup>
              {errors.password ? (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              ) : (
                <FormHelperText>
                  Please enter a password with at least 6 characters, including
                  1 uppercase letter and 1 number.
                </FormHelperText>
              )}
            </FormControl>
            <FormControl isInvalid={errors.cpassword}>
              <InputGroup>
                <Input
                  variant="flushed"
                  data-peer
                  borderColor={watch('cpassword') ? 'cyan.600' : 'gray.300'}
                  focusBorderColor="cyan.600"
                  type={cPasswordVisible ? 'text' : 'password'}
                  placeholder="Confirm your new password"
                  {...register('cpassword', {
                    required: 'Password is required',
                    validate: (value) => {
                      const { password } = getValues();
                      return password === value || 'Passwords should match!';
                    },
                  })}
                />
                <InputLeftElement
                  pointerEvents="none"
                  color={failedIconColor('cpassword')}
                  _peerFocus={{ color: 'cyan.600' }}>
                  <LockIcon />
                </InputLeftElement>
                <InputRightElement
                  cursor="pointer"
                  rounded="full"
                  color="gray.300"
                  _hover={{ background: '#0003', color: 'cyan.600' }}
                  onClick={() => setCPasswordVisible((val) => !val)}>
                  {cPasswordVisible ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
              </InputGroup>
              {errors.cpassword ? (
                <FormErrorMessage>{errors.cpassword.message}</FormErrorMessage>
              ) : (
                <FormHelperText>
                  To confirm your password, please re-enter your new password
                </FormHelperText>
              )}
            </FormControl>
          </Flex>
          <Flex flexDir="column" gap="4">
            <Button
              type="submit"
              size="lg"
              border="2px"
              isLoading={isSubmitting}
              disabled={!(watch('password') && watch('cpassword'))}
              color={
                watch('password') && watch('cpassword') ? 'white' : 'gray.500'
              }
              bgColor={
                watch('password') && watch('cpassword')
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
              Confirm
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ResetPassword;
