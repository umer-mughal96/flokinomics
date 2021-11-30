import React from 'react'
import { Flex, Box, Text, VStack, Heading, Container } from '@chakra-ui/layout'
const Stats = () => {
    return (
        <>
            <Container maxW="1200px">
                <Box textAlign='center'>
                    <Heading as="h2" size="xl" textAlign='center' pt="3" pb='10px' color="white">Stats</Heading>
                    <Flex bg='#1d1d1d' color='white' flexWrap="wrap" alignItems="center" justifyContent="space-between" px="5" py="5" borderRadius="1rem">
                        <VStack borderRadius='14' p='16px' w={{base: "50%", md: "33%", lg: "25%"}}>
                            <Heading d='flex' color='#eac642' alignItems='center' fontWeight="100" as='h3' size='lg' justifyContent='center' pb={{base: '0px', md: '0px', lg: '20px'}}>126k</Heading>
                            <Text color='#eac642'>Daily Sales
                            </Text>
                        </VStack>
                        <VStack borderRadius='14' p='16px' w={{base: "50%", md: "33%", lg: "25%"}}>
                            <Heading color='#eac642' d='flex' alignItems='center' fontWeight="100" as='h3' size='lg' justifyContent='center' pb={{base: '0px', md: '0px', lg: '20px'}}>12.4M</Heading>
                            <Text color='#eac642'>Total Sales
                            </Text>
                        </VStack>
                        <VStack borderRadius='14' p='16px' w={{base: "50%", md: "33%", lg: "25%"}}>
                            <Heading color='#eac642' d='flex' alignItems='center' fontWeight="100" as='h3' size='lg' justifyContent='center' pb={{base: '0px', md: '0px', lg: '20px'}}>8,399</Heading>
                            <Text color='#eac642'>Daily $FLOKIN Volume
                            </Text>
                        </VStack>
                        <VStack borderRadius='14' p='16px' w={{base: "50%", md: "33%", lg: "25%"}}>
                            <Heading color='#eac642' d='flex' alignItems='center' fontWeight="100" as='h3' size='lg' justifyContent='center' pb={{base: '0px', md: '0px', lg: '20px'}}>4.2 T</Heading>
                            <Text color='#eac642'>Total $FLOKIN Volume
                            </Text>
                        </VStack>
                    </Flex>
                </Box>
            </Container>
        </>
    )
}

export default Stats
