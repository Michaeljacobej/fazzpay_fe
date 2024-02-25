import { CheckIcon, CloseIcon, DownloadIcon } from '@chakra-ui/icons';
import { Button, Card, Circle, Flex, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useWalletBalance } from '@/api/wallet';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import TopUpCard from '@/components/dashboard/TopUpCard';
import { rupiahFormat } from '@/utils/helper';

function TopUpStatus() {
  const { data } = useWalletBalance();
  // const user = useSelector((state) => state.users.user);
  const location = useLocation();
  const isSuccess = useMemo(() => location.state.success, [location]);
  const dateNow = useMemo(() => new Date(), []);
  return (
    <DashboardContainer id="topup" name="Top Up">
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        bg="white"
        boxShadow="md"
        borderRadius="20px"
        width="100%"
        rounded="25px"
        p="30px">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="60px">
          {isSuccess ? (
            <Circle size="70px" bg="green.300" color="white">
              <CheckIcon w="28px" h="19.25px" />
            </Circle>
          ) : (
            <Circle size="70px" bg="red" color="white">
              <CloseIcon w="28px" h="19.25px" />
            </Circle>
          )}
          <Text pt="30px" fontWeight="700" fontSize="22px">
            Top Up {isSuccess ? 'Success' : 'Failed'}
          </Text>
        </Flex>
        <Flex flex={1} flexDirection="column" color="black">
          <Card h="92px" w="790px" bg="white" ms="30px" mt="40px">
            <Flex flexDirection="column" ms="20px">
              <Text fontSize="16px" fontWeight="400" mt="15px">
                Amount
              </Text>
              <Text fontSize="22px" fontWeight="700" mt="10px">
                {rupiahFormat(location.state.amount)}
              </Text>
            </Flex>
          </Card>
          <Card h="92px" w="790px" bg="white" ms="30px" mt="20px">
            <Flex flexDirection="column" ms="20px">
              <Text fontSize="16px" fontWeight="400" mt="15px">
                Current Total Balance
              </Text>
              <Text fontSize="22px" fontWeight="700" mt="10px">
                {rupiahFormat(data.balance)}
              </Text>
            </Flex>
          </Card>
          <Card h="92px" w="790px" bg="white" ms="30px" mt="30px">
            <Flex flexDirection="column" ms="20px">
              <Text fontSize="16px" fontWeight="400" mt="15px">
                Date & Time
              </Text>
              <Text fontSize="22px" fontWeight="700" mt="10px">
                {dateNow.toLocaleDateString()} - {dateNow.toLocaleTimeString()}
              </Text>
            </Flex>
          </Card>
          <Card h="92px" w="790px" bg="white" ms="30px" mt="20px">
            <Flex flexDirection="column" ms="20px">
              <Text fontSize="16px" fontWeight="400" mt="15px">
                Branch Company
              </Text>
              <Text fontSize="22px" fontWeight="700" mt="10px">
                {location.state.notes}
              </Text>
            </Flex>
          </Card>
          <TopUpCard />
          <Flex flex={1} flexDirection="row-reverse" mt="51px">
            {isSuccess ? (
              <>
                <Button
                  colorScheme="cyan"
                  h="57px"
                  w="170px"
                  borderRadius="12px"
                  me="30px"
                  textColor="white">
                  Back To Home
                </Button>
                <Button
                  colorScheme="gray"
                  h="57px"
                  w="243px"
                  borderRadius="12px"
                  me="30px"
                  textColor="cyan">
                  <Flex flexDirection="row">
                    <DownloadIcon size="22px" />
                    <Text ps="25px" fontWeight="700" fontSize="18px">
                      Download PDF
                    </Text>
                  </Flex>
                </Button>
                <Button
                  colorScheme="gray"
                  h="57px"
                  w="57px"
                  borderRadius="12px"
                  me="30px"
                  textColor="black">
                  <i className="fa fa-share-alt fa-2xl" aria-hidden="true" />
                </Button>
              </>
            ) : (
              <Button
                colorScheme="cyan"
                h="57px"
                w="170px"
                borderRadius="12px"
                me="30px"
                textColor="white">
                Try Again
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </DashboardContainer>
  );
}

export default TopUpStatus;
