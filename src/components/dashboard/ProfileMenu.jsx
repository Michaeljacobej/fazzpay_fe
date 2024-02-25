import { Button, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function ProfileMenu({ name, onClick, showArrow }) {
  return (
    <Button size="lg" justifyContent="space-between" onClick={onClick}>
      <Text>{name}</Text>
      {showArrow && <Icon as={FaArrowRight} />}
    </Button>
  );
}

export default ProfileMenu;
