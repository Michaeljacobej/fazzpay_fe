import { Button, Flex } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { FiArrowUp, FiGrid, FiLogOut, FiPlus, FiUser } from 'react-icons/fi';
// import { MdPayment } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import ItemSideNav from '@/components/dashboard/ItemSideNav';
import { doLogout } from '@/store/reducer/users';

function SideNav({ active }) {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return (
    <Flex
      py="8"
      bgColor="white"
      rounded="3xl"
      // w="20vw"
      boxShadow="md"
      direction="column"
      overflow="hidden"
      justifyContent="space-between"
      fontSize="lg">
      <Flex direction="column" gap="3" alignItems="stretch">
        <Link to="/home">
          <ItemSideNav
            icon={FiGrid}
            name="Dashboard"
            isActive={active === 'home'}
          />
        </Link>
        <Link to="/transfer">
          <ItemSideNav
            icon={FiArrowUp}
            name="Transfer"
            isActive={active === 'transfer'}
          />
        </Link>
        <Link to="/topup">
          <ItemSideNav
            icon={FiPlus}
            name="Top Up"
            isActive={active === 'topup'}
          />
        </Link>
        <Link to="/withdraw">
          <ItemSideNav
            icon={FaMoneyBill}
            name="Withdraw"
            isActive={active === 'withdraw'}
          />
        </Link>
        {/* <Link to="/payment">
          <ItemSideNav
            icon={MdPayment}
            name="payment"
            isActive={active === 'payment'}
          />
        </Link> */}
        <Link to="/profile">
          <ItemSideNav
            icon={FiUser}
            name="Profile"
            isActive={active === 'profile'}
          />
        </Link>
      </Flex>
      <Button variant="unstyled" onClick={onLogout}>
        <ItemSideNav icon={FiLogOut} name="Logout" isActive={false} />
      </Button>
    </Flex>
  );
}

export default SideNav;
