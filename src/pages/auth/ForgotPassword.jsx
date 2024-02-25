import { EmailIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useMutateForgotPassword } from '@/api/auth';
import AuthHeaderMobile from '@/components/auth/AuthHeaderMobile';
import AuthSide from '@/components/auth/AuthSide';
import HeaderText from '@/components/auth/HeaderText';
import HeaderTextMobile from '@/components/auth/HeaderTextMobile';
import HelmetTitle from '@/components/HelmetTitle';
// import useAuthCheck from '@/hooks/useAuthCheck';

function ForgotPassword() {
  const navigate = useNavigate();
  const { mutate } = useMutateForgotPassword();
  const {
    handleSubmit,
    register,
    watch,
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

  const onSubmit = (data) => {
    mutate(
      { email: data.email },
      {
        onSuccess: () => {
          navigate('/reset', { replace: true, state: data });
        },
        onError: (err) => {
          setError('email', { message: err.response.data.message });
        },
      },
    );
  };

  return (
    <>
      <HelmetTitle title="Forgot Password" />
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
            subHeading="To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens."
          />
          <HeaderTextMobile
            heading="Reset Password"
            subHeading="Enter your Fazzpay e-mail so we can send you a password reset link."
          />
          <Flex flexDir="column" gap={12}>
            <FormControl isInvalid={errors.email}>
              <InputGroup>
                <Input
                  variant="flushed"
                  data-peer
                  borderColor={watch('email') ? 'cyan.600' : 'gray.300'}
                  focusBorderColor="cyan.600"
                  placeholder="Enter your e-mail"
                  {...register('email', {
                    required: 'Email is Required',
                    pattern: {
                      value: /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
                      message: 'Email must be a valid email',
                    },
                  })}
                />
                <InputLeftElement
                  pointerEvents="none"
                  color={failedIconColor('email')}
                  _peerFocus={{ color: 'cyan.600' }}>
                  <EmailIcon />
                </InputLeftElement>
              </InputGroup>
              {errors.email ? (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              ) : (
                <FormHelperText>Please enter your email address</FormHelperText>
              )}
            </FormControl>
          </Flex>
          <Flex flexDir="column" gap="4">
            <Button
              type="submit"
              size="lg"
              border="2px"
              isLoading={isSubmitting}
              disabled={!watch('email')}
              color={watch('email') ? 'white' : 'gray.500'}
              bgColor={watch('email') ? 'cyan.600' : 'gray.200'}
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

export default ForgotPassword;
