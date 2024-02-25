import { Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

function HeaderText({ heading, subHeading }) {
  return (
    <Flex display={{ base: 'none', md: 'flex' }} flexDir="column" gap={6}>
      <Text fontSize="xl" fontWeight="700">
        {heading}
      </Text>
      <Text fontSize="sm" textAlign="justify">
        {subHeading}
      </Text>
    </Flex>
  );
}

HeaderText.propTypes = {
  heading: PropTypes.node.isRequired,
  subHeading: PropTypes.node.isRequired,
};

export default HeaderText;
