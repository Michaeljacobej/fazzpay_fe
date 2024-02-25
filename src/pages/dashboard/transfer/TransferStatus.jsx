import { CheckIcon, CloseIcon, DownloadIcon } from '@chakra-ui/icons';
import { Button, Card, Circle, Flex, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useWalletBalance } from '@/api/wallet';
// import CardReceiver from '@/components/dashboard/CardReceiver';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { rupiahFormat } from '@/utils/helper';

function TransferStatus() {
  const { data } = useWalletBalance();
  // const { contactId } = useParams();
  const location = useLocation();

  // const contactDetail = useSelector((state) =>
  //   contactDetailSelector(state, Number(contactId)),
  // );
  const dateNow = useMemo(() => new Date(), []);
  const isSuccess = useMemo(() => location.state.success, [location]);

  return (
    <DashboardContainer id="transfer" name="Transfer">
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
            Transfer {isSuccess ? 'Success' : 'Failed'}
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
                Balance left
              </Text>
              <Text fontSize="22px" fontWeight="700" mt="10px">
                {rupiahFormat(data?.balance)}
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
                Notes
              </Text>
              <Text fontSize="22px" fontWeight="700" mt="10px">
                {location.state.notes}
              </Text>
            </Flex>
          </Card>
          <Text fontSize="18px" fontWeight="700" ms="30px" mt="40px">
            Transfer to
          </Text>
          {/* <CardReceiver item={contactDetail} /> */}
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

export default TransferStatus;
