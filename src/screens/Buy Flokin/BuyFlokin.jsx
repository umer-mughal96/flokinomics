import { Container, Link, VStack } from '@chakra-ui/layout'
import React from 'react'
import sitebg from '../../assets/images/sitebg.jpg'
import gods from '../../assets/images/herodogs.png'
import { Image } from '@chakra-ui/image'
import { Stack, Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'


const BuyFlokin = () => {
    return (
        <div>
            <Container maxW='full' bgImage={sitebg} py='120px' color='white'>
                <Flex alignItems="flex-start" w="full" h="full">
                    <VStack w={{ base: '10%', md: '15%', lg: '20%' }} h="full" px="4">
                        <Box w='60%' >
                            <Image
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                src={gods}
                                alt="Flokinomics dogs"
                            />
                        </Box>
                    </VStack>

                    <VStack w={{ base: '90%', md: '85%', lg: '60%' }}>
                        <Box>
                            <Heading as='h1' size='2xl' textAlign='center'>Buy $FLOKIN</Heading>
                            <Text py='6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </Text>
                        </Box>
                        <Heading as='h2'>Links to Exchange</Heading>
                        <UnorderedList listStyleType='none' spacing='20px'>
                            <ListItem textDecor='underline'><Link>www.thispersondoesnotexist.com</Link></ListItem>
                            <ListItem textDecor='underline'><Link>www.thispersondoesnotexist.com</Link></ListItem>
                            <ListItem textDecor='underline'><Link>www.thispersondoesnotexist.com</Link></ListItem>
                            <ListItem textDecor='underline'><Link>www.thispersondoesnotexist.com</Link></ListItem>
                        </UnorderedList>
                    </VStack>
                </Flex>
            </Container>

        </div>
    )
}

export default BuyFlokin
