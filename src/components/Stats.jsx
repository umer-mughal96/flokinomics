import React from 'react'
import { Flex, Box, Spacer, Text, Grid, HStack, Link, Heading, Container } from '@chakra-ui/layout'
import { InfoIcon } from '@chakra-ui/icons'
const Stats = () => {
    return (
        <>
          <Container maxW="1200px">
            <Box py='90px' textAlign='center'>
                <Heading as="h2" size="xl" textAlign='center' pb='40px'>Stats</Heading>
                <Flex bg='#1d1d1d' color='white'>
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                        <Heading d='flex' color='#eac642' alignItems='center' as='h3' size='md' justifyContent='center' pb='20px'>126k</Heading>
                        <Text color='#eac642'>Daily Sales
                        </Text>
                    </Box>
                    <Spacer />
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                        <Heading color='#eac642' d='flex' alignItems='center' as='h3' size='md' justifyContent='center' pb='20px'>12.4M</Heading>

                        <Text color='#eac642'>Total Sales
                        </Text>
                    </Box>
                    <Spacer />
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                    <Heading color='#eac642' d='flex' alignItems='center' as='h3' size='md' justifyContent='center' pb='20px'>8,399</Heading>
                        <Text color='#eac642'>Daily $FLOKIN Volume
                        </Text>
                    </Box>
                    <Spacer />
                    <Box bg="#1d1d1d" borderRadius='14' p='16px' w="24%" >
                    <Heading color='#eac642' d='flex' alignItems='center' as='h3' size='md' justifyContent='center' pb='20px'>4.2 T</Heading>
                        <Text color='#eac642'>Total $FLOKIN Volume
                        </Text>
                    </Box>
                </Flex>


            </Box>
        </Container>  
        </>
    )
}

export default Stats
