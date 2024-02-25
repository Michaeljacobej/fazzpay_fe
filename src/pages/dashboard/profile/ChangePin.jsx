import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useMutateChangePin, useMutateVerifyPin } from '@/api/wallet';
import DasboardContainer from '@/components/dashboard/DashboardContainer';

function ChangePin() {
  const [currentPin, setCurrentPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [pinSuccess, setPinSuccess] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const toast = useToast();
  const { mutate: mutateVerifyPin } = useMutateVerifyPin();
  const { mutate: mutateChangePin } = useMutateChangePin();

  const {
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const inputFieldStyles = {
    flex: 1,
    fontWeight: '700',
    py: [4, 6, 8],
    fontSize: ['12px', '24px', '30px'],
    ":not([value=''])": { borderColor: 'cyan.600' },
  };

  const onContinue = () => {
    mutateVerifyPin(
      { pin: currentPin },
      {
        onSuccess: (res) => {
          setPinSuccess(res.data);
        },

        onError: (err) => {
          setError('currentPin', { message: err.response.data.message });
        },
      },
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutateChangePin(
      { pin: newPin },
      {
        onSuccess: () => {
          navigate('/profile');
          toast({
            title: 'Change PIN Success',
            status: 'success',
            position: 'top',
            duration: 9000,
            isClosable: true,
          });
        },
      },
    );
  };

  return (
    <DasboardContainer id="profile" name="Change PIN">
      {!pinSuccess ? (
        <Flex
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
            <Text fontSize="lg" fontWeight="700">
              Change PIN
            </Text>
            <Text color="rgba(122, 120, 134, 1)">
              Enter your current 6 digits Fazzpay PIN below to
              <br />
              continue to the next steps.
            </Text>
          </Flex>
          <Flex direction="column" gap={10}>
            <FormControl isInvalid={errors.currentPin}>
              <Flex justify="space-between" gap={[1, 4, 3, 5, 7]}>
                <PinInput
                  size="lg"
                  placeholder="_"
                  focusBorderColor="cyan.600"
                  value={currentPin}
                  onChange={(value) => setCurrentPin(value)}>
                  <PinInputField sx={inputFieldStyles} />
                  <PinInputField sx={inputFieldStyles} />
                  <PinInputField sx={inputFieldStyles} />
                  <PinInputField sx={inputFieldStyles} />
                  <PinInputField sx={inputFieldStyles} />
                  <PinInputField sx={inputFieldStyles} />
                </PinInput>
              </Flex>
              {errors.currentPin && (
                <FormErrorMessage>{errors.currentPin.message}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              size="lg"
              isLoading={isSubmitting}
              onClick={onContinue}
              disabled={currentPin.length < 6}
              color={currentPin.length < 6 ? 'gray.500' : 'white'}
              bgColor={currentPin.length < 6 ? 'gray.200' : 'cyan.600'}
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
              Continue
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex
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
            <Text fontSize="lg" fontWeight="700">
              Change PIN
            </Text>
            <Text color="rgba(122, 120, 134, 1)">
              Type your new 6 digits security PIN to use in
              <br />
              Fazzpay..
            </Text>
          </Flex>
          <Flex
            as="form"
            direction="column"
            gap={10}
            px="40"
            onSubmit={onSubmit}>
            <Flex justify="space-between" gap={[1, 7, 3, 5, 7]}>
              <PinInput
                size="lg"
                placeholder="_"
                focusBorderColor="cyan.600"
                value={newPin}
                onChange={(value) => setNewPin(value)}>
                <PinInputField sx={inputFieldStyles} />
                <PinInputField sx={inputFieldStyles} />
                <PinInputField sx={inputFieldStyles} />
                <PinInputField sx={inputFieldStyles} />
                <PinInputField sx={inputFieldStyles} />
                <PinInputField sx={inputFieldStyles} />
              </PinInput>
            </Flex>
            <Button
              type="submit"
              size="lg"
              isLoading={isSubmitting}
              disabled={newPin.length < 6}
              color={newPin.length < 6 ? 'gray.500' : 'white'}
              bgColor={newPin.length < 6 ? 'gray.200' : 'cyan.600'}
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
              Change PIN
            </Button>
          </Flex>
        </Flex>
      )}
    </DasboardContainer>
  );
}
export default ChangePin;
