import { Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

import { rupiahFormat } from '@/utils/helper';

// set the arrow (up/down) and arrow color
function arrowIcon(props) {
  let iconName = null;
  let iconCol = null;
  if (props === 'income') {
    iconName = FaArrowDown;
    iconCol = 'green.400';
  }
  if (props === 'expense') {
    iconName = FaArrowUp;
    iconCol = 'red';
  }
  return { iconName, iconCol };
}

function ItemNotification({ item }) {
  const icon = arrowIcon(item.type);
  return (
    <Flex
      width="100%"
      p="20px"
      bg="white"
      borderRadius="10px"
      boxShadow="md"
      my="10px">
      <Icon as={icon.iconName} boxSize="28px" mr="10px" color={icon.iconCol} />
      <Flex direction="column" gap="8px">
        <Text fontSize="sm">
          {item.type === 'expense'
            ? `Transfer to ${item.to.fullname}`
            : `Transfered from ${item.from.fullname}`}
        </Text>
        <Text fontSize="lg" as="b">
          {rupiahFormat(item.amount)}
        </Text>
      </Flex>
    </Flex>
  );
}
export default ItemNotification;
