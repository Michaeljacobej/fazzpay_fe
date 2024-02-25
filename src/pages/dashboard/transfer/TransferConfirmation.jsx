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
import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useMutateTransfer } from '@/api/transaction';
import { useWalletBalance } from '@/api/wallet';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { rupiahFormat } from '@/utils/helper';

function TransferConfirmation() {
  const { data } = useWalletBalance();
  const { mutate } = useMutateTransfer();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { contactId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPin, setCurrentPin] = useState('');

  // const contactDetail = useSelector((state) =>
  //   contactDetailSelector(state, Number(contactId)),
  // );

  const dateNow = useMemo(() => new Date(), []);

  const handleTransfer = () => {
    mutate(
      {
        to: contactId,
        amount: location.state.amount,
        notes: location.state.notes,
      },
      {
        onSuccess: () => {
          navigate(`/transfer/status/${contactId}`, {
            state: {
              amount: location.state.amount,
              notes: location.state.notes,
              success: true,
            },
          });
        },
      },
    );
  };

  return (
    <DashboardContainer id="transfer" name="Transfer">
      <Flex
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        bg="white"
        rounded="3xl"
        px="4"
        boxShadow="md">
        <Flex flex={1} flexDirection="column" color="black">
          <Text fontSize="18px" fontWeight="700" mt="25px">
            Transfer to
          </Text>
          {/* <CardReceiver item={contactDetail} /> */}
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
                  {rupiahFormat(location.state.amount)}
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex flexDirection="column" mt="20px">
            <Card h="92px" bg="white">
              <Flex flexDirection="column" ms="20px">
                <Text fontSize="16px" fontWeight="400" mt="15px">
                  Balance left
                </Text>
                <Text fontSize="22px" fontWeight="700" mt="10px">
                  {rupiahFormat((data?.balance ?? 0) - location.state.amount)}
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
                  {dateNow.toLocaleDateString()} -{' '}
                  {dateNow.toLocaleTimeString()}
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex flexDirection="column" mt="20px">
            <Card h="92px" bg="white">
              <Flex flexDirection="column" ms="20px">
                <Text fontSize="16px" fontWeight="400" mt="15px">
                  Notes
                </Text>
                <Text fontSize="22px" fontWeight="700" mt="10px">
                  {location.state.notes}
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
                        focusBorderColor="cyan.600"
                        value={currentPin}
                        onChange={(value) => setCurrentPin(value)}>
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
                      me="30px"
                      onClick={handleTransfer}>
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

export default TransferConfirmation;
