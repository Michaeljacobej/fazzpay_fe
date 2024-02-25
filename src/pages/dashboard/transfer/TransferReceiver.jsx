import {
  Button,
  Flex,
  Icon,
  Input,
  NumberInput,
  NumberInputField,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HiPencil } from 'react-icons/hi';
// import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { useWalletBalance } from '@/api/wallet';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { rupiahFormat } from '@/utils/helper';

function TransferReceiver() {
  const { contactId } = useParams();
  const { data } = useWalletBalance();
  const navigate = useNavigate();
  const toast = useToast();
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const handleContinue = () => {
    if (data?.balance < Number(amount)) {
      toast({
        title: "You don't have enough money",
        status: 'error',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
    }
    navigate(`/transfer/confirmation/${contactId}`, {
      state: { amount: Number(amount), notes },
    });
  };

  return (
    <DashboardContainer id="transfer" name="Transfer">
      <Flex
        flex="1"
        flexDir="column"
        justify="space-between"
        bg="white"
        boxShadow="md"
        rounded="3xl"
        px="4"
        py="6">
        <Flex flexDir="column">
          <Text fontSize="18px" fontWeight="700">
            Transfer Money
          </Text>
          {/* <CardReceiver item={contactDetail} /> */}
          <Text fontSize="16px" fontWeight="400" mt="40px">
            Type the amount you want to transfer and then <br />
            press continue to the next steps.
          </Text>
          <Flex
            h="80px"
            borderRadius="20px"
            mt="50px"
            color="black"
            justifyContent="center"
            alignContent="center"
            alignItems="center">
            <NumberInput
              border="0"
              outline="0"
              focusBorderColor="transparent"
              color="cyan.600"
              value={amount}
              onChange={(value) => setAmount(value)}>
              <NumberInputField
                htmlSize={20}
                border="0"
                width="auto"
                placeholder="0.00"
                textAlign="center"
                fontSize="42px"
                fontWeight="700px"
              />
            </NumberInput>
          </Flex>
          <Text textAlign="center" fontSize="16px" fontWeight="700" mt="23px">
            {rupiahFormat(data?.balance)} Available
          </Text>
          <Flex
            flexDirection="row"
            color="black"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            mt="60px">
            <Icon as={HiPencil} fontSize="3xl" color="gray.300" />
            <Input
              variant="flushed"
              focusBorderColor="cyan.600"
              type="note"
              placeholder="Add Some Note"
              fontSize="16px"
              fontWeight="400px"
              htmlSize={30}
              width="auto"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Flex>
        </Flex>
        <Button
          size="lg"
          px="12"
          colorScheme="cyan"
          alignSelf="end"
          textColor="white"
          onClick={handleContinue}>
          Continue
        </Button>
      </Flex>
    </DashboardContainer>
  );
}

export default TransferReceiver;
