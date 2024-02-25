import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

function HeaderTextMobile({ heading, subHeading }) {
  return (
    <Flex
      display={{ base: 'flex', md: 'none' }}
      flexDir="column"
      gap="6"
      alignItems="center"
      textAlign="center">
      <Text fontSize="xl" fontWeight="700">
        {heading}
      </Text>
      <Text fontSize="sm">{subHeading}</Text>
    </Flex>
  );
}

HeaderTextMobile.propTypes = {
  heading: PropTypes.node.isRequired,
  subHeading: PropTypes.node.isRequired,
};

export default HeaderTextMobile;
