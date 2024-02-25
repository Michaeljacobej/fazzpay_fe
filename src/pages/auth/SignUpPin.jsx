import { Button, Flex, Link, PinInput, PinInputField } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  Link as NavLink,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { useMutateRegister } from '@/api/auth';
import AuthHeaderMobile from '@/components/auth/AuthHeaderMobile';
import AuthSide from '@/components/auth/AuthSide';
import HeaderText from '@/components/auth/HeaderText';
import HeaderTextMobile from '@/components/auth/HeaderTextMobile';
import HelmetTitle from '@/components/HelmetTitle';

function SignUpPin() {
  const { mutate, isLoading } = useMutateRegister();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [pin, setPin] = useState('');

  const inputFieldStyles = {
    flex: 1,
    fontWeight: '700',
    py: [4, 6, 8],
    fontSize: ['12px', '24px', '30px'],
    ":not([value=''])": { borderColor: 'cyan.600' },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(
      { ...state, pin },
      {
        onSuccess: () => {
          navigate('/signup/success', { state: { success: true } });
        },
      },
    );
  };

  if (!state) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <>
      <HelmetTitle title="Create Pin" />
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
          px={{ base: 4, md: 12 }}
          py={{ base: 8, md: 28 }}
          flexDir="column"
          roundedTop={{ base: '3xl', md: 'none' }}
          bgColor="white"
          justify="space-between"
          onSubmit={onSubmit}
          gap={{ base: 8, md: 12 }}>
          <HeaderText
            heading="Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself."
            subHeading="Create 6 digits pin to secure all your money and your data in Fazzpay app. Keep it secret and don't tell anyone about your Fazzpay account password and the PIN."
          />
          <HeaderTextMobile
            heading="Create Security PIN"
            subHeading="Create a PIN that&#39;s contain 6 digits number for security purpose in Fazzpay."
          />
          <Flex justify="space-between" gap={[1, 7, 3, 5, 7]}>
            <PinInput
              placeholder="_"
              focusBorderColor="cyan.600"
              isDisabled={isLoading}
              value={pin}
              onChange={(value) => setPin(value)}>
              <PinInputField sx={inputFieldStyles} />
              <PinInputField sx={inputFieldStyles} />
              <PinInputField sx={inputFieldStyles} />
              <PinInputField sx={inputFieldStyles} />
              <PinInputField sx={inputFieldStyles} />
              <PinInputField sx={inputFieldStyles} />
            </PinInput>
          </Flex>
          <Flex flexDir="column" gap="6">
            <Button
              type="submit"
              size="lg"
              border="2px"
              isLoading={isLoading}
              disabled={pin.length < 6 || isLoading}
              color={pin.length < 6 ? 'gray.500' : 'white'}
              bgColor={pin.length < 6 ? 'gray.200' : 'cyan.600'}
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
            <Link
              as={NavLink}
              to={-1}
              replace
              alignSelf="center"
              color="cyan.600">
              Go Back
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default SignUpPin;
