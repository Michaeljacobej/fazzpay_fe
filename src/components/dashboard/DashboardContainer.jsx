import { Flex, Hide, Show } from '@chakra-ui/react';
import React from 'react';

import BottomNavBar from '@/components/dashboard/BottomNavBar';
import Footer from '@/components/dashboard/Footer';
import Header from '@/components/dashboard/Header';
import SideNav from '@/components/dashboard/SideNav';
import HelmetTitle from '@/components/HelmetTitle';

function DashboardContainer({ id, name, children }) {
  return (
    <>
      <HelmetTitle title={name} />
      <Flex
        flex="1"
        bg="gray.50"
        position="relative"
        alignItems="center"
        flexDirection="column"
        textColor="gray.800">
        <Header />
        {/* set minHeight so when the main content is too short, the view height is still 100vh */}
        <Flex
          flex="1"
          my="8"
          w={{ base: '95vw', lg: '80vw' }}
          justify="center"
          gap="4">
          <Hide below="md">
            <SideNav active={id} />
          </Hide>
          <Flex flexDir="column" flex="1" minH="100%">
            {children}
          </Flex>
        </Flex>
        <Show below="md">
          <BottomNavBar active={id} />
        </Show>
        <Hide below="md">
          <Footer />
        </Hide>
      </Flex>
    </>
  );
}

export default DashboardContainer;
