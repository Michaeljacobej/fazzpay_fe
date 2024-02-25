import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { Link as NavLink, useNavigate } from 'react-router-dom';

import { useMutateCheckEmail } from '@/api/auth';
// import { useMutateRegister } from '@/api/auth';
import AuthHeaderMobile from '@/components/auth/AuthHeaderMobile';
import AuthSide from '@/components/auth/AuthSide';
import HeaderText from '@/components/auth/HeaderText';
import HeaderTextMobile from '@/components/auth/HeaderTextMobile';
import HelmetTitle from '@/components/HelmetTitle';

function SignUp() {
  const navigate = useNavigate();
  const { mutate } = useMutateCheckEmail();
  const {
    handleSubmit,
    register,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

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
          navigate('/signup/pin', { state: data });
        },
        onError: (err) => {
          setError('email', { message: err.response.data.message });
        },
      },
    );
  };

  return (
    <>
      <HelmetTitle title="Sign Up" />
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
            heading="Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users"
            subHeading="Transfering money is eassier than ever, you can access Fazzpay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!"
          />
          <HeaderTextMobile
            heading="Sign Up"
            subHeading="Create your account to access Fazzpay."
          />
          <Flex flexDir="column" gap={12}>
            <FormControl isInvalid={errors.fullname}>
              <InputGroup>
                <Input
                  variant="flushed"
                  data-peer
                  borderColor={watch('name') ? 'cyan.600' : 'gray.300'}
                  focusBorderColor="cyan.600"
                  type="text"
                  placeholder="Enter your fullname"
                  {...register('name', {
                    required: 'Fullname is Required',
                    min: {
                      value: 4,
                      message: 'Fullname must be at least 4 characters',
                    },
                  })}
                />
                <InputLeftElement
                  pointerEvents="none"
                  color={failedIconColor('name')}
                  _peerFocus={{ color: 'cyan.600' }}>
                  <Icon as={FaUser} />
                </InputLeftElement>
              </InputGroup>
              {errors.name ? (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              ) : (
                <FormHelperText>Please enter your fullname</FormHelperText>
              )}
            </FormControl>
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
            <FormControl isInvalid={errors.password}>
              <InputGroup>
                <Input
                  variant="flushed"
                  data-peer
                  borderColor={watch('password') ? 'cyan.600' : 'gray.300'}
                  focusBorderColor="cyan.600"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Enter your password"
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
          </Flex>
          <Flex flexDir="column" gap="4">
            <Button
              type="submit"
              size="lg"
              border="2px"
              isLoading={isSubmitting}
              disabled={!(watch('name') && watch('email') && watch('password'))}
              color={
                watch('name') && watch('email') && watch('password')
                  ? 'white'
                  : 'gray.500'
              }
              bgColor={
                watch('name') && watch('email') && watch('password')
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
              Sign up
            </Button>
            <Text textAlign="center">
              Already have an account? Let&#39;s{' '}
              <Link as={NavLink} to="/login" color="cyan.600">
                Login
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default SignUp;
