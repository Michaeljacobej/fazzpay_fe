import {
  Button,
  Card,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import DashboardContainer from '@/components/dashboard/DashboardContainer';

function PaymentConfirmation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <DashboardContainer id="payment" name="Payment">
      <Flex
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        bg="white"
        rounded="3xl"
        px="4"
        boxShadow="md">
        <Flex flex={1} flexDirection="column" color="black">
          {/* <TopUpCard /> */}
          <Text fontSize="18px" fontWeight="700" ms="30px" pt="40px">
            Details
          </Text>
          <Flex flexDirection="column" mt="20px">
            <Card h="92px" bg="white">
              <Flex flexDirection="column" ms="20px">
                <Text fontSize="16px" fontWeight="400" mt="15px">
                  Amount
                </Text>
                <Text fontSize="22px" fontWeight="700" mt="10px">
                  {/* {rupiahFormat(location.state.amount)} */}
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex flexDirection="column" mt="20px">
            <Card h="92px" bg="white">
              <Flex flexDirection="column" ms="20px">
                <Text fontSize="16px" fontWeight="400" mt="15px">
                  Total Balances
                </Text>
                <Text fontSize="22px" fontWeight="700" mt="10px">
                  {/* {rupiahFormat(user.balance + location.state.amount)} */}
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex flexDirection="column" mt="20px">
            <Card h="92px" bg="white">
              <Flex flexDirection="column" ms="20px">
                <Text fontSize="16px" fontWeight="400" mt="15px">
                  Date & Time
                </Text>
                <Text fontSize="22px" fontWeight="700" mt="10px">
                  {/* {dateNow.toLocaleDateString()} -{' '}
                  {dateNow.toLocaleTimeString()} */}
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex flexDirection="column" mt="20px">
            <Card h="92px" bg="white">
              <Flex flexDirection="column" ms="20px">
                <Text fontSize="16px" fontWeight="400" mt="15px">
                  Branch Company
                </Text>
                <Text fontSize="22px" fontWeight="700" mt="10px">
                  {/* {location.state.branch} */}
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex flexDirection="row" pt="30px" />
        </Flex>
        <Flex flex={1} flexDirection="column-reverse" mt="51px" pb="30px">
          <Flex flexDirection="row-reverse">
            <Button
              colorScheme="cyan"
              h="57px"
              w="170px"
              borderRadius="12px"
              me="30px"
              onClick={onOpen}
              textColor="white">
              Continue
            </Button>
            <Modal
              isCentered
              onClose={onClose}
              isOpen={isOpen}
              motionPreset="slideInBottom">
              <ModalOverlay />
              <ModalContent h="417px" w="503px" maxWidth="600px">
                <ModalHeader mt="35px">Enter PIN to Transfer</ModalHeader>
                <ModalCloseButton me="42px" mt="42px" />
                <ModalBody padding="0px">
                  <Text fontSize="16px" fontWeight="400" px="24px">
                    Enter your 6 digits PIN for confirmation to <br /> continue
                    transferring money.
                  </Text>
                  <Flex direction="column" gap={10} p="40px">
                    <Flex justify="space-between" gap={[1, 7, 3, 5, 7]}>
                      <PinInput
                        size="lg"
                        placeholder="_"
                        focusBorderColor="cyan.600">
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                      </PinInput>
                    </Flex>
                  </Flex>
                  <Flex flex={1} flexDirection="row-reverse" mt="85px">
                    <Button
                      colorScheme="cyan"
                      h="57px"
                      w="170px"
                      borderRadius="12px"
                      me="30px">
                      Continue
                    </Button>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
        </Flex>
      </Flex>
    </DashboardContainer>
  );
}

export default PaymentConfirmation;
