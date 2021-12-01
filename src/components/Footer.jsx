import React from 'react'
import { Stack, Box, Text, UnorderedList, ListItem, Container, Link, Divider, Flex, Spacer, HStack, VStack } from '@chakra-ui/layout'
import { AddIcon, SunIcon } from '@chakra-ui/icons'
import { Menu, MenuButton } from '@chakra-ui/menu'
import { Button } from '@chakra-ui/button'
import { MenuList, MenuItem } from '@chakra-ui/menu'
import { EmailIcon } from '@chakra-ui/icons'

import flag from '../assets/images/flag.jpg'
import { Image } from '@chakra-ui/image'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => {
    return (
        <VStack maxW='full' bg='#0f0f0f'> 
        <Container maxW='1300px' >
            <Stack direction={["column", "row"]} spacing="24px" py='60px' color='#8b8b8b'>
                <Box w={{base: '100%', md: '30%'}} h="">
                    <Text>
                        Flokinomics Marketplace is a next generation marketplace where artists
                        and collectors can create,sell and collect digital items secured with blockchain.
                    </Text>
                    <Menu>
                        <MenuButton w='110px' mt='20px' as={Button} bgColor='#272727' borderRadius='3xl' px='2'  >
                            <Box w='26px' h='26px' d='flex' alignItems='center'>
                                <Image me='2'
                                    width='100%'
                                    height='100%'
                                    objectFit='cover'
                                    borderRadius='50%'
                                    src={flag} alt='' /> English
                            </Box>
                        </MenuButton>
                        <MenuList>
                            <MenuItem minH="48px">
                                <span>English</span>
                            </MenuItem>
                            <MenuItem minH="40px">
                                <span>French</span>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box w={{base: '100%', md: '30%'}} h="">
                    <Text color='white' pb='18px' >Marketplace</Text>
                    <UnorderedList style={{ listStyleType: 'none', marginLeft: '0px', }} spacing='16px'>
                        <ListItem ><Link>Explore</Link></ListItem>
                        <ListItem ><Link>Creators</Link></ListItem>
                        <ListItem ><Link>Website General Terms of Use</Link></ListItem>
                        <ListItem ><Link>Privacy Policy</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Box w={{base: '100%', md: '30%'}} h="">
                    <Text color='white' pb='18px'>Resources</Text>
                    <UnorderedList spacing='16px' style={{ listStyleType: 'none', marginLeft: '0px' }}>
                        <ListItem ><Link>White Paper</Link></ListItem>
                        <ListItem ><Link>Telegram Community</Link></ListItem>
                    </UnorderedList>
                </Box>
            </Stack>
            <Stack color='#8b8b8b' p='0' m='0'>
                <Box>
                    <Divider />
                </Box>
                <Flex  maxW='1270px' mx='auto'>
                    <Box py="4"  px='0'>
                        <Text>@ 2021 Flokinomics All Rights Reserved.</Text>
                    </Box>
                    <Spacer />
                    <Box py="4"  px='0' g="green.400">
                        <HStack spacing="24px">
                            <Link>
                                <SunIcon />
                            </Link>
                            <Link>
                                <SunIcon />
                            </Link>
                            <Link>
                                <AddIcon />
                            </Link>
                        </HStack>
                    </Box>
                </Flex>
            </Stack>
        </Container>
        </VStack>
    )
}

export default Footer
