import { Flex } from '@chakra-ui/react';
import React from 'react';
import { FiArrowUp, FiGrid, FiPlus, FiUser } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ItemBottomNavBar from '@/components/dashboard/ItemBottomNavBar';

function BottomNavBar({ active }) {
  return (
    <Flex
      pos="sticky"
      bottom="0"
      bgColor="cyan.600"
      w="100%"
      justify="space-evenly">
      <Link to="/home">
        <ItemBottomNavBar
          icon={FiGrid}
          name="Dashboard"
          isActive={active === 'home'}
        />
      </Link>
      <Link to="/transfer">
        <ItemBottomNavBar
          icon={FiArrowUp}
          name="Transfer"
          isActive={active === 'transfer'}
        />
      </Link>
      <Link to="/topup">
        <ItemBottomNavBar
          icon={FiPlus}
          name="Top Up"
          isActive={active === 'topup'}
        />
      </Link>
      <Link to="/payment">
        <ItemBottomNavBar
          icon={MdPayment}
          name="payment"
          isActive={active === 'payment'}
        />
      </Link>
      <Link to="/profile">
        <ItemBottomNavBar
          icon={FiUser}
          name="Profile"
          isActive={active === 'profile'}
        />
      </Link>
    </Flex>
  );
}

export default BottomNavBar;
