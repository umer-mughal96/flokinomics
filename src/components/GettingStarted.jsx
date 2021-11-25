import React from 'react'
import { Flex, Box, Spacer, Text, Grid, HStack, Link, Heading, Container } from '@chakra-ui/layout'
import { InfoIcon } from '@chakra-ui/icons'


const GettingStarted = () => {
    return (
        <Container maxW="1200px">
            <Box py='90px'>
                <Heading as="h2" size="xl" textAlign='center' pb='40px'>How to Get Started</Heading>
                <Flex color='white'>
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                        <Heading d='flex' alignItems='center' as='h3' size='md' justifyContent='center' pb='20px'><InfoIcon w={12} h={12} marginRight='4' />Add Wallet</Heading>
                        <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        </Text>
                        <Link textDecor='underline' color='#9e7609'>Connect Instructions</Link>
                    </Box>
                    <Spacer />
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                        <Heading d='flex' alignItems='center' as='h3' size='md' justifyContent='center' pb='20px'><InfoIcon w={12} h={12} marginRight='4' />Create a Collection</Heading>

                        <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        </Text>
                    </Box>
                    <Spacer />
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                    <Heading d='flex' alignItems='center' as='h3' size='md' justifyContent='center' pb='20px'><InfoIcon w={12} h={12} marginRight='4' />Add to Your Collection</Heading>
                        <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        </Text>
                    </Box>
                    <Spacer />
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                    <Heading d='flex' alignItems='center' as='h3' size='md' justifyContent='center' pb='20px'><InfoIcon w={12} h={12} marginRight='4' />Sell an Item</Heading>
                        <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        </Text>
                    </Box>
                </Flex>


            </Box>
        </Container>
    )
}

export default GettingStarted
