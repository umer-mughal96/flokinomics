import { Container, Link, VStack } from '@chakra-ui/layout'
import React from 'react'
import sitebg from '../../assets/images/sitebg.jpg'
// import gods from '../../assets/images/herodogs.png'
import member1 from '../../assets/images/member_1.jpg'
import member2 from '../../assets/images/member_2.jpg'
import member3 from '../../assets/images/member_3.jpg'
import member4 from '../../assets/images/member_4.jpg'
import { Image } from '@chakra-ui/image'
import { Stack, Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/layout'


const About = () => {
    return (
        <Container maxW='full' bgImage={sitebg} py='140'>

            <VStack direction={["column", "row"]} spacing="24px" color='white'>
                <Box w={{base: '100%', md: '100%', lg: '60%'}}>
                    <Heading as='h1' size='2xl' textAlign='center'>About Us</Heading>
                    <Text py='6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Text>
                </Box>
            </VStack>
            <VStack>
                <Heading color='white' as='h2' size='xl' textAlign='center' py='10'>The Team</Heading>
            </VStack>
            <Stack direction={["column", "row"]} spacing="24px" maxW='1170px' m='auto'>

                <Box bg='#1d1d1d' borderRadius='6px'>
                    <Image src={member1} borderRadius='6px' />
                    <Box p='10px'>
                        <Text color='#f8b136' fontWeight='600'>Human Person</Text>
                        <Text color='#8b8b8b' fontWeight='600'>Founder/CEO</Text>
                    </Box>
                </Box>
                <Box bg='#1d1d1d' borderRadius='6px'>
                    <Image src={member2} borderRadius='6px' />
                    <Box p='10px'>
                        <Text color='#f8b136' fontWeight='600'>Human Person</Text>
                        <Text color='#8b8b8b' fontWeight='600'>Founder/CEO</Text>
                    </Box>
                </Box>
                <Box bg='#1d1d1d' borderRadius='6px'>
                    <Image src={member3} borderRadius='6px' />
                    <Box p='10px'>
                        <Text color='#f8b136' fontWeight='600'>Human Person</Text>
                        <Text color='#8b8b8b' fontWeight='600'>Founder/CEO</Text>
                    </Box>
                </Box>
                <Box bg='#1d1d1d' borderRadius='6px'>
                    <Image src={member4} borderRadius='6px' />
                    <Box p='10px'>
                        <Text color='#f8b136' fontWeight='600'>Human Person</Text>
                        <Text color='#8b8b8b' fontWeight='600'>Founder/CEO</Text>
                    </Box>
                </Box>
            </Stack>
        </Container>
    )
}

export default About
