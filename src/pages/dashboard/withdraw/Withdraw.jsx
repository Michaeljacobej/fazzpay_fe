import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  PinInput,
  PinInputField,
  Select,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useWalletBalance } from '@/api/wallet';
import { useMethodWithdrawal, useMutateWithdrawal } from '@/api/withdrawal';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { rupiahFormat } from '@/utils/helper';

function Withdraw() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const { data: dataMethod, isLoading: isLoadingMethod } =
    useMethodWithdrawal();
  const { data: dataBalance } = useWalletBalance();
  const { mutate } = useMutateWithdrawal();

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      pin: '',
    },
  });

  const onSubmit = async ({ pin, methodName, amount }) => {
    mutate(
      { pin, methodName, amount },
      {
        onSuccess: (res) => {
          navigate('/home');
          toast({
            title: 'Withdraw success',
            status: res.message,
            position: 'top',
            duration: 9000,
            isClosable: true,
          });
        },
        onError: (err) => {
          if (!(err.response.data.message === 'Wrong PIN')) {
            setError('amount', { message: err.response.data.message });
            onClose();
          } else {
            setError('methodName', { message: err.response.data.message });
          }
        },
      },
    );
  };

  return (
    <DashboardContainer id="withdraw" name="Withdraw">
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
            Withdraw
          </Text>
          <Text color="rgba(122, 120, 134, 1)">
            Withdraw your balance via the method provided.
          </Text>
        </Flex>
        <Flex
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          direction="column"
          gap={12}>
          <FormControl>
            <Stack>
              <Select
                name="methodName"
                variant="flushed"
                disabled={isLoadingMethod}
                placeholder={isLoadingMethod ? 'loading' : 'Select Method'}
                {...register('methodName', {
                  required: 'Method is required',
                })}>
                {dataMethod?.map((v) => {
                  return (
                    <option key={v.id} value={v.name}>
                      {v.name}
                    </option>
                  );
                })}
              </Select>
            </Stack>
          </FormControl>
          <FormControl isInvalid={errors.amount}>
            <Flex
              h="80px"
              borderRadius="20px"
              mt="50px"
              color="black"
              justifyContent="center"
              alignContent="center"
              alignItems="center">
              <NumberInput
                name="amount"
                border="0"
                outline="0"
                focusBorderColor="transparent"
                color="cyan.600">
                <NumberInputField
                  htmlSize={20}
                  border="0"
                  width="auto"
                  placeholder="0.00"
                  textAlign="center"
                  fontSize="42px"
                  fontWeight="700px"
                  {...register('amount', {
                    required: 'Amount is required',
                  })}
                />
              </NumberInput>
            </Flex>
            {errors.amount && (
              <FormErrorMessage>{errors.amount.message}</FormErrorMessage>
            )}
          </FormControl>
          <Text textAlign="center" fontSize="16px" fontWeight="700" mt="23px">
            {rupiahFormat(dataBalance?.balance)} Available
          </Text>
          <Button
            onClick={onOpen}
            size="lg"
            disabled={!(watch('methodName') && watch('amount'))}
            _disabled={{
              color: 'gray.500',
              bgColor: 'gray.300',
              borderColor: 'gray.300',
            }}
            color={
              watch('methodName') && watch('amount') ? 'white' : 'gray.500'
            }
            bgColor={
              watch('methodName') && watch('amount') ? 'cyan.600' : 'gray.200'
            }
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

          <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Enter PIN to Withdrawal</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontSize="16px" fontWeight="400">
                  Enter your 6 digits PIN for confirmation to <br /> continue
                  withdrawal money.
                </Text>
                <Flex
                  as="form"
                  onSubmit={handleSubmit(onSubmit)}
                  direction="column"
                  gap={10}
                  p="40px">
                  <FormControl isInvalid={errors.methodName}>
                    <Flex justify="space-between" gap={[1, 7, 3, 5, 7]}>
                      <PinInput
                        name="pin"
                        size="lg"
                        placeholder="_"
                        focusBorderColor="cyan.600"
                        value={watch('pin')}
                        onChange={(value) => setValue('pin', value)}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </Flex>
                    {errors.methodName && (
                      <FormErrorMessage>
                        {errors.methodName.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <Flex flex={1} flexDirection="row-reverse" mt="85px">
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      disabled={watch('pin').length < 6}
                      color={watch('pin').length < 6 ? 'gray.500' : 'white'}
                      bgColor={
                        watch('pin').length < 6 ? 'gray.200' : 'cyan.600'
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
                        border: '2px',
                        borderColor: 'cyan.600',
                      }}
                      h="57px"
                      w="170px"
                      borderRadius="12px">
                      Withdraw
                    </Button>
                  </Flex>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </DashboardContainer>
  );
}

export default Withdraw;
