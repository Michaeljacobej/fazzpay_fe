import { Button, Flex, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import AuthHeaderMobile from '@/components/auth/AuthHeaderMobile';
import AuthSide from '@/components/auth/AuthSide';
import HeaderText from '@/components/auth/HeaderText';
import HeaderTextMobile from '@/components/auth/HeaderTextMobile';
import HelmetTitle from '@/components/HelmetTitle';

function ResetPasswordSuccess() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSubmit = () => {
    navigate('/login', { replace: true });
  };

  if (!state?.success) {
    return <Navigate to="/forgot" replace />;
  }

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
          flex={{ base: 0, md: 1 }}
          px={{ base: 4, md: 12 }}
          py={{ base: 8, md: 28 }}
          flexDir="column"
          roundedTop={{ base: '3xl', md: 'none' }}
          bgColor="white"
          justify={{ base: 'space-between', md: 'start' }}
          gap={{ base: 12, md: 12 }}>
          <Icon
            as={FaCheckCircle}
            color="green.500"
            fontSize="7xl"
            mt="8"
            alignSelf={{ base: 'center', md: 'start' }}
          />
          <HeaderText
            heading="Your Password Successfully Reset"
            subHeading="Your account is now secure and you can log in with your new password."
          />
          <HeaderTextMobile
            heading="Password Successfully Reset"
            subHeading="Congratulations, you have successfully reset your password! This means that your account is now secure and you can log in using your new password. Please be sure to keep your password safe and do not share it with anyone."
          />
          <Button
            size="lg"
            border="2px"
            color="white"
            bgColor="cyan.600"
            _hover={{
              transitionDuration: '0.2s',
              transitionProperty: 'all',
              transitionTimingFunction: 'ease-in-out',
              color: 'cyan.600',
              bgColor: 'white',
              border: '2px',
              borderColor: 'cyan.600',
            }}
            onClick={onSubmit}>
            Login Now
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default ResetPasswordSuccess;
