import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

import HelmetTitle from '@/components/HelmetTitle';

function PageNotFound() {
  return (
    <>
      <HelmetTitle title="Page Not Found" />
      <Flex flex="1" flexDir="column" alignItems="center" justify="center">
        <Text fontSize="9xl">😕</Text>
        <Text fontWeight="extrabold">Page Not Found.</Text>
      </Flex>
    </>
  );
}

export default PageNotFound;
