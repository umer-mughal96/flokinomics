import React from 'react'
import { Flex, Box, Spacer, Text, Grid, HStack, Link, Heading, Container } from '@chakra-ui/layout'
import { InfoIcon } from '@chakra-ui/icons'


const GettingStarted = () => {
    return (
        <Container maxW="1200px">
            <Box pt="10" pb='90px'>
                <Heading as="h2" size="xl" textAlign='center' pb='40px' color="white">How to Get Started</Heading>
                <Flex color='white'>
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                        <Heading d='flex' alignItems='center' as='h3' size='sm' justifyContent='center' pb='4' fontWeight="100"><InfoIcon marginRight='4' />Add Wallet</Heading>
                        <Text fontSize="xs">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        </Text>
                        <Link textDecor='underline' color='#9e7609'>Connect Instructions</Link>
                    </Box>
                </Flex>
            </Box>
        </Container>
    )
}

export default GettingStarted
