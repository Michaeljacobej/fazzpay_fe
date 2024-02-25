import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link as NavLink, useNavigate } from 'react-router-dom';

import { useMutateLogin } from '@/api/auth';
import AuthHeaderMobile from '@/components/auth/AuthHeaderMobile';
import AuthSide from '@/components/auth/AuthSide';
import HeaderText from '@/components/auth/HeaderText';
import HeaderTextMobile from '@/components/auth/HeaderTextMobile';
import HelmetTitle from '@/components/HelmetTitle';
// import useAuthCheck from '@/hooks/useAuthCheck';
import { doLogin } from '@/store/reducer/users';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  // const { checkUser } = useAuthCheck();
  const { mutate } = useMutateLogin();
  const {
    handleSubmit,
    register,
    watch,
    // setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [loginError, setLoginError] = useState(null);

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

  const onSubmit = ({ email, password }) => {
    mutate(
      { email, password },
      {
        onSuccess: (res) => {
          navigate('/home');
          toast({
            title: 'Login success',
            status: 'success',
            position: 'top',
            duration: 9000,
            isClosable: true,
          });
          dispatch(doLogin(res));
        },
        onError: () => {
          // An error happened!
          toast({
            title: 'Wrong email and password',
            status: 'error',
            position: 'top',
            duration: 9000,
            isClosable: true,
          });
        },
      },
    );
  };

  return (
    <>
      <HelmetTitle title="Login" />
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
            heading="Login"
            subHeading="Login to your existing account to access all the features in Fazzpay."
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
              <Flex py="6" justifyContent="end">
                <Link as={NavLink} textAlign="right" to="/forgot">
                  Forgot password?
                </Link>
              </Flex>
            </FormControl>
            {/* {loginError && (
              <Text color="red.500">
                Login Failed: Your email or password is incorrect
              </Text>
            )} */}
          </Flex>
          <Flex flexDir="column" gap="4">
            <Button
              type="submit"
              size="lg"
              border="2px"
              isLoading={isSubmitting}
              disabled={!(watch('email') && watch('password'))}
              color={watch('email') && watch('password') ? 'white' : 'gray.500'}
              bgColor={
                watch('email') && watch('password') ? 'cyan.600' : 'gray.200'
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
              Login
            </Button>
            <Text textAlign="center">
              Don&#39;t have an account? Let&#39;s{' '}
              <Link as={NavLink} to="/signup" color="cyan.600">
                Sign Up
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Login;
