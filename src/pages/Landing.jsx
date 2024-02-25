import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import { useSelector } from 'react-redux';

import AuthWaveBg from '@/components/auth/AuthWaveBg';

function Landing() {
  const isAuth = useSelector((state) => state.users.isAuth);
  return (
    <Box>
      <Box bgColor="cyan.600">
        <Flex h="20" minWidth="max-content" alignBoxs="center" gap="4">
          <Box padding="10" color="white">
            <Heading size="md">Fazzpay</Heading>
          </Box>
          <Spacer />
          <Box color="white">
            {isAuth ? (
              <ButtonGroup gap="3" padding="5">
                <Link href="/home">
                  <Button colorScheme="cyan.600">Dashboard</Button>
                </Link>
              </ButtonGroup>
            ) : (
              <ButtonGroup gap="3" padding="5">
                <Link href="/login">
                  <Button colorScheme="cyan.600">Log in</Button>
                </Link>
                <Link href="/signup">
                  <Button colorScheme="cyan.600" variant="outline">
                    Sign Up
                  </Button>
                </Link>
              </ButtonGroup>
            )}
          </Box>
        </Flex>
        <Flex pos="relative" zIndex={100}>
          <Center>
            <Box padding="40px" color="white">
              <Heading>Awesome App For Saving Time</Heading>
              <Text>
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </Text>
              <br />
              {isAuth ? (
                ''
              ) : (
                <Link href="/signup">
                  <Button colorScheme="cyan.600" variant="outline">
                    Try It Free
                  </Button>
                </Link>
              )}
            </Box>
          </Center>
          <Box>
            <Image src="/src/assets/png-phone.png" h="550px" w="auto" />
          </Box>
        </Flex>
        <Box
          pos="absolute"
          left="0"
          right="0"
          bottom="0"
          w="100%"
          h="90%"
          zIndex={0}>
          <AuthWaveBg />
        </Box>
      </Box>
      <Box pos="relative" zIndex={100} bgColor="gray.50" padding="5vh">
        <Box padding="5vh">
          <Center margin="0 0 5vh 0">
            <Heading>Why Choose Fazzpay?</Heading>
          </Center>
          <Center>
            <Text>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </Text>
          </Center>
        </Box>
        <Center>
          <Flex>
            <Box
              w="40vh"
              margin="3vh"
              padding="5vh"
              borderRadius="5vh"
              bgColor="white">
              <Center>
                <Image boxSize="15vh" src="/src/assets/phone.png" alt="phone" />
              </Center>
              <Center>
                <Heading as="h4" size="md">
                  24/7 Support
                </Heading>
              </Center>
              <br />
              <Center>
                <Text>
                  We have 24/7 contact support so you can contact us whenever
                  you want and we will respond it.
                </Text>
              </Center>
            </Box>
            <Box
              w="40vh"
              margin="3vh"
              padding="5vh"
              borderRadius="5vh"
              bgColor="white">
              <Center>
                <Image boxSize="15vh" src="/src/assets/lock.png" alt="lock" />
              </Center>
              <Center>
                <Heading as="h4" size="md">
                  Data Privacy
                </Heading>
              </Center>
              <br />
              <Center>
                <Text>
                  We make sure your data is safe in our database and we will
                  encrypt any data you submitted to us.
                </Text>
              </Center>
            </Box>
            <Box
              w="40vh"
              margin="3vh"
              padding="5vh"
              borderRadius="5vh"
              bgColor="white">
              <Center>
                <Image
                  boxSize="15vh"
                  src="/src/assets/download.png"
                  alt="download"
                />
              </Center>
              <Center>
                <Heading as="h4" size="md">
                  Easy Download
                </Heading>
              </Center>
              <br />
              <Center>
                <Text>
                  Fazzpay is 100% totally free to use it’s now available on
                  Google Play Store and App Store.
                </Text>
              </Center>
            </Box>
          </Flex>
        </Center>
      </Box>
      <Box pos="relative" zIndex={100} bgColor="gray.200" padding="5vh">
        <Center>
          <Flex>
            <Image
              boxSize="16.6%"
              src="/src/assets/microsoft.png"
              alt="microsoft"
            />
            <Image
              boxSize="16.6%"
              src="/src/assets/dropbox.png"
              alt="dropbox"
            />
            <Image boxSize="16.6%" src="/src/assets/hm.png" alt="hm" />
            <Image boxSize="16.6%" src="/src/assets/airbnb.png" alt="airbnb" />
            <Image boxSize="16.6%" src="/src/assets/canon.png" alt="canon" />
            <Image boxSize="16.6%" src="/src/assets/dell.png" alt="dell" />
          </Flex>
        </Center>
      </Box>
      <Box
        margin="5vh 0 5vh 0"
        pos="relative"
        zIndex={100}
        bgColor="white"
        padding="5vh">
        <Center>
          <Box
            margin="0 0 5vh 0"
            borderRadius="10vh"
            bg="gray.200"
            p="2vh"
            w="85vh"
            h="15vh">
            <Center color="Blue.300">
              <Heading margin="1vh 0 1vh 0" as="h2" size="3xl">
                Rp. 390.736.500
              </Heading>
            </Center>
          </Box>
        </Center>
        <Center margin="0 0 5vh 0">
          <Heading as="h2" size="2xl">
            Money has Been Transfered.
          </Heading>
        </Center>
        <Center>
          <Text>
            That amount of money has been transfered from all users. We still
            counting and going strong!
          </Text>
        </Center>
      </Box>
      <Box pos="relative" zIndex={100} bgColor="gray.200" padding="5vh 0 5vh 0">
        <Flex>
          <Image w="50%" src="/src/assets/png-phone-2.png" alt="phone-2" />
          <Box>
            <Box padding="10vh 0 7vh 0">
              <Center>
                <Heading as="h2" size="3xl">
                  All The Great Fazzpay Features.
                </Heading>
              </Center>
            </Box>
            <Box
              padding="4vh"
              margin="5vh 0 5vh 0"
              w="80vh"
              borderRadius="3vh"
              bgColor="white">
              <Heading as="h4" size="md">
                1. Small Fee
              </Heading>
              <Text>
                We only charge 5% of every success transaction done in Fazzpay
                app.
              </Text>
            </Box>
            <Box
              padding="4vh"
              margin="5vh 0 5vh 0"
              w="80vh"
              borderRadius="3vh"
              bgColor="white">
              <Heading as="h4" size="md">
                2. Data Secured
              </Heading>
              <Text>
                All your data is secured properly in our system and it’s
                encrypted.
              </Text>
            </Box>
            <Box
              padding="4vh"
              margin="5vh 0 5vh 0"
              w="80vh"
              borderRadius="3vh"
              bgColor="white">
              <Heading as="h4" size="md">
                3. User Friendly
              </Heading>
              <Text>
                Fazzpay come up with modern and sleek design and not
                complicated.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box pos="relative" zIndex={100} bgColor="gray.50" padding="5vh 0 5vh 0">
        <Box padding="0 0 5vh 0">
          <Center margin="10vh 0 5vh 0">
            <Heading as="h2" size="2xl">
              What Users are Saying.
            </Heading>
          </Center>
          <Center>
            <Text>
              We have some great features from the application and it’s totally
              free to use by all users around the world.
            </Text>
          </Center>
        </Box>
        <Center>
          <Box w="90%">
            <Carousel BoxsToShow={1}>
              <Box w="100%" m="5vh">
                <Box padding="5vh" borderRadius="3vh" bgColor="white">
                  <Center>
                    <Image w="10%" src="/src/assets/alex.png" alt="alex.png" />
                  </Center>
                  <br />
                  <Center>
                    <Heading as="h4" size="md">
                      Alex Hansinburg
                    </Heading>
                  </Center>
                  <Center>
                    <Text>Designer</Text>
                  </Center>
                  <br />
                  <Center>
                    <Text>
                      “This is the most outstanding app that I’ve ever try in my
                      live, this app is such an amazing masterpiece and it’s
                      suitable for you who is bussy with their bussiness and
                      must transfer money to another person aut there. Just try
                      this app and see the power!”
                    </Text>
                  </Center>
                </Box>
              </Box>
              <Box w="100%" m="5vh">
                <Box padding="5vh" borderRadius="3vh" bgColor="white">
                  <Center>
                    <Image w="10%" src="/src/assets/chaw.png" alt="chaw.png" />
                  </Center>
                  <br />
                  <Center>
                    <Heading as="h4" size="md">
                      Sherina Chaw
                    </Heading>
                  </Center>
                  <Center>
                    <Text>Designer</Text>
                  </Center>
                  <br />
                  <Center>
                    <Text>
                      “I use this app since 2 years ago and this is the best app
                      that I’ve ever use in my entire life”
                    </Text>
                  </Center>
                </Box>
              </Box>
              <Box w="100%" m="5vh">
                <Box padding="5vh" borderRadius="3vh" bgColor="white">
                  <Center>
                    <Image w="10%" src="/src/assets/mera.png" alt="mera.png" />
                  </Center>
                  <br />
                  <Center>
                    <Heading as="h4" size="md">
                      Jessica Mera
                    </Heading>
                  </Center>
                  <Center>
                    <Text>Student</Text>
                  </Center>
                  <br />
                  <Center>
                    <Text>
                      “I use Fazzpay to manage all financial needs. It’s super
                      easy to use and it’s 100% free app”
                    </Text>
                  </Center>
                </Box>
              </Box>
              <Box w="100%" m="5vh">
                <Box padding="5vh" borderRadius="3vh" bgColor="white">
                  <Center>
                    <Image
                      w="10%"
                      src="/src/assets/robert.png"
                      alt="robert.png"
                    />
                  </Center>
                  <br />
                  <Center>
                    <Heading as="h4" size="md">
                      Robert Chandler
                    </Heading>
                  </Center>
                  <Center>
                    <Text>Businessman</Text>
                  </Center>
                  <br />
                  <Center>
                    <Text>
                      “Since I’m using this app, I’m not going to move to
                      another similar app. Thank you Fazzpay!”
                    </Text>
                  </Center>
                </Box>
              </Box>
            </Carousel>
          </Box>
        </Center>
      </Box>
      <Box pos="relative" zIndex={100} bgColor="cyan.600" color="white">
        <Box padding="10vh">
          <Heading>Fazzpay</Heading>
          <br />
          <Text>
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </Text>
        </Box>
        <Box padding="10vh" w="100%">
          <hr />
          <br />
          <Flex>
            <Box>
              <Text>2020 Fazzpay. All right reserved.</Text>
            </Box>
            <Spacer />
            <Text>+62 5637 8882 9901&nbsp;&nbsp;</Text>
            <Text>contact@zwallet.com</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Landing;
