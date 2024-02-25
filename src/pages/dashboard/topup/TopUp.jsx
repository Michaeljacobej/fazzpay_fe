import {
  Button,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { useMutateDeposit } from '@/api/deposit';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import TopUpCard from '@/components/dashboard/TopUpCard';
import TopUpHeader from '@/components/dashboard/TopUpHeader';
// import { rupiahFormat } from '@/utils/helper';

function TopUp() {
  // const { mutate } = useMutateDeposit();

  const [amount, setAmount] = useState('');
  const [branch, setBranch] = useState('');
  const navigate = useNavigate();
  // const user = useSelector((state) => state.users.user);
  const handleContinue = () => {
    navigate(`/topup/confirmation/`, {
      state: { amount: Number(amount), branch },
    });
  };

  // const onContinue = ({ value }) => {
  //   mutate(
  //     { value },
  //     {
  //       onSuccess: () => {
  //         navigate('/topup/confirmation/');
  //       },
  //     },
  //   );
  // };

  return (
    <DashboardContainer id="topup" name="Top Up">
      <Flex flex="1" alignItems="stretch" flexDir="column" gap="4">
        <TopUpHeader />
        <TopUpCard />

        <Flex
          flex="1"
          px="8"
          py="4"
          bg="white"
          rounded="3xl"
          justifyContent="space-between"
          boxShadow="md"
          flexDir="column">
          <Flex flexDir="column">
            <Text fontSize="16px" fontWeight="400" mt="40px">
              Type the amount you want to top up to your account and then <br />
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
              {/* {rupiahFormat(user.balance)} Available */}
            </Text>
            <Flex
              flexDirection="row"
              color="black"
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              mt="40px">
              <Input
                variant="flushed"
                focusBorderColor="cyan.600"
                type="note"
                textAlign="center"
                placeholder="Add your branch company"
                fontSize="16px"
                fontWeight="400px"
                htmlSize={30}
                width="auto"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </Flex>
          </Flex>
          <Button
            mt="80px"
            size="lg"
            px="12"
            colorScheme="cyan"
            alignSelf="end"
            textColor="white"
            onClick={handleContinue}>
            Continue
          </Button>
        </Flex>
      </Flex>
    </DashboardContainer>
  );
}

export default TopUp;
